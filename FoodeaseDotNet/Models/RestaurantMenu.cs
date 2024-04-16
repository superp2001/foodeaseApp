using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class RestaurantMenu
{
    public int RestaurantMenuId { get; set; }

    public int RestaurantId { get; set; }

    public int MenuId { get; set; }

    public double Price { get; set; }

    public byte[]? Img { get; set; }

    public string Description { get; set; } = null!;

    public ulong AvailebleStatus { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual Menu Menu { get; set; } = null!;

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual Restaurant Restaurant { get; set; } = null!;
}
