using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class FileMetadataViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public DateTime Created { get; set; }

    }
}
