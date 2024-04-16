using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Orderstatus
{
    public int OrderStatus1 { get; set; }

    public string? StatusName { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
