using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Models
{
    public class Rating
    {
        public int Id { get; set; }

        [Required]
        [MinLength(10)]
        [MaxLength(1024)]
        public string Text { get; set; }

        public double Value { get; set; }

        public DateTimeOffset Created { get; set; }

        public int SocialUserId { get; set; }
        public virtual SocialUser SocialUser { get; set; }

        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

    }
}
