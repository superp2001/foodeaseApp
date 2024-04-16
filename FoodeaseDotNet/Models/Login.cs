using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Login
{
    public int LoginId { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public ulong? StatusApprove { get; set; }

    public int? RoleId { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual ICollection<DeliveryBoy> DeliveryBoys { get; set; } = new List<DeliveryBoy>();

    public virtual ICollection<RestaurantOwner> RestaurantOwners { get; set; } = new List<RestaurantOwner>();

    public virtual Role? Role { get; set; }
}
