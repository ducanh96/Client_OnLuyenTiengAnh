using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Client_OnLuyenTiengAnh.Areas.Admin
{
    public static class Constants
    {
        public static string URI = "http://localhost:50405/";

        #region Chủ đề
        public static string GetListChuDe = "api/v1/ChuDe";

        #endregion

        #region Đề thi đọc
        public static string GetListDeThi_ChuDe = "api/v1/DeThi/{0}";
        #endregion
    }
}