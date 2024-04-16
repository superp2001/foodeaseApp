using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace FoodeaseDotNet.Models;

public partial class FoodeaseContext : DbContext
{
    public FoodeaseContext()
    {
    }

    public FoodeaseContext(DbContextOptions<FoodeaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Area> Areas { get; set; }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<DeliveryBoy> DeliveryBoys { get; set; }

    public virtual DbSet<Deliveryaddress> Deliveryaddresses { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Menu> Menus { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Orderstatus> Orderstatuses { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Restaurant> Restaurants { get; set; }

    public virtual DbSet<RestaurantMenu> RestaurantMenus { get; set; }

    public virtual DbSet<RestaurantOwner> RestaurantOwners { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<State> States { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=foodease", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Area>(entity =>
        {
            entity.HasKey(e => e.AreaId).HasName("PRIMARY");

            entity.ToTable("area");

            entity.HasIndex(e => e.AreaName, "area_name_fk_idx");

            entity.HasIndex(e => e.CityId, "city_id_fk_idx");

            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.AreaName)
                .HasMaxLength(100)
                .HasColumnName("area_name");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.Pincode).HasColumnName("pincode");

            entity.HasOne(d => d.City).WithMany(p => p.Areas)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("city_id_fk");

            entity.HasOne(d => d.CityNavigation).WithMany(p => p.Areas)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK1g4g24vd6xdeg5kwr39pxltmi");
        });

        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(e => e.CartId).HasName("PRIMARY");

            entity.ToTable("cart");

            entity.HasIndex(e => e.RestaurantMenuId, "fku_rm_idx");

            entity.HasIndex(e => e.UserId, "fku_user_idx");

            entity.Property(e => e.CartId).HasColumnName("cartID");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
            entity.Property(e => e.RestaurantMenuId).HasColumnName("restaurant_menu_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.RestaurantMenu).WithMany(p => p.Carts)
                .HasForeignKey(d => d.RestaurantMenuId)
                .HasConstraintName("fku_rm");

            entity.HasOne(d => d.User).WithMany(p => p.Carts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fku_user");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PRIMARY");

            entity.ToTable("category");

            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(45)
                .HasColumnName("category_name");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PRIMARY");

            entity.ToTable("city");

            entity.HasIndex(e => e.StateId, "state_id_idx");

            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CityName)
                .HasMaxLength(45)
                .HasColumnName("city_name");
            entity.Property(e => e.StateId).HasColumnName("stateID");

            entity.HasOne(d => d.State).WithMany(p => p.Cities)
                .HasForeignKey(d => d.StateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_stateID");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("customer");

            entity.HasIndex(e => e.LoginId, "c_loginid");

            entity.HasIndex(e => e.Phone, "phone").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("loginID");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");

            entity.HasOne(d => d.Login).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("c_loginid");
        });

        modelBuilder.Entity<DeliveryBoy>(entity =>
        {
            entity.HasKey(e => e.DriverId).HasName("PRIMARY");

            entity.ToTable("delivery_boy");

            entity.HasIndex(e => e.LoginId, "loginID");

            entity.HasIndex(e => e.Phone, "phone").IsUnique();

            entity.HasIndex(e => e.PhotoIdNumber, "photo_id_number").IsUnique();

            entity.HasIndex(e => e.VehicleLicenseNo, "vehicle_License_No").IsUnique();

            entity.Property(e => e.DriverId).HasColumnName("driver_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("loginID");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");
            entity.Property(e => e.PhotoIdNumber)
                .HasMaxLength(50)
                .HasColumnName("photo_id_number");
            entity.Property(e => e.VehicleLicenseNo)
                .HasMaxLength(50)
                .HasColumnName("vehicle_License_No");

            entity.HasOne(d => d.Login).WithMany(p => p.DeliveryBoys)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("delivery_boy_ibfk_1");
        });

        modelBuilder.Entity<Deliveryaddress>(entity =>
        {
            entity.HasKey(e => e.DeliveryAddressesId).HasName("PRIMARY");

            entity.ToTable("deliveryaddress");

            entity.HasIndex(e => e.AreaId, "fka_area_id_idx");

            entity.HasIndex(e => e.UserId, "fka_user_id_idx");

            entity.Property(e => e.DeliveryAddressesId).HasColumnName("delivery_addresses_id");
            entity.Property(e => e.Address)
                .HasMaxLength(100)
                .HasColumnName("address");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Deliveryaddresses)
                .HasForeignKey(d => d.AreaId)
                .HasConstraintName("fka_area_id");

            entity.HasOne(d => d.User).WithMany(p => p.Deliveryaddresses)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fka_user_id");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.RoleId, "fk_roleid");

            entity.HasIndex(e => e.Username, "username").IsUnique();

            entity.Property(e => e.LoginId).HasColumnName("loginID");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.StatusApprove)
                .HasColumnType("bit(1)")
                .HasColumnName("status_approve");
            entity.Property(e => e.Username)
                .HasMaxLength(50)
                .HasColumnName("username");

            entity.HasOne(d => d.Role).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("fk_roleid");
        });

