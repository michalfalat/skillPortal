using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class SocialUserAddModel
    {
        [MaxLength(256)]
        [Required]
        public string Email { get; set; }

        [MaxLength(512)]
        [Required]
        public string Name { get; set; }

        [MaxLength(1024)]
        public string Token { get; set; }

        [MaxLength(256)]
        public string Provider { get; set; }
    }
}
