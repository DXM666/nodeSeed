let fs = require("fs");
let basepath = "src/modules/";
let npmPath = "node_modules/test-tool-createmodule/"
let moment = require("moment");
let cptName = process.argv.splice(2)[0];
let path = cptName.split("/");
let name = path[path.length - 1];
let writes = [
  `components/${name}.component.ts`,
  `components/${name}.component.html`,
  `components/index.ts`,
  `services/${name}.service.ts`,
  `services/index.ts`,
  `index.ts`
];
let reads = [
  `${npmPath}${basepath}tempDemo/components/temp.component.ts`,
  `${npmPath}${basepath}tempDemo/components/temp.component.html`,
  `${npmPath}${basepath}tempDemo/components/index.ts`,
  `${npmPath}${basepath}tempDemo/services/temp.service.ts`,
  `${npmPath}${basepath}tempDemo/services/index.ts`,
  `${npmPath}${basepath}tempDemo/index.ts`
];
let file = [];
let author = require("os")
  .homedir()
  .split("\\")
  .pop();

//检测是否存在文件夹
let exists = function() {
  console.log(process.argv)
  return new Promise((res, rej) => {
    (async function() {
      for (let a of path) {
        fs.existsSync(basepath + a)
          ? (basepath = `${basepath}${a}/`)
          : await mkdir(a);
      }
      res(basepath);
    })();
  });
};
//建立文件夹
let mkdir = function(a) {
  return new Promise((res, rej) => {
    fs.mkdir(basepath + a, err => {
      if (err) rej(err);
      fs.mkdir(basepath + `${a}/components`,err=>{
          if(err) rej(err);
      })
      fs.mkdir(basepath + `${a}/services`,err=>{
        if(err) rej(err);
    })
      basepath = `${basepath}${a}/`;
      res(basepath);
    });
  });
};
//读取模板文件内容，并替换为目标组件
let readFile = function() {
  return new Promise(res => {
    for (let a of reads) {
      let text = fs.readFileSync(a).toString();
      text = text
        .replace(/time/g, moment().format("YYYY/MM/DD"))
        .replace(/temp/g, name)
        .replace(/author/g, author);
      file.push(text);
    }
    res(file);
  });
};
//生成文件，并填入之前读取的文件内容
let writeFile = function(file) {
  return new Promise((res, rej) => {
    writes.map(async (item, index) => {
      return await fs.writeFile(`${basepath}${item}`, file[index], err => {
        if (err) rej(err);
      });
    });
    res("succ");
  });
};
exports.createModule = async function creatCpt() {
  try {
    await exists();
    //await readFile()
    await writeFile(await readFile());
    return console.log(`Successfully created ${name} component`);
  } catch (err) {
    console.error(err);
  }
}
