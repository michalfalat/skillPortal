using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IRatingRepository : IRepository<Rating>
    {
        Task<List<Rating>> GetAllRatingsAsync();

        Task<List<Rating>> GetRatingsByCategoryAsync(int categoryId);
    }
}
