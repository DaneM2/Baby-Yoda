using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CarMaintenanceApp.backend.Utils.sqldbcontext
{
    public class CarMaintenanceDbContext : DbContext
    {
        public DbSet<Car> Cars { get; set; }
        public DbSet<ServiceRecord> ServiceRecords { get; set; }
        private readonly IConfiguration _configuration;

        public CarMaintenanceDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = _configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
