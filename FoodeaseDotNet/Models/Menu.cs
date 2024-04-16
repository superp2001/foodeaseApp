using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Menu
{
    public int MenuId { get; set; }

    public string Name { get; set; } = null!;

    public int CategoryId { get; set; }

    public string FoodType { get; set; } = null!;

    public virtual Category Category { get; set; } = null!;

    public virtual ICollection<RestaurantMenu> RestaurantMenus { get; set; } = new List<RestaurantMenu>();
}
