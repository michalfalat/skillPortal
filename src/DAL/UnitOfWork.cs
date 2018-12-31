using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        ICustomerRepository _customers;
        IProductRepository _products;
        IOrdersRepository _orders;
        ICategoryRepository _categories;
        IExamRepository _exams;
        IFileRepository _files;
        IRatingRepository _ratings;
        ISocialUserRepository _socialUsers;
        ISocialUserLoginRepository _socialUserLogins;




        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }



        public ICustomerRepository Customers
        {
            get
            {
                if (_customers == null)
                    _customers = new CustomerRepository(_context);

                return _customers;
            }
        }



        public IProductRepository Products
        {
            get
            {
                if (_products == null)
                    _products = new ProductRepository(_context);

                return _products;
            }
        }



        public IOrdersRepository Orders
        {
            get
            {
                if (_orders == null)
                    _orders = new OrdersRepository(_context);

                return _orders;
            }
        }

        public ICategoryRepository Categories
        {
            get
            {
                if (_categories == null)
                    _categories = new CategoryRepository(_context);

                return _categories;
            }
        }

        public IExamRepository Exams
        {
            get
            {
                if (_exams == null)
                    _exams = new ExamRepository(_context);

                return _exams;
            }
        }

        public IFileRepository Files
        {
            get
            {
                if (_files == null)
                    _files = new FileRepository(_context);

                return _files;
            }
        }

        public IRatingRepository Ratings
        {
            get
            {
                if (_ratings == null)
                    _ratings = new RatingRepository(_context);

                return _ratings;
            }
        }

        public ISocialUserRepository SocialUsers
        {
            get
            {
                if (_socialUsers == null)
                    _socialUsers = new SocialUserRepository(_context);

                return _socialUsers;
            }
        }

        public ISocialUserLoginRepository SocialUserLogins
        {
            get
            {
                if (_socialUserLogins == null)
                    _socialUserLogins = new SocialUserLoginRepository(_context);

                return _socialUserLogins;
            }
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
