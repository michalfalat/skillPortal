using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class ExamsForCategoryViewModel
    {
        public int CatId { get; set; }
        public string CatName { get; set; }
        public ICollection<ExamViewModel> Exams { get; set; }
    }
}
