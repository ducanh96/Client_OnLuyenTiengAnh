using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Client_OnLuyenTiengAnh.Areas.Admin.Mapping;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Service
{
    public class ChuDeService
    {
        public async Task<IEnumerable<ChuDe>> GetListChuDe()
        {
            
            using (var client = new HttpClient())
            {
                IEnumerable<ChuDe> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response =await client.GetAsync(Constants.GetListChuDe);
               
                if (response.IsSuccessStatusCode)
                {
                    var ketqua = await response.Content.ReadAsAsync<ChuDeGetListResponse>();
                    result = ketqua.ToModel();

                }

                return result;

            }
        }
    }
}