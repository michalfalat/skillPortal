using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL.Core.Interfaces;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using skillPortal.ViewModels;
using SkillPortal.ViewModels;

namespace skillPortal.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private ICategoryManager _categoryManager;
        readonly ILogger _logger;
        public CategoryController(ICategoryManager categoryManager, ILogger<CategoryController> logger)
        {
            this._categoryManager = categoryManager;
            this._logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            var allCategories = await this._categoryManager.GetAllCategoriesIncludingAllAsync();
            var models = Mapper.Map<List<Category>, List<CategoryViewModel>>(allCategories);
            return Ok(models);
        }


        // GET: api/category/categories
        [HttpGet("/categories")]
        public async Task<IActionResult> Get()
        {
            var allCategories = await this._categoryManager.GetAllCategoriesIncludingAllAsync();
            var models =  Mapper.Map<List<Category>, List<CategoryViewModel>>(allCategories);
            return Ok(models);
        }

        


        // GET api/values/5
        [HttpGet("/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var category = await this._categoryManager.GetByIdAsync(id);
            if(category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }



        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CategoryAddModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }
            else
            {
                Category entity =  Mapper.Map<Category>(model);
                this._categoryManager.Add(entity);
                return Ok();
            }

        }



        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }



        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}