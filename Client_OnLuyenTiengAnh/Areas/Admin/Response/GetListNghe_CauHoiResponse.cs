using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Response
{
    public class GetListNghe_CauHoiResponse
    {
        public Nghe nghe { get; set; }
        public List<CauHoi> CauHois { get; set; }
    }
}