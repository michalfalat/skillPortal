using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IFileRepository : IRepository<File>
    {
        Task<List<File>> GetFilesForCategory(int catId);
        Task<List<File>> GetFilesMetadataForCategory(int catId);
    }
}
