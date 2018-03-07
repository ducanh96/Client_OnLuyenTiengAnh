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
    public class DeThiService
    {
        public string Message { get; set; }
        public async Task<IEnumerable<DeThi>> GetListDeThi_ChuDe(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<DeThi> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListDeThi_ChuDe,maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    var listDeThi = await response.Content.ReadAsAsync<GetListDeThi_ChuDeResponse>();

                    result = listDeThi.ToModel();
                        
                }

                return result;

            }
        }
    }
}