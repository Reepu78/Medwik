using Medwik_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Medwik_API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {

        }
        
        public DbSet<Patient> Patients { get; set; }
    }
}
