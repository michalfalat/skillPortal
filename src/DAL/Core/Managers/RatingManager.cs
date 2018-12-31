using DAL.Core.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Managers
{
    public class RatingManager : IRatingManager
    {
        private IUnitOfWork _unitOfWork;
        public RatingManager(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Rating entity)
        {
            this._unitOfWork.Ratings.Add(entity);
            this._unitOfWork.SaveChanges();
        }

        public Task<List<Rating>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<List<Rating>> GetAllRatingsAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Rating> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Rating>> GetRatingsByCategoryAsync(int categoryId)
        {
            return this._unitOfWork.Ratings.GetRatingsByCategoryAsync(categoryId);
        }

        public void Remove(Rating entity)
        {
            throw new NotImplementedException();
        }

        public void Update(Rating entity)
        {
            throw new NotImplementedException();
        }
    }
}