        modelBuilder.Entity<Menu>(entity =>
        {
            entity.HasKey(e => e.MenuId).HasName("PRIMARY");

            entity.ToTable("menu");

            entity.HasIndex(e => e.CategoryId, "category_id_fk_idx");

            entity.Property(e => e.MenuId).HasColumnName("menu_id");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.FoodType)
                .HasMaxLength(45)
                .HasColumnName("food_type");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");

            entity.HasOne(d => d.Category).WithMany(p => p.Menus)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("category_id_fk");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.DeliveryAddressesId, "fko_address_idx");

            entity.HasIndex(e => e.DriverId, "fko_dboy_idx");

            entity.HasIndex(e => e.OrderStatus, "fko_status_idx");

            entity.HasIndex(e => e.UserId, "fko_user_idx");

            entity.Property(e => e.OrderId).HasColumnName("orderID");
            entity.Property(e => e.DeliveryAddressesId).HasColumnName("delivery_addresses_id");
            entity.Property(e => e.DriverId)
                .HasDefaultValueSql("'0'")
                .HasColumnName("driver_id");
            entity.Property(e => e.OrderDate)
                .HasColumnType("datetime")
                .HasColumnName("order_date");
            entity.Property(e => e.OrderStatus).HasColumnName("order_status");
            entity.Property(e => e.TotalPrice).HasColumnName("total_price");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.DeliveryAddresses).WithMany(p => p.Orders)
                .HasForeignKey(d => d.DeliveryAddressesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fko_address");

            entity.HasOne(d => d.Driver).WithMany(p => p.Orders)
                .HasForeignKey(d => d.DriverId)
                .HasConstraintName("fko_dboy");

            entity.HasOne(d => d.OrderStatusNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.OrderStatus)
                .HasConstraintName("fko_status");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fko_user");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.HasKey(e => e.OrderDetailsId).HasName("PRIMARY");

            entity.ToTable("order_details");

            entity.HasIndex(e => e.OrderId, "fkoi_o_idx");

            entity.HasIndex(e => e.RestaurantMenuId, "fkoi_rm_idx");

            entity.Property(e => e.OrderDetailsId).HasColumnName("order_detailsID");
            entity.Property(e => e.OrderId).HasColumnName("orderID");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
            entity.Property(e => e.RestaurantMenuId).HasColumnName("restaurant_menu_id");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("fkoi_o");

            entity.HasOne(d => d.RestaurantMenu).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.RestaurantMenuId)
                .HasConstraintName("fkoi_rm");
        });

        modelBuilder.Entity<Orderstatus>(entity =>
        {
            entity.HasKey(e => e.OrderStatus1).HasName("PRIMARY");

            entity.ToTable("orderstatus");

            entity.Property(e => e.OrderStatus1)
                .ValueGeneratedNever()
                .HasColumnName("order_status");
            entity.Property(e => e.StatusName)
                .HasMaxLength(50)
                .HasColumnName("Status_Name");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.OrderId, "fkp_order_idx");

            entity.HasIndex(e => e.RestId, "fkp_rest_idx");

            entity.HasIndex(e => e.UserId, "fkp_user_idx");

            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.OrderId).HasColumnName("orderID");
            entity.Property(e => e.RestId).HasColumnName("rest_id");
            entity.Property(e => e.TransactionId)
                .HasMaxLength(45)
                .HasColumnName("transaction_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Order).WithMany(p => p.Payments)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("fkp_order");

            entity.HasOne(d => d.Rest).WithMany(p => p.Payments)
                .HasForeignKey(d => d.RestId)
                .HasConstraintName("fkp_rest");

            entity.HasOne(d => d.User).WithMany(p => p.Payments)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("fkp_user");
        });

        modelBuilder.Entity<Restaurant>(entity =>
        {
            entity.HasKey(e => e.RestId).HasName("PRIMARY");

            entity.ToTable("restaurant");

            entity.HasIndex(e => e.AreaId, "area_id_fk");

            entity.HasIndex(e => e.RownerId, "restaurant_id_fk");

            entity.Property(e => e.RestId).HasColumnName("rest_id");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.FssaiLicenceNo)
                .HasMaxLength(45)
                .HasColumnName("fssai_licence_no");
            entity.Property(e => e.GstNo)
                .HasMaxLength(45)
                .HasColumnName("gst_no");
            entity.Property(e => e.PanNo)
                .HasMaxLength(45)
                .HasColumnName("pan_no");
            entity.Property(e => e.Phone)
                .HasMaxLength(45)
                .HasColumnName("phone");
            entity.Property(e => e.RestaurantName)
                .HasMaxLength(255)
                .HasColumnName("restaurant_name");
            entity.Property(e => e.RownerId).HasColumnName("rowner_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Restaurants)
                .HasForeignKey(d => d.AreaId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("area_id_fk");

            entity.HasOne(d => d.Rowner).WithMany(p => p.Restaurants)
                .HasForeignKey(d => d.RownerId)
                .HasConstraintName("restaurant_id_fk");
        });

        modelBuilder.Entity<RestaurantMenu>(entity =>
        {
            entity.HasKey(e => e.RestaurantMenuId).HasName("PRIMARY");

            entity.ToTable("restaurant_menu");

            entity.HasIndex(e => e.MenuId, "menu_id_idx");

            entity.HasIndex(e => e.RestaurantId, "restaurant_id_fk_idx");

            entity.Property(e => e.RestaurantMenuId).HasColumnName("restaurant_menu_id");
            entity.Property(e => e.AvailebleStatus)
                .HasColumnType("bit(1)")
                .HasColumnName("availeble_status");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Img)
                .HasColumnType("blob")
                .HasColumnName("img");
            entity.Property(e => e.MenuId).HasColumnName("menu_id");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.RestaurantId).HasColumnName("restaurant_id");

            entity.HasOne(d => d.Menu).WithMany(p => p.RestaurantMenus)
                .HasForeignKey(d => d.MenuId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("menu_id");

            entity.HasOne(d => d.Restaurant).WithMany(p => p.RestaurantMenus)
                .HasForeignKey(d => d.RestaurantId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("restaurantid_fk");
        });

        modelBuilder.Entity<RestaurantOwner>(entity =>
        {
            entity.HasKey(e => e.RownerId).HasName("PRIMARY");

            entity.ToTable("restaurant_owner");

            entity.HasIndex(e => e.LoginId, "loginID");

            entity.HasIndex(e => e.Phone, "phone").IsUnique();

            entity.Property(e => e.RownerId).HasColumnName("rowner_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("loginID");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");

            entity.HasOne(d => d.Login).WithMany(p => p.RestaurantOwners)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("restaurant_owner_ibfk_1");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("role");

            entity.HasIndex(e => e.RoleName, "role_name").IsUnique();

            entity.Property(e => e.RoleId)
                .ValueGeneratedNever()
                .HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(25)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.StateId).HasName("PRIMARY");

            entity.ToTable("state");

            entity.Property(e => e.StateId).HasColumnName("stateID");
            entity.Property(e => e.StateName)
                .HasMaxLength(45)
                .HasColumnName("state_name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
