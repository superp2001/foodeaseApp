using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class DeliveryBoy
{
    public int DriverId { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string VehicleLicenseNo { get; set; } = null!;

    public string PhotoIdNumber { get; set; } = null!;

    public int? LoginId { get; set; }

    public virtual Login? Login { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
