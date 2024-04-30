using System;
using System.Collections.Generic;

namespace CarMaintenanceApp.backend.Models.ServiceRecord
{
    public class ServiceRecord
    {
        public int ServiceId { get; set; }
        public int CarId { get; set; }
        public string CarName { get; set;}
        public DateTime ServiceDate { get; set; }
        public string ServiceType { get; set; }
        public string ServiceNotes { get; set; }
        public List<string> PartsList { get; set; }
    }
}