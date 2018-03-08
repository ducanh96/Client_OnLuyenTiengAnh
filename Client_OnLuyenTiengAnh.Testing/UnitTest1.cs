using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Client_OnLuyenTiengAnh.Areas.Admin.AppService;

using Client_OnLuyenTiengAnh.Areas.Admin.Models;
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

    }
}
