using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Client_OnLuyenTiengAnh.Areas.Admin.Mapping;
using System.Web;
using Client_OnLuyenTiengAnh.Areas.Admin.Request;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Service
{
    public class CauHoiService
    {
        public async Task<IEnumerable<CauHoi>> GetListCauHoi_KhongThuocDeThi(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<CauHoi> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListCauHoi_KhongThuocDeThi, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    var listCauHoi = await response.Content.ReadAsAsync<GetListCauHoi_KhongThuocDeThiResponse>();

                    result = listCauHoi.ToModel();

                }

                return result;

            }
        }

        public async Task<IEnumerable<NgheEntity>> GetListNghe_CauHoi2(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<NgheEntity> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListNghe_CauHoi, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    result = await response.Content.ReadAsAsync<IEnumerable<NgheEntity>>();

                    

                }

                return result;

            }
        }


        public async Task<IEnumerable<DocEntity>> GetListDoc_CauHoi2(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<DocEntity> result = new List<DocEntity>();
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListDoc_CauHoi, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    result = await response.Content.ReadAsAsync<IEnumerable<DocEntity>>();



                }

                return result;

            }
        }

        public async Task<IEnumerable<GetListNghe_CauHoiResponse>> GetListNghe_CauHoi(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<GetListNghe_CauHoiResponse> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListNghe_CauHoi, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    result = await response.Content.ReadAsAsync<IEnumerable<GetListNghe_CauHoiResponse>>();
                }

                return result;

            }
        }


        public async Task<IEnumerable<GetListDoc_CauHoiResponse>> GetListDoc_CauHoi(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                IEnumerable<GetListDoc_CauHoiResponse> result = new List<GetListDoc_CauHoiResponse>();
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListDoc_CauHoi, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    result = await response.Content.ReadAsAsync<IEnumerable<GetListDoc_CauHoiResponse>>();



                }

                return result;

            }
        }

        public List<CauHoi> LayDSCHDuocChon(int[] IDCauHoiDuocChon, List<CauHoi> lstCHKhongThuocDT)
        {
            var dsCHDuocChon = new List<CauHoi>();
            for (int i = 0; i < IDCauHoiDuocChon.Length; i++)
            {
                foreach (var item in lstCHKhongThuocDT)
                {
                    if (item.ID == IDCauHoiDuocChon[i])
                    {
                        dsCHDuocChon.Add(item);
                        break;
                    }

                }
            }
            return dsCHDuocChon;
        }

        public async Task<GetListCauHoi_DeThiResponse> GetListCauHoi_DeThi(int idDeThi)
        {

            using (var client = new HttpClient())
            {
                GetListCauHoi_DeThiResponse result = new GetListCauHoi_DeThiResponse();
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListCauHoi_DeThi, idDeThi));

                if (response.IsSuccessStatusCode)
                {
                    result = await response.Content.ReadAsAsync<GetListCauHoi_DeThiResponse>();

                    

                }

                return result;

            }
        }
        public async Task<IEnumerable<CauHoi>> GetListCauHoiByID(int maChuDe)
        {

            using (var client = new HttpClient())
            {
                GetListCauHoiByIDResponse lst = null;
                IEnumerable<CauHoi> result = null;
                client.BaseAddress = new Uri(Constants.URI);

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(string.Format(Constants.GetListCauHoiByID, maChuDe));

                if (response.IsSuccessStatusCode)
                {
                    lst = await response.Content.ReadAsAsync<GetListCauHoiByIDResponse>();

                    result=lst.ToModel2();

                }

                return result;

            }
        }
        public async Task<int> Add(CauHoi c)
        {
            using (var client = new HttpClient())
            {
                CauHoiAddResponse cauHoiAddResponse = new CauHoiAddResponse();
                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PostAsJsonAsync<CauHoi>(Constants.AddCauHoi, c);


                if (postTask.IsSuccessStatusCode)
                {
                    cauHoiAddResponse = await postTask.Content.ReadAsAsync<CauHoiAddResponse>();
                    return cauHoiAddResponse.Code;
                }
                return -1;
            }
        }
        public async Task<int> UpdateCauHoi(CauHoi c)
        {
            using (var client = new HttpClient())
            {
                CauHoiAddResponse deThiAddResponse = new CauHoiAddResponse();
                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PutAsJsonAsync<CauHoi>(Constants.UpdateCauHoi, c);


                if (postTask.IsSuccessStatusCode)
                {
                    deThiAddResponse = await postTask.Content.ReadAsAsync<CauHoiAddResponse>();
                    return deThiAddResponse.Code;
                }
                return -1;
            }
        }
        public async Task<bool> DeleteCauHoi(DeleteRequest request)
        {
            using (var client = new HttpClient())
            {
                
                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PutAsJsonAsync<DeleteRequest>(Constants.DeleteCauHoi, request);
                return postTask.IsSuccessStatusCode;
            }
        }
        public async Task<bool> DeleteCauHoiByIDDoc(DeleteRequest request)
        {
            using (var client = new HttpClient())
            {

                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PutAsJsonAsync<DeleteRequest>(Constants.DeleteCauHoiByIDDoc, request);
                return postTask.IsSuccessStatusCode;
            }
        }
        public async Task<bool> DeleteCauHoiByIDNghe(DeleteRequest request)
        {
            using (var client = new HttpClient())
            {

                client.BaseAddress = new Uri(Constants.URI);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var postTask = await client.PutAsJsonAsync<DeleteRequest>(Constants.DeleteCauHoiByIDNghe, request);
                return postTask.IsSuccessStatusCode;
            }
        }
    }
}