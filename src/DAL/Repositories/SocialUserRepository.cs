using DAL.Models;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class SocialUserRepository : Repository<SocialUser>, ISocialUserRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public SocialUserRepository(ApplicationDbContext context) : base(context)
        {
        }
        public Task<SocialUser> GetUserByEmailAsync(string email)
        {
            return this._appContext.SocialUsers.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
