using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Models
{
    public class CauHoi
    {
        public int ID { get; set; }
        public string TieuDe { get; set; }
        public string PhuongAnA { get; set; }
        public string PhuongAnB { get; set; }
        public string PhuongAnC { get; set; }
        public string PhuongAnD { get; set; }
        public string DapAn { get; set; }
        public int IDDoc { get; set; }
        public int IDNghe { get; set; }
        public int IDChuDe { get; set; }
        public int IDDeThi { get; set; }
    }
}