using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Mapping
{
    public static class CauHoiMapping
    {
        public static IEnumerable<CauHoi> ToModel(this GetListCauHoi_KhongThuocDeThiResponse response)
        {
            return response.CauHois;
        }
    }
}