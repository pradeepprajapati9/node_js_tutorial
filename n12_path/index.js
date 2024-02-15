const fs=require("fs");
const path=require("path");

// know your path
// const dirpath=path.join(__dirname);
// console.log(dirpath);

// know your path with one more
const dir_path=path.join(__dirname,"allfiles");
// console.log(dir_path);


// create multiple files
// for(let i=0;i<=5;i++){
//     fs.writeFileSync(`${dir_path}/demo.txt${i}`,"data store in files");
// }


//read files
fs.readdir(dir_path,(err,files)=>{
    // console.log(files)
    // console.log(err)

    files.forEach((i)=>{
        console.log(i)
    })
})

