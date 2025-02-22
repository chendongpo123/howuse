import { build } from "vite";
import path from 'path';
import pkg from "../package.json"
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";

// 创建dist 文件夹
if(!existsSync(path.resolve(__dirname, "../dist"))){
  mkdirSync(path.resolve(__dirname, "../dist"))
}

const libs = ["axios", "echarts", "crud", "vueComponent", "pdf"]

const _exports = {}

for (const lib of libs) {
  _exports[`./${lib}`] = {
    "import": `./${lib}/${lib}.es.js`,
    "require": `./${lib}/${lib}.cjs.js`,
    "types": `./${lib}/index.d.ts`,
  }
}

(
 async function(){
    await build({ configFile: path.join(__dirname, `./vite/axios.config.ts`) })
    await build({ configFile: path.join(__dirname, `./vite/echarts.config.ts`) })
    await build({ configFile: path.join(__dirname, `./vite/crud.config.ts`) })
    await build({ configFile: path.join(__dirname, `./vite/vueComponent.config.ts`) })
    await build({ configFile: path.join(__dirname, `./vite/pdf.config.ts`) })
  }
)()
// --------------------------------------------------

pkg.exports = _exports
Reflect.deleteProperty(pkg, "scripts")

const destPackageJsonPath = path.resolve(__dirname, "../dist/package.json")
const destReadmePath = path.resolve(__dirname, "../dist/README.md")
writeFileSync(destPackageJsonPath, JSON.stringify(pkg, null, '  '))
writeFileSync(destReadmePath, readFileSync(path.resolve(__dirname, "../README.md")))