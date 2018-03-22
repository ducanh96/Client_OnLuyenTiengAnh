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

        #region Đề thi 
        public static string GetListDeThi_ChuDe = "api/v1/DeThi/{0}";
        public static string GetListCauHoi_KhongThuocDeThi = "api/v1/CauHoi/KhongThuocDeThi/{0}";
        public static string AddDeThi = "api/v1/DeThi";
        public static string GetLastId = "api/v1/DeThi/GetLastId?table={0}";
        public static string UpdateCauHoi_DeThi = "api/v1/DeThi/UpdateCauHoi";
        public static string GetListNghe_CauHoi = "api/v1/CauHoi/Nghe/{0}";
        public static string GetDeThiById = "api/v1/DeThi/Get/{0}";
        public static string GetListDoc_CauHoi = "api/v1/CauHoi/Doc/{0}";
        #endregion




        #region Câu hỏi
        public static string GetListCauHoi_DeThi = "api/v1/CauHoi/{0}";
        public static string GetListCauHoiByID = "api/v1/CauHoi/get/{0}";
        public static string AddCauHoi = "api/v1/CauHoi";
        public static string UpdateCauHoi = "api/v1/CauHoi/UpdateCauHoi";
        public static string DeleteCauHoi = "api/v1/CauHoi/DeleteCauHoi";
        public static string DeleteCauHoiByIDDoc = "api/v1/CauHoi/DeleteCauHoiByIDDoc";
        public static string DeleteCauHoiByIDNghe = "api/v1/CauHoi/DeleteCauHoiByIDNghe";

        #endregion
        #region Đọc
        public static string AddDoanVan = "api/v1/Doc";
        public static string UpdateDoanVan = "api/v1/Doc/UpdateDoc";
        public static string DeleteDoanVan = "api/v1/Doc/DeleteDoc";

        #endregion
        #region Nghe
        public static string AddFileNghe = "api/v1/Nghe";
        public static string UpdateFileNghe = "api/v1/Doc/UpdateNghe";
        public static string DeleteFileNghe = "api/v1/Doc/DeleteNghe";

        #endregion

    }
}