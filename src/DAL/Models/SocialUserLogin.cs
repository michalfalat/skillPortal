using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class SocialUserLogin
    {
        public int Id { get; set; }
        public int SocialUserId { get; set; }
        public virtual SocialUser SocialUser { get; set; }
        public DateTimeOffset Created { get; set; }
        public string Token { get; set; }

    }
}
