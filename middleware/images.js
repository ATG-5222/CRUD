const multer = require("multer");

const typeImages = {
	"image/jpeg": "jpg",
	"image/png": "png",
	"image/jpg": "jpg",
};

const storage = multer.diskStorage({
	// STORAGE OF IMAGE
	destination: (req, file, callback) => {
        console.log("Entrando a destination");
		callback(null, '../assets/img');
	},
	//MAKE EACH IMAGE UNIQUE
	filename: (req, file, callback) => {
		const extension = typeImages[file.mimetype];
        console.log("Name:",name,"- Extension: ",extension);
		callback(null, name + Date.now() + "." + extension);
	},
});

const upload = multer({ storage: storage });

module.exports = {upload};