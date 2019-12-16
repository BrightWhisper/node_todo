// 获取操作系统的home目录
const homedir = require('os').homedir();
// 环境变量中配置的home目录
const home = process.env.HOME || homedir;
const fs = require('fs');
const path = require('path');
const dbpath = path.join(home, '.todo')

module.exports.add = (title) => {
    // 读取之前的任务
    const list = db.read();
    // 添加一个任务
    list.push({title,done: false});
    // 存储任务到文件
    db.write(list);

    
    fs.readFile(dbpath, { flag: 'a+' }, (error, data) => {
        if (error) console.log(error)
        else {
            let list
            try {
                list = JSON.parse(data);
                console.log()
            } catch (error2) {
                list = [];
            }
            console.log(list);
            const task = {
                title,
                done: false
            }
            list.push(task);
            const string = JSON.stringify(list)+'\n';
            console.log(string);
            fs.writeFile(dbpath, string, (error3) => {
                if (error3) console.log(error3);
            });
        }
    });
}

