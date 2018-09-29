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
    public class FileRepository : Repository<File>, IFileRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public FileRepository(DbContext context) : base(context)
        {
        }

        public Task<List<File>> GetFilesForCategory(int catId)
        {
            throw new NotImplementedException();
        }

        public Task<List<File>> GetFilesMetadataForCategory(int catId)
        {
            return this._appContext.Files
                .Where(f => f.CategoryId == catId)
                .Select(f => new File
                {
                    Id = f.Id,
                    CreatedDate = f.CreatedDate,
                    Name = f.Name,
                    Description = f.Description
                })
                .ToListAsync();
        }
    }
}
