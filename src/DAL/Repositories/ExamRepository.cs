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
    public class ExamRepository : Repository<Exam>, IExamRepository
    {
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public ExamRepository(ApplicationDbContext context) : base(context)
        {
        }


        public Task<List<Exam>> GetAllExams()
        {
            return this._appContext.Exams.ToListAsync();
        }

        public Task<List<Exam>> GetExamsByCategoryId(int categoryId)
        {
            return this._appContext.Exams.Where(e => e.CategoryId == categoryId).ToListAsync();
        }

        public Task<Exam> GetFullExam(int examId)
        {
            return this._appContext.Exams.Include(e => e.Questions).FirstOrDefaultAsync(e => e.Id == examId);
        }
    }
}
