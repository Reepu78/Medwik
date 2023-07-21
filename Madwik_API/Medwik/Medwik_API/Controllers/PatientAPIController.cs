using Medwik_API.Data;
using Medwik_API.Models;
using Medwik_API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Specialized;

namespace Medwik_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientAPIController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ISMSService _sMSService;

        public PatientAPIController(ApplicationDbContext context, ISMSService sMSService)
        {
            _context = context;
            _sMSService = sMSService;
        }

        [HttpGet]
        public IEnumerable<Patient> GetPatients()
        {
            return _context.Patients.ToList();
        }

        [HttpGet("{id}")]
        public Patient GetPatient(int id)
        {
           var patient = _context.Patients.Where(x=>x.Id==id).FirstOrDefault();

            return patient;
        }

        [HttpPost]
        public IActionResult AddPatient([FromBody] Patient patient)
        {
            try
            {
                _context.Patients.Add(patient);
                _context.SaveChanges();

               /* _sMSService.SendSMS("Hello "+ patient.Name+ "\n Your registration is successful. Thank you for choosing Medwik.", patient.Mobile);*/
                return StatusCode(StatusCodes.Status201Created);
                
            }
            catch (Exception ex) 
            {
                return StatusCode(StatusCodes.Status500InternalServerError); ;
            }

            
            
        }

    }
}
