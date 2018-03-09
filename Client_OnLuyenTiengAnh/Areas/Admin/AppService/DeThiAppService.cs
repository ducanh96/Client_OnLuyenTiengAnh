using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Request;
using Client_OnLuyenTiengAnh.Areas.Admin.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.AppService
{
    public class DeThiAppService
    {
        public DeThiService _deThiService { get; set; }
        

        public DeThiAppService()
        {
            _deThiService = new DeThiService();
        }

        public async Task<IEnumerable<DeThi>> GetListDeThi_ChuDe(int maChuDe)
        {
            return await _deThiService.GetListDeThi_ChuDe(maChuDe);
        }

        public async Task<bool> Add(DeThi deThi)
        {
            DeThiAddRequest deThiAddRequest = new DeThiAddRequest
            {
                deThi = deThi
            };
            return await _deThiService.Add(deThiAddRequest);
        }

        public async Task<int> GetLastId(string table)
        {
          
            return await _deThiService.GetLastId(table);
        }

        public async Task<bool> UpdateCauHoi_DeThi(int IdCauHoi,int IDDeThi)
        {
            UpdateCauHoi_DeThiRequest updateCauHoi_DeThiRequest = new UpdateCauHoi_DeThiRequest
            {
                IDCauHoi = IdCauHoi,
                IDDeThi = IDDeThi
            };
            return await _deThiService.UpdateCauHoi_DeThi(updateCauHoi_DeThiRequest);
        }
    }
}