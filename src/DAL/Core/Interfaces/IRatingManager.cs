using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces
{
    public interface IRatingManager : IManager<Rating>
    {
        Task<List<Rating>> GetAllRatingsAsync();

        Task<List<Rating>> GetRatingsByCategoryAsync(int categoryId);
    }
}
