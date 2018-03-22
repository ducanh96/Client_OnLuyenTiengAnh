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
        public static IEnumerable<CauHoi> ToModel2(this GetListCauHoiByIDResponse response)
        {
            return response.CauHois;
        }
        //public static IEnumerable<DocEntity> ToModelDoc(this GetListDoc_CauHoiResponse response)
        //{
        //    DocEntity d = new DocEntity();
        //    d.doc= response.doc;
        //    d.CauHois = response.CauHois;
        //    return d;
        //}

    }
}