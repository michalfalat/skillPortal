using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IQuestionRepository : IRepository<Question>
    {
        Task<Question> GetRandomQuestionWithAnswersByExamId(int examId);

        Task<List<Question>> GetRandomQuestionsWithAnswersByExamId(int examId);
    }
}
