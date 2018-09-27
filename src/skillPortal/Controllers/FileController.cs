using System.IO;
using System.Threading.Tasks;
using DAL.Core.Interfaces;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using skillPortal.ViewModels;

namespace skillPortal.Controllers
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        IFileManager _fileManager;

        public FileController(IFileManager fileManager)
        {
            this._fileManager = fileManager;
        }

        public async Task<IActionResult> Index()
        {
           var data = await this._fileManager.GetAllAsync();
           return View();
        }

        // GET api/values/5
        [HttpGet("/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            //this._fileManager.Add
            //var category = await this._categoryManager.GetByIdAsync(id);
            //if (category == null)
            //{
            //    return NotFound();
            //}
            return Ok();
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
                entity.Name = model.Name;
                entity.Description = model.Description;

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