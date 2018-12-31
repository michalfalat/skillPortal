using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class Category : AuditableEntity
    {
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(32)]
        public string Name { get; set; }

        [MaxLength(256)]
        public string Description { get; set; }

        public ICollection<Exam> Exams { get; set; } 
        public ICollection<File> Files { get; set; } 
        public ICollection<Rating> Ratings { get; set; } 


        public int SocialUserId { get; set; }
        public virtual SocialUser SocialUser { get; set; }

        [NotMapped]
        public int FilesCount { get; set; }



    }
}
