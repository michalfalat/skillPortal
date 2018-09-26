using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Models
{
    public class Exam : AuditableEntity
    {
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(32)]
        public string Name { get; set; }

        [MaxLength(256)]
        public string Description { get; set; }
        public ICollection<Question> Questions { get; set; }

        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

    }
}
