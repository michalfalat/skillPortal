using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.ViewModels
{
    public class QuestionAddModel
    {
        [Required]
        public string Text { get; set; }
        public string ImgPath { get; set; }
        public ICollection<AnswerAddModel> Answers { get; set; }
    }
}
