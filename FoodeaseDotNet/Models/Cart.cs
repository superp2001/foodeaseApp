using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Cart
{
    public int CartId { get; set; }

    public int? UserId { get; set; }

    public int? Quantity { get; set; }

    public int? RestaurantMenuId { get; set; }

    public virtual RestaurantMenu? RestaurantMenu { get; set; }

    public virtual Customer? User { get; set; }
}
