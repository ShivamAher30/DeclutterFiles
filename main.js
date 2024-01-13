const fs = require("fs");
var path = require('path');
var currentL = './Resource' 

fs.readdir(currentL,(error,files)=>
{
    if(error)
    {
        console.log("Error");
        return 0;

    }
    else
    {
        files.forEach((file,index)=>
        {
            const nameFolder = path.extname(file);
            var newL = path.extname(file);
       
            if(!fs.existsSync(nameFolder))
            {
                fs.mkdirSync(nameFolder)

            }

            var frompath =  path.join(currentL,file);
            var topath = path.join(newL,file);
            fs.renameSync(frompath,topath)
            console.log(`The file ${path.basename(file)} has been moved to new directory ${nameFolder}\n`)


        })

    }
})