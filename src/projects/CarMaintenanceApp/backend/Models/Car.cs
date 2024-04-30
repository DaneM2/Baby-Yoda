using System;
using System.Collections.Generic;

namespace CarMaintenanceApp.backend.Models.Car
{
    public class Car
    {
        public int CarId { get; set; }
        public string CarName { get; set;}
        public int UserId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        public int Mileage { get; set; }
        public DateTime LastServiceDate { get; set; }
        public DateTime NextServiceDate { get; set; }
        public List<ServiceRecord> ServiceHistory { get; set; }
        public string FuelType { get; set; }
        public string EngineType { get; set; }
        public string TireType { get; set; }
        public int BatteryHealth { get; set; }
        public string OilType { get; set; }
        public DateTime OilChangeDueDate { get; set; }
        public string TransmissionType { get; set; }
        public string VIN { get; set; }
    }
}
