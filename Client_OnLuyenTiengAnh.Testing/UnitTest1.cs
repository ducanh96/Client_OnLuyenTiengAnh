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
       
        [TestMethod]
        public async Task TestMethod1Async()
        {

            ChuDeAppService chuDeAppService = new ChuDeAppService();
            var tam = await chuDeAppService.GetListChuDe() as List<ChuDe>;

            Assert.AreEqual(9, tam.Count);
        }
    }
}
