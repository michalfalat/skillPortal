using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces
{
    public interface IFileManager : IManager<File>
    {
        Task<List<File>> GetFilesForCategory(int catId);
        Task<List<File>> GetFilesMetadataForCategory(int catId);

        Task IncrementDownloads(File file);

    }
}
