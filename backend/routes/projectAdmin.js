const express = require("express")
const router = express.Router();
const multer = require("multer")
const projects = require('../models/projectAdmin');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//REQUEST GET ALL PROJECTS
router.get('/', (req, res) => {
    projects.find()
    .then(projectAdmin => res.json(projectAdmin))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST ADD NEW PROJCTS
router.post('/add', upload.single("projectImage"), (req, res) => {
    const newprojectAdmin = new projecs({
        pname: req.body.pname,
        category: req.body.category,
        details: req.body.details,
        purpose: req.body.purpose,
        duration: req.body.duration,
        result: req.body.result,
        projectImage: req.file.originalname,
    });

    newprojectAdmin
    .save()
    .then(() => res.json("The new project posted successfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


//REQUEST FIND PROJECTS BY ID
router.get("/:id", (req, res) => {
    projects.findById(req.params.id)
    .then((projectAdmin) => res.json(projectAdmin))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND PROJECT BY ID AND UPDATE
router.put('/update/:id',  upload.single("projectImage"), (req, res) => {
    projects.findById(req.params.id)
    .then(projectAdmin => {
        projectAdmin.pname = req.body.pname;
        projectAdmin.category = req.body.category;
        projectAdmin.details = req.body.details;
        projectAdmin.purpose = req.body.purpose;
        projectAdmin.duration = req.body.duration;
        projectAdmin.result = req.body.result;
        projectAdmin.projectImage = req.file.originalname

        projectAdmin
            .save()
            .then(() => res.json("The project is UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND PROJECT BY ID AND DELETE
router.delete('/delete/:id', (req, res) => {
    projects.findByIdAndDelete(req.params.id)
        .then(() => res.json("The project is DELETED"))
        .catch(err => res.status(400).json(`Error: ${err}`));
});




module.exports = router;