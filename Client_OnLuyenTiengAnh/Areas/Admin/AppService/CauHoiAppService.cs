using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using Client_OnLuyenTiengAnh.Areas.Admin.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.AppService
{
    public class CauHoiAppService
    {
        public CauHoiService _cauHoiService { get; set; }


        public CauHoiAppService()
        {
            _cauHoiService = new CauHoiService();
        }

        public async Task<IEnumerable<CauHoi>> GetListCauHoi_KhongThuocDeThi(int maChuDe)
        {
            return await _cauHoiService.GetListCauHoi_KhongThuocDeThi(maChuDe);
        }

        public List<CauHoi> LayDSCHDuocChon(int[] IDCauHoiDuocChon, List<CauHoi> lstCHKhongThuocDT)
        {
            return _cauHoiService.LayDSCHDuocChon(IDCauHoiDuocChon, lstCHKhongThuocDT);
        }

        public async Task<IEnumerable<GetListNghe_CauHoiResponse>> GetListNghe_CauHoi(int maTopic)
        {
            return await _cauHoiService.GetListNghe_CauHoi(maTopic) as List<GetListNghe_CauHoiResponse>;
        }
        public async Task<GetListCauHoi_DeThiResponse> GetListCauHoi_DeThi(int idDeThi)
        {
            return await _cauHoiService.GetListCauHoi_DeThi(idDeThi);
        }

        public async Task<IEnumerable<GetListDoc_CauHoiResponse>> GetListDoc_CauHoi(int maTopic)
        {
            return await _cauHoiService.GetListDoc_CauHoi(maTopic) as List<GetListDoc_CauHoiResponse>;
        }

    }
}