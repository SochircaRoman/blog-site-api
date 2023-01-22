const uuid = require("uuid")
const path = require("path")

class FileService {
  saveImage(image) {
    try {
        // Generate a unique file path
        const imageName = uuid.v4() + ".jpg"
        const imagePath = path.resolve("src/api/static", imageName)
        image.mv(imagePath)
        return imageName;
    } catch (error) {
      console.log(error)
    }

  }
}

module.exports = new FileService()