using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Customer
{
    public int UserId { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public int? LoginId { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual ICollection<Deliveryaddress> Deliveryaddresses { get; set; } = new List<Deliveryaddress>();

    public virtual Login? Login { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}
