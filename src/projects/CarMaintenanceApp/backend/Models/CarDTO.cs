using System;
using System.Collections.Generic;

namespace CarMaintenanceApp.backend.Models.CarsDTO
{
    public class CarsDTO
    {
        public int CarId { get; set; }
        public int UserId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        public int Mileage { get; set; }
    }
}