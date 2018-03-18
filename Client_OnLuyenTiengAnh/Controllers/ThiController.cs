using Client_OnLuyenTiengAnh.Areas.Admin.AppService;
using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Client_OnLuyenTiengAnh.Controllers
{
    public class ThiController : Controller
    {
        public DeThiAppService _deThiAppService { get; set; }
        public CauHoiAppService _cauHoiAppService { get; set; }

        public ThiController()
        {
            _deThiAppService = new DeThiAppService();
            _cauHoiAppService = new CauHoiAppService();
        }
        // GET: Thi
        public ActionResult Index()
        {
            return View();
        }
        #region Đọc

       
        public ActionResult TuVungNguPhap()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        public ActionResult DocBienQuangCao()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocBienQuangCao) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        public ActionResult DocHieuDoanVan()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocHieuDoanVan) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        public ActionResult DocDienTu()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.DocDienTu) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }
        #endregion


        #region Nghe
        public ActionResult NgheTranhVe()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheTranhVe) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        public ActionResult NgheDoanHoiThoai()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheDoanHoiThoai) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        public ActionResult NgheDienTu()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheDienTu) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        public ActionResult NgheYesNo()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.NgheYesNo) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }


        #endregion

        #region Viết
        public ActionResult VietLaiCau()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => { list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.VietLaiCau) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();
        }

        #endregion

    }
}