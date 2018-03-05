using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.AppService
{
    public class ChuDeAppService
    {
        public ChuDeService chuDeService { get; set; }

        public ChuDeAppService()
        {
            chuDeService = new ChuDeService();
        }

        public async Task<IEnumerable<ChuDe>> GetListChuDe()
        {
            return await chuDeService.GetListChuDe();
        }
    }
}