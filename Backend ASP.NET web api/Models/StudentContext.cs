using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions<StudentContext> options) : base(options) { }
        public DbSet<TableStudent> TableStudent { get; set; }
    }
}