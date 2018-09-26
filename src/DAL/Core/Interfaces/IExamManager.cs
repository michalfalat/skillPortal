using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces
{
    public interface IExamManager : IManager<Exam>
    {
        Task<List<Exam>> GetAllExamsAsync();
        Task<List<Exam>> GetExamsForCategoryAsync(int categoryId);

        Task<Exam> GetFullExam(int examId);
    }
}
