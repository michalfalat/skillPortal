using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class SocialUserLoginRepository : Repository<SocialUserLogin>, ISocialUserLoginRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
        public SocialUserLoginRepository(DbContext context) : base(context)
        {
        }

        public Task<SocialUserLogin> GetSocialUserLoginByTokenAsync(string token)
        {
            return this._appContext.SocialUserLogins
                .Include(s => s.SocialUser)
                .FirstOrDefaultAsync(sul => sul.Token == token);
        }
    }
}
