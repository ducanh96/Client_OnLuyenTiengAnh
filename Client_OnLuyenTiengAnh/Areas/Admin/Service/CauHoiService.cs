using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Client_OnLuyenTiengAnh.Areas.Admin.Mapping;
using System.Web;

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
    }
}