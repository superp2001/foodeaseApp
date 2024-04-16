using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class OrderDetail
{
    public int OrderDetailsId { get; set; }

    public double? Price { get; set; }

    public int? Quantity { get; set; }

    public int? OrderId { get; set; }

    public int? RestaurantMenuId { get; set; }

    public virtual Order? Order { get; set; }

    public virtual RestaurantMenu? RestaurantMenu { get; set; }
}
