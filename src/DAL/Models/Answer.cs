using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Answer : AuditableEntity
    {
        public int Id { get; set; }
        public string ImgPath { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public int QUestionId { get; set; }
        public virtual Question Question { get; set; }
    }
}
