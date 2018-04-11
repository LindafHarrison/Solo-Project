const Picture = require("./pictureModel");

const pictureController = {}

pictureController.addPicture = (req, res, next) => {
    console.log('req.body', req.body)
    const picture = new Picture ({
        name: req.body.name,
        imgUrl: req.body.imagePreviewUrl,
    })
    next();
}

module.exports = pictureController