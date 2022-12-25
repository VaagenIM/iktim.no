const fs = require('fs');
const pug = require('pug');
const path = require('path');

const pugData = {
  base_url: 'iktim.no'
}

function copyFolderSync(from, to) {
    try {
        fs.mkdirSync(to, {
            recursive: true
        })
    } catch {}
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            if (fs.existsSync(path.join(to, element))) {
                return
            }
            if (element === 'Games go here.txt') {
                return
            }
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

function main() {
  fs.mkdirSync('gh-pages', {recursive: true});
  fs.writeFileSync('gh-pages/CNAME', pugData.base_url);
  copyFolderSync('public', 'gh-pages');
  fs.writeFileSync('gh-pages/index.html', pug.renderFile('views/index.pug', pugData));
}

main();
