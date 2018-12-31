using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Models
{
    public class SocialUser
    {
        public int Id { get; set; }

        [MaxLength(256)]
        public string Email { get; set; }

        [MaxLength(512)]
        public string Name { get; set; }

        [MaxLength(256)]
        public string Provider { get; set; }
        public bool IsLocked { get; set; }

        public DateTimeOffset Created { get; set; }


    }
}
