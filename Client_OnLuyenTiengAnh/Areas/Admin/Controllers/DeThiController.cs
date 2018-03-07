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
            var kq = _chuDeAppService.GetListChuDe();
            return View();
        }

        #region DOC
        [ChildActionOnly]
        public ActionResult _TuVungNguPhap()
        {
            Task.Run(async () => {ViewBag.dsTuVung =  await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap) as List<DeThi>; });
           
           
            return PartialView();
        }

        public ActionResult _DocBienQuangCao()
        {

            return View();
        }

        public ActionResult _DocHieuDoanVan()
        {

            return View();
        }

        public ActionResult _DocDienTu()
        {
            
            return View();
        }

        #endregion
    }
}