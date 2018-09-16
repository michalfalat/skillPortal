using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Question : AuditableEntity
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string ImgPath { get; set; }

        public ICollection<Answer> Answers { get; set; }
    }
}
