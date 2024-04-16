using System;
using System.Collections.Generic;

namespace FoodeaseDotNet.Models;

public partial class City
{
    public int CityId { get; set; }

    public string CityName { get; set; } = null!;

    public int StateId { get; set; }

    public virtual ICollection<Area> Areas { get; set; } = new List<Area>();

    public virtual State State { get; set; } = null!;
}
