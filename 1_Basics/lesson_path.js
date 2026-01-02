const path=require('path')
console.log(`filename        : ${path.basename(__filename)}`);
console.log(`directory name  : ${path.dirname(__filename)}`);
console.log(`joining a path  : ${path.join('/user','documents','downloads','backend','notes')}`);
console.log(`normalize a path: ${path.normalize('./user','./homes','../city','/rooms')}`);