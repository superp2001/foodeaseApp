using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public double TotalPrice { get; set; }

    public int? OrderStatus { get; set; }

    public int DeliveryAddressesId { get; set; }

    public int UserId { get; set; }

    public int? DriverId { get; set; }

    public DateTime? OrderDate { get; set; }

    public virtual Deliveryaddress DeliveryAddresses { get; set; } = null!;

    public virtual DeliveryBoy? Driver { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual Orderstatus? OrderStatusNavigation { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Customer User { get; set; } = null!;
}
