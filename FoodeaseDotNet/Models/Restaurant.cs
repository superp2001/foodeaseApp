using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Restaurant
{
    public int RestId { get; set; }

    public string RestaurantName { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string FssaiLicenceNo { get; set; } = null!;

    public string GstNo { get; set; } = null!;

    public string PanNo { get; set; } = null!;

    public int AreaId { get; set; }

    public int? RownerId { get; set; }

    public virtual Area Area { get; set; } = null!;

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<RestaurantMenu> RestaurantMenus { get; set; } = new List<RestaurantMenu>();

    public virtual RestaurantOwner? Rowner { get; set; }
}
