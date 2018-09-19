﻿using DAL.Core.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Managers
{
    public class CategoryManager : ICategoryManager
    {
        private IUnitOfWork _unitOfWork;
        public CategoryManager(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public void Add(Category category)
        {
            this._unitOfWork.Categories.Add(category);
            this._unitOfWork.SaveChanges();

        }
        public Task<List<Category>> GetAllAsync()
        {
            return this._unitOfWork.Categories.GetAll();
        }

        public Task<List<Category>> GetAllCategoriesAsync()
        {
            return this._unitOfWork.Categories.GetAllCategories();
        }

        public Task<List<Category>> GetAllCategoriesIncludingExamsAsync()
        {
            return this._unitOfWork.Categories.GetAllCategoriesIncludingExams();
        }

        public Task<Category> GetByIdAsync(int id)
        {
            return this._unitOfWork.Categories.Get(id);
        }

        public void Remove(Category entity)
        {
            this._unitOfWork.Categories.Remove(entity);
        }

        public void Update(Category entity)
        {
            this._unitOfWork.Categories.Update(entity);
        }
    }
}
