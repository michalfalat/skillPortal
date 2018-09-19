using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces
{
    public interface ICategoryManager : IManager<Category>
    {
        Task<List<Category>> GetAllCategoriesAsync();
        Task<List<Category>> GetAllCategoriesIncludingExamsAsync();
    }
}
