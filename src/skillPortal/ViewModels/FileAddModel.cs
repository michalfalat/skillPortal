using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class FileAddModel
    {
        [Required]
        public int CatId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public IFormFile File { get; set; }
    }
}
