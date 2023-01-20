using samplewebApi.Models;
using samplewebApi.rep;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace samplewebApi.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class ReservationController : ApiController
    {
        public readonly InterfaceReserve Ireserve;
        public ReservationController(Ireserve ireserve)
        {
            this.Ireserve = ireserve;
        }
        [Route("api/Reservation/GetDetails")]
        [HttpGet]
        public IHttpActionResult GetAlldetails()
        {
            var GetResults = Ireserve.GetDetails();
            return Ok(GetResults);
        }
        [Route("api/Reservation/insertDetails")]
        [HttpPost]
        public IHttpActionResult InsertDetails(ReserveModel res)
        {
            var InsertResult = Ireserve.AddDetails(res);
            return Ok(InsertResult);
        }
        [Route("api/Reservation/update")]
        [HttpPut]
        public IHttpActionResult UpdateDetails(ReserveModel res)
        {
            var EditResult = Ireserve.EditDetails(res);
            return Ok(EditResult);
        }
       [Route("api/Reservation/Delete/{S_No}")]
       [HttpDelete]
       public IHttpActionResult DeleteDetails(int S_No)
       {
            var DeleteResult = Ireserve.DeleteDetail(S_No);
            return Ok(DeleteResult);
       }
        [Route("api/Reservation/GethotelDetails")]
        [HttpGet]
        public IHttpActionResult GetAllHoteldetails()
        {
            var GetResults = Ireserve.GethotelDetails();
            return Ok(GetResults);
        }
    }
}
