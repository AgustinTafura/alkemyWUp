var path = require('path');


module.exports = {

    // check image format
    isImage : (img) => {
        var imgExtension = path.extname(img)
        if(imgExtension === '.png' ||
            imgExtension === '.jpg' ||
            imgExtension === '.jpeg') {
            return true
        } else {
            return false
        }

    }

}