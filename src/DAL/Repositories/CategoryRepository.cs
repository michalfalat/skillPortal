using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public CategoryRepository(ApplicationDbContext context) : base(context)
        {
        }


        public Task<List<Category>> GetAllCategories()
        {
            return this._appContext.Categories.ToListAsync();
        }

        public Task<List<Category>> GetAllCategoriesIncludingExams()
        {
            return this._appContext.Categories.Include(c => c.Exams).ToListAsync();
        }
    }
}
