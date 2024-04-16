using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class Area
{
    public int AreaId { get; set; }

    public string AreaName { get; set; } = null!;

    public int Pincode { get; set; }

    public int CityId { get; set; }

    public virtual City City { get; set; } = null!;

    public virtual Role CityNavigation { get; set; } = null!;

    public virtual ICollection<Deliveryaddress> Deliveryaddresses { get; set; } = new List<Deliveryaddress>();

    public virtual ICollection<Restaurant> Restaurants { get; set; } = new List<Restaurant>();
}
