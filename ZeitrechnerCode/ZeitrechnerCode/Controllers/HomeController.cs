using Microsoft.AspNetCore.Mvc;
using ZeitrechnerCode.Model;

namespace ZeitrechnerCode.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {

        [HttpGet("{datum}")]
        public async Task<ActionResult<Zeitrechner>> GetZeit(DateTime datum)
        {
            Zeitrechner zeitrechner = new Zeitrechner();
            zeitrechner.Datum = datum;
            

            return Ok(zeitrechner);
        }
        
        
    }
}
