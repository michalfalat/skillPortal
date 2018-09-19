using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class CategoryAddModel
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<ExamAddModel> Exams { get; set; }

    }
}
