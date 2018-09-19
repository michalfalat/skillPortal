using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces
{
    public interface IManager<TEntity> where TEntity : class
    {
        void Add(TEntity entity);
        Task<TEntity> GetByIdAsync(int id);
        Task<List<TEntity>> GetAllAsync();
        void Update(TEntity entity);
        void Remove(TEntity entity);

    }
}
