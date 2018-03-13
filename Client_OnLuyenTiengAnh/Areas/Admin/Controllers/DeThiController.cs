using Client_OnLuyenTiengAnh.Areas.Admin.AppService;
using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Controllers
{
    public class DeThiController : Controller
    {
        public ChuDeAppService _chuDeAppService { get; set; }
        public DeThiAppService _deThiAppService { get; set; }
        public CauHoiAppService _cauHoiAppService { get; set; }
        public List<DeThi> DeThiTVNP { get; set; }

        public DeThiController()
        {
            _chuDeAppService = new ChuDeAppService();
            _deThiAppService = new DeThiAppService();
            _cauHoiAppService = new CauHoiAppService();
            DeThiTVNP = new List<DeThi>();
            Task.Run(async () => { DeThiTVNP = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap) as List<DeThi>; }).Wait();
        }

        // GET: Admin/DeThi
        public ActionResult Index()
        {

            //ViewBag.dsTuVung = _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap);
            //ViewBag.dsBienQC = _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocBienQuangCao);
            //ViewBag.dsDienTu = _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocDienTu);

           // Task.Run(async () => await Task.WhenAll(
           //    _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap)
        
           //)     );
          
            //ViewBag.dsTuVung = (List<DeThi>)ViewBag.dsTuVung;
            //ViewBag.dsBienQC = (List<DeThi>)ViewBag.dsBienQC;
            //ViewBag.dsDoanVan = (List<DeThi>)ViewBag.dsDoanVan;
            return View();
        }

        #region DOC


               #region Hiển thị

        
        [ChildActionOnly]
        public ActionResult _TuVungNguPhap()
        {
            
            ViewBag.dsTuVung = DeThiTVNP;
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult _DocBienQuangCao()
        {
            Task.Run(async () => { ViewBag.dsBienQC = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocBienQuangCao) as List<DeThi>; }).Wait();
            return PartialView();

        }

        [ChildActionOnly]
        public ActionResult _DocHieuDoanVan()
        {
            Task.Run(async () => { ViewBag.dsDoanVan = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocHieuDoanVan) as List<DeThi>; }).Wait();
            return PartialView();
           
        }

        [ChildActionOnly]
        public ActionResult _DocDienTu()
        {
            Task.Run(async () => { ViewBag.dsDienTu = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocDienTu) as List<DeThi>; }).Wait();
            return PartialView();
        }
        #endregion

       #region Thêm đề thi từ vựng ngữ pháp
        public ActionResult ThemDeThiTuVungNguPhap()
        {

           
            List<CauHoi> dsChNguPhap = new List<CauHoi>();
            Task.Run(async () => { dsChNguPhap = await _cauHoiAppService.GetListCauHoi_KhongThuocDeThi((int)DSCHUDE.TuVungNguPhap) as List<CauHoi>; }).Wait();
           
            //lay ra số đề thi thuộc chủ đề đang làm
           
            var count = DeThiTVNP.Count;
          
            string maDe = string.Format("Đề {0}", count + 1);
            ViewBag.maDe = maDe;

            return View(dsChNguPhap);

            
        }

        [HttpPost]
        public ActionResult ThemDeThiNguPhapTuVung(int[] maCH)
        {
            bool status = false;
            List<CauHoi> dsChNguPhap = new List<CauHoi>();
            Task.Run(async () => { dsChNguPhap = await _cauHoiAppService.GetListCauHoi_KhongThuocDeThi((int)DSCHUDE.TuVungNguPhap) as List<CauHoi>; }).Wait();
            var dsChDuocChon = new List<CauHoi>();
            dsChDuocChon = _cauHoiAppService.LayDSCHDuocChon(maCH, dsChNguPhap);



            //lay ra số đề thi thuộc chủ đề đang làm

            var count = DeThiTVNP.Count;

            //int count = new DeThi().XemDSDeThi(1).Count;
            string maDe = string.Format("Đề {0}", count + 1);
            
            DeThi deThi = new DeThi
            {
                MaDe = maDe,
                IDChuDe = (int)DSCHUDE.TuVungNguPhap
            };


            // thêm đề thi
            Task.Run(async () => { status = await _deThiAppService.Add(deThi); }).Wait();

            int IdDeThi = 0;
            Task.Run(async () => { IdDeThi = await _deThiAppService.GetLastId("DeThi"); }).Wait();


            foreach (var item in maCH)
            {
                Task.Run(async () => { await _deThiAppService.UpdateCauHoi_DeThi(item,IdDeThi); }).Wait();
            }

            return RedirectToAction("Index");
        }

        #endregion
        #region Thêm đề thi đọc biển quảng cáo

        public ActionResult ThemDeThiDocBienQC()
        {

            List<DeThi> dsDeThi = new List<DeThi>();
            List<CauHoi> dsBienQC = new List<CauHoi>();
            Task.Run(async () => { dsBienQC = await _cauHoiAppService.GetListCauHoi_KhongThuocDeThi((int)DSCHUDE.DocBienQuangCao) as List<CauHoi>; }).Wait();

            //lay ra số đề thi thuộc chủ đề đang làm
            Task.Run(async () => { dsDeThi = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap) as List<DeThi>; }).Wait();
            //lay ra số đề thi thuộc chủ đề đang làm
            int count = dsDeThi.Count;
            string maDe = string.Format("Đề {0}", count + 1);
            ViewBag.maDe = maDe;

            return View(dsBienQC);
        }

        [HttpPost]
        public ActionResult ThemDeThiDocBienQC(int[] maCH)
        {

            bool status = false;
            List<CauHoi> dsChBienQC = new List<CauHoi>();
            Task.Run(async () => { dsChBienQC = await _cauHoiAppService.GetListCauHoi_KhongThuocDeThi((int)DSCHUDE.DocBienQuangCao) as List<CauHoi>; }).Wait();
            var dsChDuocChon = new List<CauHoi>();
            dsChDuocChon = _cauHoiAppService.LayDSCHDuocChon(maCH, dsChBienQC);

            var DeThiBienQC = new List<DeThi>();
            Task.Run(async () => { DeThiBienQC = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocBienQuangCao) as List<DeThi>; }).Wait();

            //lay ra số đề thi thuộc chủ đề đang làm

            var count = DeThiBienQC.Count;

            //int count = new DeThi().XemDSDeThi(1).Count;
            string maDe = string.Format("Đề {0}", count + 1);

            DeThi deThi = new DeThi
            {
                MaDe = maDe,
                IDChuDe = (int)DSCHUDE.DocBienQuangCao
            };

            // thêm đề thi
            Task.Run(async () => { status = await _deThiAppService.Add(deThi); }).Wait();

            int IdDeThi = 0;
            Task.Run(async () => { IdDeThi = await _deThiAppService.GetLastId("DeThi"); }).Wait();


            foreach (var item in maCH)
            {
                Task.Run(async () => { await _deThiAppService.UpdateCauHoi_DeThi(item, IdDeThi); }).Wait();
            }








            return RedirectToAction("Index");
        }


        #endregion







        #endregion

        #region Nghe

        #region Hiển thị

        public ActionResult Nghe()
        {

            return View();
        }

        [ChildActionOnly]
        public ActionResult _NgheTranhVe()
        {
            Task.Run(async () => { ViewBag.dsNgheTranh = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheTranhVe) as List<DeThi>; }).Wait();
            return PartialView();
        }


        [ChildActionOnly]
        public ActionResult _NgheDoanHoiThoai()
        {
            Task.Run(async () => { ViewBag.dsNgheHoiThoai = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheDoanHoiThoai) as List<DeThi>; }).Wait();
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult _NgheDienTu()
        {
            Task.Run(async () => { ViewBag.dsNgheDienTu = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheDienTu) as List<DeThi>; }).Wait();
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult _NgheYesNo()
        {
            Task.Run(async () => { ViewBag.dsNgheYesNo = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheYesNo) as List<DeThi>; }).Wait();
            return PartialView();
        }


        #endregion

        #region Thêm đề thi nghe

        public ActionResult ThemDeThiNgheTranh()
        {
            List<DeThi> dsDeThi = new List<DeThi>();
            var listNgheTranh = new List<GetListNghe_CauHoiResponse>();
            Task.Run(async () => { listNgheTranh = await _cauHoiAppService.GetListNghe_CauHoi((int)DSCHUDE.NgheTranhVe) as List<GetListNghe_CauHoiResponse>; }).Wait();
            
            
          
            var dsNghe = listNgheTranh.Where(x => x.CauHois[0].IDDeThi == 0).ToList();
            //lay ra số đề thi thuộc chủ đề đang làm
            Task.Run(async () => { dsDeThi = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheTranhVe) as List<DeThi>; }).Wait();
            int count = dsDeThi.Count;
            string maDe = string.Format("Đề {0}", count + 1);
            ViewBag.maDe = maDe;

            return View(dsNghe);
        }

        [HttpPost]
        public ActionResult ThemDeThiNgheTranh(int maNghe)
        {
            bool status = false;
            List<DeThi> dsDeThi = new List<DeThi>();
            Task.Run(async () => { dsDeThi = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheTranhVe) as List<DeThi>; }).Wait();
            int count = dsDeThi.Count;
            string maDe = string.Format("Đề {0}", count + 1);

            DeThi deThi = new DeThi
            {
                MaDe = maDe,
                IDChuDe = (int)DSCHUDE.NgheTranhVe
            };

            Task.Run(async () => { status = await _deThiAppService.Add(deThi); }).Wait();

            int IdDeThi = 0;
            Task.Run(async () => { IdDeThi = await _deThiAppService.GetLastId("DeThi"); }).Wait();

            // lay ra ds nghe 
            var listNgheTranh = new List<GetListNghe_CauHoiResponse>();
            Task.Run(async () => { listNgheTranh = await _cauHoiAppService.GetListNghe_CauHoi((int)DSCHUDE.NgheTranhVe) as List<GetListNghe_CauHoiResponse>; }).Wait();
            var dsCH = listNgheTranh.Find(x => x.nghe.ID == maNghe).CauHois;

            foreach (var item in dsCH)
            {
                Task.Run(async () => { await _deThiAppService.UpdateCauHoi_DeThi(item.ID, IdDeThi); }).Wait();
            }

            return RedirectToAction("Nghe");
        }


        #endregion

        #region Nghe-Xem Chi tiet De Thi

        public ActionResult XemCTDeThiNgheTranh(int maDeThi)
        {

            var listNgheTranh = new List<GetListNghe_CauHoiResponse>();
            Task.Run(async () => { listNgheTranh = await _cauHoiAppService.GetListNghe_CauHoi((int)DSCHUDE.NgheTranhVe) as List<GetListNghe_CauHoiResponse>; }).Wait();
            var deThi = listNgheTranh.Where(x => x.CauHois.FirstOrDefault().IDDeThi == maDeThi).FirstOrDefault();
            return View(deThi);
        }

        #endregion

        #endregion




    }
}