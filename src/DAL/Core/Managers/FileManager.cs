using DAL.Core.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Managers
{
    public class FileManager : IFileManager
    {
        private IUnitOfWork _unitOfWork;
        public FileManager(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public void Add(File entity)
        {
            this._unitOfWork.Files.Add(entity);
            this._unitOfWork.SaveChanges();
        }

        public Task<List<File>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<File> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<File>> GetFilesForCategory(int catId)
        {
            throw new NotImplementedException();
        }

        public Task<List<File>> GetFilesMetadataForCategory(int catId)
        {
           return this._unitOfWork.Files.GetFilesMetadataForCategory(catId);
        }

        public void Remove(File entity)
        {
            throw new NotImplementedException();
        }

        public void Update(File entity)
        {
            throw new NotImplementedException();
        }
    }
}
