using Client_OnLuyenTiengAnh.Areas.Admin.Models;
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
    }
}