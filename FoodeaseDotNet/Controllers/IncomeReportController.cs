using FoodeaseDotNet.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodeaseDotNet.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    [EnableCors]
    public class IncomeReportController : ControllerBase
    {
        private readonly FoodeaseContext dbcontext;

        public IncomeReportController(FoodeaseContext context)
        {
            this.dbcontext = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<IncomeReport>> GetIncomeReport()
        {
            var incomeReport = this.dbcontext.Restaurants
                .Select(r => new IncomeReport
                {
                    /*RestaurantId = r.RestId,
                    RestaurantName = r.RestaurantName,
                    TotalPayments = r.Payments.Sum(p => p.Amount)*/

                    RestaurantId = r.RestId,
                    RestaurantName = r.RestaurantName,
                    TotalPayments = r.Payments.Sum(p => (decimal?)p.Amount) ?? 0

                })
                .ToList();

            return Ok(incomeReport);

        }
    }
    }
