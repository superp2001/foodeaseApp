using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Deliveryaddress
{
    public int DeliveryAddressesId { get; set; }

    public string? Address { get; set; }

    public int? AreaId { get; set; }

    public int? UserId { get; set; }

    public virtual Area? Area { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual Customer? User { get; set; }
}
