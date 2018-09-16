using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IExamRepository : IRepository<Exam>
    {
        Task<List<Exam>> GetExamsByCategoryId(int categoryId);
    }
}
