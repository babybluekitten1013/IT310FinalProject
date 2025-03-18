using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using IT310FinalProject.Server.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ShoppingListContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ShoppingListContext") ?? throw new InvalidOperationException("Connection string 'ShoppingListContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
