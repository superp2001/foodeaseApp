using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public string? TransactionId { get; set; }

    public double? Amount { get; set; }

    public int? UserId { get; set; }

    public int? RestId { get; set; }

    public int? OrderId { get; set; }

    public virtual Order? Order { get; set; }

    public virtual Restaurant? Rest { get; set; }

    public virtual Customer? User { get; set; }
}
