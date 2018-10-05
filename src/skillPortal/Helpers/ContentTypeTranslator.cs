using DAL.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace skillPortal.Helpers
{
    public class ContentTypeTranslator
    {
        public static FileType GetFileType(string type)
        {
            if (type.Contains("image"))
            {
                return FileType.IMAGE;
            }
            else if (type.Contains("pdf"))
            {
                return FileType.PDF;
            }
            else if (type.Contains("office"))
            {
                return FileType.DOCUMENT;
            }
            else
            {
                return FileType.UNSPECIFIED;
            }
          
        }
    }
}
