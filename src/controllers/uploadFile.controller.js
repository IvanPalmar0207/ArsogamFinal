//Multer
const uploadFile = (req, res) => {
    res.send(req.file)
}

export default uploadFile