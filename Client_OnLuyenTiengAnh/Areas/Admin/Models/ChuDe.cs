﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Models
{
    public class ChuDe
    {
        public int Id { get; set; }
        public string TenChuDe { get; set; }
    }

    public enum DSCHUDE
    {
       TuVungNguPhap=1,DocBienQuangCao=2,DocHieuDoanVan=3,DocDienTu=4
    }
}