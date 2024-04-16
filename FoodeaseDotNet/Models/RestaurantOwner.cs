using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class RestaurantOwner
{
    public int RownerId { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public int? LoginId { get; set; }

    public virtual Login? Login { get; set; }

    public virtual ICollection<Restaurant> Restaurants { get; set; } = new List<Restaurant>();
}
