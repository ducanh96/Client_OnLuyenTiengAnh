using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Response
{
    public class GetListCauHoi_KhongThuocDeThiResponse
    {
        public IEnumerable<CauHoi> CauHois { get; set; }
    }
}