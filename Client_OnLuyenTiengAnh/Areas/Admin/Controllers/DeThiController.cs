using Client_OnLuyenTiengAnh.Areas.Admin.AppService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Client_OnLuyenTiengAnh.Areas.Admin.Controllers
{
    public class DeThiController : Controller
    {
        public ChuDeAppService chuDeAppService { get; set; }
        public DeThiController()
        {
            chuDeAppService = new ChuDeAppService();
        }
        // GET: Admin/DeThi
        public ActionResult Index()
        {
            var kq = chuDeAppService.GetListChuDe();
            return View();
        }
    }
}