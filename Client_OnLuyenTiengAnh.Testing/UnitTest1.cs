using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Client_OnLuyenTiengAnh.Areas.Admin.AppService;

using Client_OnLuyenTiengAnh.Areas.Admin.Models;
using Client_OnLuyenTiengAnh.Areas.Admin.Request;
using Client_OnLuyenTiengAnh.Areas.Admin.Response;
using Client_OnLuyenTiengAnh.Areas.Admin.Service;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Client_OnLuyenTiengAnh.Testing
{
    [TestClass]
    public class UnitTest1
    {
        public TestContext TestContext { get; set; }

        [TestMethod]
        public async Task TestMethod1Async()
        {

            ChuDeAppService chuDeAppService = new ChuDeAppService();
            var tam = await chuDeAppService.GetListChuDe() as List<ChuDe>;

            Assert.AreEqual(9, tam.Count);
        }

        [TestMethod]
        [DataTestMethod]
        [DataRow(1)]
        [DataRow(2)]
        [DataRow(3)]
        [DataRow(4)]
        public async Task TestGetListDeThi_ChuDe(int maChuDe)
        {

            DeThiAppService deThiAppService = new DeThiAppService();
            var tam = await deThiAppService.GetListDeThi_ChuDe(maChuDe) as List<DeThi>;
            foreach (var item in tam)
            {
                TestContext.WriteLine(item.MaDe.ToString()+" --"+item.Id);
            }

        }

        //[TestMethod]
       
        //public async Task TestAddDeThi()
        //{
        //    DeThi deThi = new DeThi
        //    {
              
        //           Id = 0,
        //           MaDe = "Đề 2",
        //           IDChuDe = 3
               
        //    };
        //    DeThiAppService deThiAppService = new DeThiAppService();
        //    var tam = await deThiAppService.Add(deThi);
        //    Assert.AreEqual(tam, true);

        //}

        [TestMethod]
        public async Task TestGetLastId()
        {
           
            DeThiAppService deThiAppService = new DeThiAppService();
            var tam = await deThiAppService.GetLastId("DeThi");
            TestContext.WriteLine(tam.ToString());

        }

        //[TestMethod]

        //public async Task TestUpdateCauHoi_DeThi()
        //{
            
                
            
        //    DeThiAppService deThiAppService = new DeThiAppService();
        //    var tam = await deThiAppService.UpdateCauHoi_DeThi(1015,1019);
        //    Assert.AreEqual(tam, true);

        //}

        [TestMethod]

        public async Task TestGetListNghe_CauHoi()
        {

           CauHoiAppService cauHoiAppService = new CauHoiAppService();
           var tam = await cauHoiAppService.GetListNghe_CauHoi(9);
            foreach (var item in tam)
            {
                TestContext.WriteLine(item.nghe.FileNghe+item.CauHois[0].ToString());
            }

        }
        [TestMethod]

        public void TestGetListCauHoi_DeThi()
        {
            CauHoiAppService _cauHoiAppService = new CauHoiAppService();
            GetListCauHoi_DeThiResponse deThi = new GetListCauHoi_DeThiResponse();
            Task.Run(async () => { deThi = await _cauHoiAppService.GetListCauHoi_DeThi((int)DSCHUDE.TuVungNguPhap) as GetListCauHoi_DeThiResponse; }).Wait();
            TestContext.WriteLine(deThi.deThi.MaDe);
        }

        [TestMethod]

        public async Task TestGetDeThiById()
        {

            DeThiAppService cauHoiAppService = new DeThiAppService();
            var tam = await cauHoiAppService.GetDeThiById(1016);
            TestContext.WriteLine(tam.MaDe);
           

        }

    }
}
