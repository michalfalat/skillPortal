using DAL.Core.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Managers
{
    public class SocialUserManager : ISocialUserManager
    {
        private IUnitOfWork _unitOfWork;
        public SocialUserManager(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public void Add(SocialUser entity)
        {
            this._unitOfWork.SocialUsers.Add(entity);
            this._unitOfWork.SaveChanges();
        }

        public Task<List<SocialUser>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<SocialUser> GetByIdAsync(int id)
        {
            return this._unitOfWork.SocialUsers.Get(id);
        }

        public Task<SocialUser> GetUserByEmailAsync(string email)
        {
            return this._unitOfWork.SocialUsers.GetUserByEmailAsync(email);
        }

        public async Task<SocialUser> GetUserByTokenlAsync(string token)
        {
            var login = await this._unitOfWork.SocialUserLogins.GetSocialUserLoginByTokenAsync(token);
            return login == null ? null : login.SocialUser;
        }

        public async Task RegisterUser(SocialUser entity, string token)
        {
            var user = await this._unitOfWork.SocialUsers.GetUserByEmailAsync(entity.Email);
            if(user == null)
            {
                await this._unitOfWork.SocialUsers.Add(entity);
                this._unitOfWork.SaveChanges();
            }

            var userLogin = new SocialUserLogin()
            {
                SocialUserId =  user == null ? entity.Id : user.Id,
                Created = DateTimeOffset.UtcNow,
                Token = token
            };

            await this._unitOfWork.SocialUserLogins.Add(userLogin);
            this._unitOfWork.SaveChanges();

        }

        public void Remove(SocialUser entity)
        {
            throw new NotImplementedException();
        }

        public void Update(SocialUser entity)
        {
            throw new NotImplementedException();
        }
    }
}
