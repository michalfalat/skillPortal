﻿using System;
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

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
