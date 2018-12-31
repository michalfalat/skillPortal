using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface ISocialUserLoginRepository : IRepository<SocialUserLogin>
    {
        Task<SocialUserLogin> GetSocialUserLoginByTokenAsync(string token);
    }
}
