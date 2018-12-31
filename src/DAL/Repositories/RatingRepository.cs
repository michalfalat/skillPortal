using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class RatingRepository : Repository<Rating>, IRatingRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public RatingRepository(ApplicationDbContext context) : base(context)
        {
        }

        public Task<List<Rating>> GetAllRatingsAsync()
        {
            throw new NotImplementedException();
        }

        public Task<List<Rating>> GetRatingsByCategoryAsync(int categoryId)
        {
            return this._appContext.Ratings.Where(r => r.CategoryId == categoryId).ToListAsync();
        }
    }
}
