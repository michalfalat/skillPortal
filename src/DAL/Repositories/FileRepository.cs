using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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
    }
}
