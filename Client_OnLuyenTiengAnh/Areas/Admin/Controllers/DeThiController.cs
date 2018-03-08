using Client_OnLuyenTiengAnh.Areas.Admin.AppService;
using Client_OnLuyenTiengAnh.Areas.Admin.Models;
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

        public DeThiController()
        {
            _chuDeAppService = new ChuDeAppService();
            _deThiAppService = new DeThiAppService();
        }

        // GET: Admin/DeThi
        public ActionResult Index()
        {

            //ViewBag.dsTuVung = _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap);
            //ViewBag.dsBienQC = _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocBienQuangCao);
            //ViewBag.dsDienTu = _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocDienTu);

            Task.Run(async () => await Task.WhenAll(
               _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap)
        
           )     );
          
            ViewBag.dsTuVung = (List<DeThi>)ViewBag.dsTuVung;
            ViewBag.dsBienQC = (List<DeThi>)ViewBag.dsBienQC;
            ViewBag.dsDoanVan = (List<DeThi>)ViewBag.dsDoanVan;
            return View();
        }

        #region DOC


               #region Hiển thị

        
        [ChildActionOnly]
        public ActionResult _TuVungNguPhap()
        {
            Task.Run(async () => { ViewBag.dsTuVung = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap) as List<DeThi>; }).Wait();
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
            

            return View();
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
        #endregion


    }
}