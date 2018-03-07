using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Mapping
{
    public static class DeThiMapping
    {
        public static IEnumerable<DeThi> ToModel(this GetListDeThi_ChuDeResponse response)
        {
            return response.deThis;
        }

        
    }
}