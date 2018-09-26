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
    public class ExamController : Controller
    {
        private IExamManager _examManager;
        private ICategoryManager _categoryManager;
        readonly ILogger _logger;
        public ExamController(IExamManager examManager, ILogger<ExamController> logger, ICategoryManager categoryManager)
        {
            this._examManager = examManager;
            this._logger = logger;
            this._categoryManager = categoryManager;
        }

        public async Task<IActionResult> Index()
        {
            var allExams = await this._examManager.GetAllExamsAsync();
            return Ok(allExams);
        }


        // GET:
        [HttpGet("category/{catId}")]
        public async Task<IActionResult> GetExamsForCategory(int catId)
        {
            var cat = await this._categoryManager.GetByIdAsync(catId);
            if(cat == null)
            {
                return NotFound();
            }
            //todo return model with name and id  of category 
            var exams = await this._examManager.GetExamsForCategoryAsync(catId);
            var examsModel = Mapper.Map<List<Exam>, List<ExamViewModel>>(exams);
            var model = new ExamsForCategoryViewModel();
            model.CatId = cat.Id;
            model.CatName = cat.Name;
            model.Exams = examsModel;

            return Ok(model);
        }




        // GET 
        [HttpGet("category/{catId}/tests/{examId}")]
        public async Task<IActionResult> Get(int catId, int examId)
        {
            var exam = await this._examManager.GetByIdAsync(examId);
            if (exam == null || exam.CategoryId != catId)
            {
                return NotFound();
            }
            return Ok(exam);
        }



        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ExamAddModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }
            else
            {
                Exam entity = Mapper.Map<Exam>(model);
                this._examManager.Add(entity);
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