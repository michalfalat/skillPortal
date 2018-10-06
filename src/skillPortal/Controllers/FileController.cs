using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using AutoMapper;
using DAL.Core.Interfaces;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using skillPortal.Helpers;
using skillPortal.ViewModels;

namespace skillPortal.Controllers
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        IFileManager _fileManager;
        ICategoryManager _categoryManager;

        public FileController(IFileManager fileManager, ICategoryManager categoryManager)
        {
            this._fileManager = fileManager;
            this._categoryManager = categoryManager;
        }

        public async Task<IActionResult> Index()
        {
           var data = await this._fileManager.GetAllAsync();
           return View();
        }


        // GET:
        [HttpGet("category/{catId}")]
        public async Task<IActionResult> GetFilesForCategory(int catId)
        {
            var cat = await this._categoryManager.GetByIdAsync(catId);
            if (cat == null)
            {
                return NotFound();
            }
            //todo return model with name and id  of category 
            var files = await this._fileManager.GetFilesMetadataForCategory(catId);
            var filesModel = Mapper.Map<List<DAL.Models.File>, List<FileMetadataViewModel>>(files);
            var model = new FilesForCategoryViewModel();
            model.CatId = cat.Id;
            model.CatName = cat.Name;
            model.Files = filesModel;

            return Ok(model);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var file = await this._fileManager.GetByIdAsync(id);
            //var category = await this._categoryManager.GetByIdAsync(id);
            if (file == null)
            {
                return NotFound();
            }
            MemoryStream ms = new MemoryStream(file.Data);
            return File(file.Data, "application/force-download", fileDownloadName: file.Name);
            //return new FileStreamResult(ms, "application/force-download",);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] FileAddModel model)
        {
            var files = Request.Form.Files;
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }
            else
            {
                var entity = new DAL.Models.File();
                entity.CategoryId = model.CatId;
                entity.Name = model.File.FileName;
                entity.Description = model.Description;
                entity.Type = ContentTypeTranslator.GetFileType(model.File.ContentType);

                using (var memoryStream = new MemoryStream())
                {
                    await model.File.CopyToAsync(memoryStream);
                    entity.Data = memoryStream.ToArray();
                }

                this._fileManager.Add(entity);
                return Ok();
            }

        }
    }
}