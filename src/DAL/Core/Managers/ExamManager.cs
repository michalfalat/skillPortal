using DAL.Core.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Managers
{
    public class ExamManager : IExamManager
    {
        private IUnitOfWork _unitOfWork;
        public ExamManager(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public void Add(Exam entity)
        {
            this._unitOfWork.Exams.Add(entity);
            this._unitOfWork.SaveChanges();
        }

        public Task<List<Exam>> GetAllAsync()
        {
            return this._unitOfWork.Exams.GetAll();
        }

        public Task<List<Exam>> GetAllExamsAsync()
        {
            return this._unitOfWork.Exams.GetAll();
        }

        public Task<Exam> GetByIdAsync(int id)
        {
            return this._unitOfWork.Exams.Get(id);
        }

        public Task<List<Exam>> GetExamsForCategoryAsync(int categoryId)
        {
            return this._unitOfWork.Exams.GetExamsByCategoryId(categoryId);
        }

        public Task<Exam> GetFullExam(int examId)
        {
            return this._unitOfWork.Exams.GetFullExam(examId);
        }

        public void Remove(Exam entity)
        {
            this._unitOfWork.Exams.Remove(entity);
            this._unitOfWork.SaveChanges();
        }

        public void Update(Exam entity)
        {
            this._unitOfWork.Exams.Update(entity);
            this._unitOfWork.SaveChanges();
        }
    }
}
