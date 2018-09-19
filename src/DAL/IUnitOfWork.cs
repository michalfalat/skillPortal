using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUnitOfWork
    {
        ICustomerRepository Customers { get; }
        ICategoryRepository Categories { get; }

        IExamRepository Exams { get; }
        IProductRepository Products { get; }
        IOrdersRepository Orders { get; }


        int SaveChanges();
    }
}
