using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using IT310FinalProject.Server.Models;

namespace IT310FinalProject.Server.Data
{
    public class ShoppingListContext : DbContext
    {
        public ShoppingListContext (DbContextOptions<ShoppingListContext> options)
            : base(options)
        {
        }

        public DbSet<IT310FinalProject.Server.Models.Item> Item { get; set; } = default!;
    }
}
