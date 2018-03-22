using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using Client_OnLuyenTiengAnh.Areas.Admin.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Client_OnLuyenTiengAnh.Areas.Admin.Request;

namespace Client_OnLuyenTiengAnh.Areas.Admin.AppService
{
    public class CauHoiAppService
    {
        public CauHoiService _cauHoiService { get; set; }
        public DocService _docService { get; set; }
        public NgheService _ngheService { get; set; }


        public CauHoiAppService()
        {
            _cauHoiService = new CauHoiService();
            _docService = new DocService();
            _ngheService = new NgheService();
        }

        public async Task<IEnumerable<CauHoi>> GetListCauHoi_KhongThuocDeThi(int maChuDe)
        {
            return await _cauHoiService.GetListCauHoi_KhongThuocDeThi(maChuDe);
        }

        public List<CauHoi> LayDSCHDuocChon(int[] IDCauHoiDuocChon, List<CauHoi> lstCHKhongThuocDT)
        {
            return _cauHoiService.LayDSCHDuocChon(IDCauHoiDuocChon, lstCHKhongThuocDT);
        }

        public async Task<IEnumerable<NgheEntity>> GetListNghe_CauHoi2(int maTopic)
        {
            return await _cauHoiService.GetListNghe_CauHoi2(maTopic);
        }
       
        public async Task<IEnumerable<DocEntity>> GetListDoc_CauHoi2(int maTopic)
        {
            return await _cauHoiService.GetListDoc_CauHoi2(maTopic);
        }
        public async Task<IEnumerable<GetListNghe_CauHoiResponse>> GetListNghe_CauHoi(int maTopic)
        {
            return await _cauHoiService.GetListNghe_CauHoi(maTopic);
        }

        public async Task<IEnumerable<GetListDoc_CauHoiResponse>> GetListDoc_CauHoi(int maTopic)
        {
            return await _cauHoiService.GetListDoc_CauHoi(maTopic);
        }
        public async Task<GetListCauHoi_DeThiResponse> GetListCauHoi_DeThi(int idDeThi)
        {
            return await _cauHoiService.GetListCauHoi_DeThi(idDeThi);
        }
        public async Task<IEnumerable<CauHoi>> GetListCauHoiByID(int maTopic)
        {
            return await _cauHoiService.GetListCauHoiByID(maTopic);
        }
        public async Task<int> Add(CauHoi c)
        {
            return await _cauHoiService.Add(c);
        }
        public async Task<int> Update(CauHoi c)
        {
            return await _cauHoiService.UpdateCauHoi(c);
        }
        public async Task<bool> Delete(DeleteRequest r)
        {
            return await _cauHoiService.DeleteCauHoi(r);
        }
        public async Task<bool> DeleteByIDDoc(DeleteRequest r)
        {
            return await _cauHoiService.DeleteCauHoiByIDDoc(r);
        }
        public async Task<bool> DeleteByIDNghe(DeleteRequest r)
        {
            return await _cauHoiService.DeleteCauHoiByIDNghe(r);
        }
        public async Task<int> AddDoanVan(Doc d)
        {
            return await _docService.Add(d);
        }
        public async Task<int> AddFileNghe(Nghe d)
        {
            return await _ngheService.Add(d);
        }
        public async Task<int> UpdateDoanVan(Doc c)
        {
            return await _docService.UpdateDoc(c);
        }
        public async Task<int> UpdateFileNghe(Nghe c)
        {
            return await _ngheService.UpdateNghe(c);
        }
        public async Task<bool> DeleteDoanVan(DeleteRequest c)
        {
            await _cauHoiService.DeleteCauHoiByIDDoc(c);
            return await _docService.DeleteDoc(c);
        }
        public async Task<bool> DeleteFileNghe(DeleteRequest c)
        {
            await _cauHoiService.DeleteCauHoiByIDNghe(c);
            return await _ngheService.DeleteNghe(c);
        }
    }
}