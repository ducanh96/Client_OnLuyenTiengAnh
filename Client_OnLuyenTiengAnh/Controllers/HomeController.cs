using Client_OnLuyenTiengAnh.Areas.Admin.AppService;
using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Client_OnLuyenTiengAnh.Controllers
{
    public class HomeController : Controller
    {
        public DeThiAppService _deThiAppService { get; set; }

        public HomeController()
        {
            _deThiAppService = new DeThiAppService();
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ReadingVocabulary()
        {
            List<DeThi> list = new List<DeThi>();
            Task.Run(async () => {list = await _deThiAppService.GetListDeThi_ChuDe((int)DSCHUDE.TuVungNguPhap) as List<DeThi>; }).Wait();
            ViewBag.dsDeThi = list;
            return View();

        }



        public ActionResult ReadingBillBoard()
        {
            return View();
        }
        public ActionResult ReadingFillingWords()
        {
            return View();
        }
        public ActionResult ReadingUnderstanding()
        {
            return View();
        }
        public ActionResult SpeakingInterview()
        {
            return View();
        }
        public ActionResult WritingRewriteSentences()
        {
            return View();
        }
        public ActionResult WritingLetter()
        {
            return View();
        }
        public ActionResult WritingStory()
        {
            return View();
        }
        public ActionResult ListeningPicture()
        {
            return View();
        }
        public ActionResult ListeningMCQuestions()
        {
            return View();
        }
        public ActionResult ListeningFillingWords()
        {
            return View();
        }

    }
}