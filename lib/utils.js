var path = require('path');


module.exports = {

    // check image format
    isImage : (img) => {
        var imgExtension = path.extname(img)
        if(imgExtension === '.png' ||
            imgExtension === '.jpg') {
            return true
        } else {
            return false
        }

    }

}