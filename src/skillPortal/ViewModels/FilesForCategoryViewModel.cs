using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class FilesForCategoryViewModel
    {
        public int CatId { get; set; }
        public string CatName { get; set; }
        public ICollection<FileMetadataViewModel> Files { get; set; }

    }
}
