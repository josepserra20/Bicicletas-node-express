var path = require('path');
var fs = require('fs');
const VIEW_DIR = '../frontend';
const IMG_DIR = '/img/';

const PageModule = ( () => {

    async function getHomePage(req, res) {
       
        const filePath = path.join(__dirname, VIEW_DIR, '/index.html');
        const html = await fs.promises.readFile(filePath, 'utf8');     

        res.send(html);
    }

    return {
        getHomePage,
        
        
    }

})();

exports.pageModule = PageModule;