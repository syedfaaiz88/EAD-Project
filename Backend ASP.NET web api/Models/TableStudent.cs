using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class TableStudent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(100)]
        public string Email {  get; set; }
        [StringLength(50)]
        public string RollNumber { get; set; }
        [StringLength(50)]
        public string Department { get; set; }
        [StringLength(50)]
        public string Degree { get; set; }
        [StringLength(100)]
        public string DOB { get; set; }
        [StringLength(100)]
        public string End { get; set; }
        [StringLength(100)]
        public string Start { get; set; }
        [StringLength(50)]
        public string City { get; set; }
        [StringLength(50)]
        public string Interest { get; set; }
        [StringLength(50)]
        public string Subject { get; set; }
        public int Age { get; set; }
        [StringLength(10)]
        public string Gender { get; set; }

    }
}