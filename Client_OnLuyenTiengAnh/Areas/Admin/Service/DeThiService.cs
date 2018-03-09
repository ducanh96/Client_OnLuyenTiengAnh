using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Client_OnLuyenTiengAnh.Areas.Admin.Mapping;
using Client_OnLuyenTiengAnh.Areas.Admin.Request;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Service
{
    public class DeThiService
    {

        public async Task<IEnumerable<DeThi>> GetListDeThi_ChuDe(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<DeThi> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListDeThi_ChuDe, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    var listDeThi = await response.Content.ReadAsAsync<GetListDeThi_ChuDeResponse>();

                    result = listDeThi.ToModel();

                }

                return result;

            }
        }

        public async Task<int> GetLastId(string table)
        {

            using (var client = new HttpClient())
            {
                int Id = -1;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetLastId, table));

                if (response.IsSuccessStatusCode)
                {
                    Id = await response.Content.ReadAsAsync<int>();



                }

                return Id;

            }
        }

        public async Task<bool> Add(DeThiAddRequest deThiAddRequest)
        {
            using (var client = new HttpClient())
            {
                DeThiAddResponse deThiAddResponse = new DeThiAddResponse();
                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PostAsJsonAsync<DeThiAddRequest>(Constants.AddDeThi, deThiAddRequest);


                if (postTask.IsSuccessStatusCode)
                {
                    deThiAddResponse = await postTask.Content.ReadAsAsync<DeThiAddResponse>();
                    if (deThiAddResponse.Code == 1)
                        return true;
                    else
                        return false;


                }
                return false;
            }
        }

        public async Task<bool> UpdateCauHoi_DeThi(UpdateCauHoi_DeThiRequest request)
        {
            using (var client = new HttpClient())
            {
                DeThiAddResponse deThiAddResponse = new DeThiAddResponse();
                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PutAsJsonAsync<UpdateCauHoi_DeThiRequest>(Constants.UpdateCauHoi_DeThi, request);


                if (postTask.IsSuccessStatusCode)
                {
                    deThiAddResponse = await postTask.Content.ReadAsAsync<DeThiAddResponse>();
                    if (deThiAddResponse.Code == 1)
                        return true;
                    else
                        return false;


                }
                return false;
            }
        }

    }
}