﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ExamsCount { get; set; }
        public int FilesCount { get; set; }
        public int RatingsCount { get; set; }
        public double Rating { get; set; }

    }
}
