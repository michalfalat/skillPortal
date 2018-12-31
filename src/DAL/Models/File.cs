using DAL.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Models
{
    public class File : AuditableEntity
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(64)]
        public string Name { get; set; }

        [MaxLength(256)]
        public string Description { get; set; }
        public FileType Type { get; set; }
        public byte[] Data { get; set; }

        public int Downloads { get; set; }

        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }


        public int SocialUserId { get; set; }
        public virtual SocialUser SocialUser { get; set; }
    }
}
