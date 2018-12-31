using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces
{
    public interface  ISocialUserManager : IManager<SocialUser>
    {
        Task<SocialUser> GetUserByEmailAsync(string email);


        Task<SocialUser> GetUserByTokenlAsync(string token);

        Task RegisterUser(SocialUser entity, string token);
    }
}
