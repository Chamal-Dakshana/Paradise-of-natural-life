const router =require("express").Router();
let ProjectOwner = require('../models/ProjectOwner');

router.route("/add").post((req,res)=>{

    const proName =req.body.proName;
    const proCategory = req.body.proCategory;
    const proPurpose = req.body.proPurpose;
    const proDuration = req.body.proDuration;
    const proResult = req.body.proResult;
    const proResultDuration = req.body.proResultDuration;

    const newProjectOwner = new ProjectOwner({
        proName,
        proCategory,
        proPurpose,
        proDuration,
        proResult,
        proResultDuration
    })

    newProjectOwner.save().then(()=>{
        res.json("Project added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    ProjectOwner.find().then((projectOwners)=>{
        res.json(projectOwners)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let projectId = req.params.id;
    const{proName,proCategory,proPurpose,proDuration,proResult,proResultDuration} = req.body;

    const updateProjectOwner ={
        proName,
        proCategory,
        proPurpose,
        proDuration,
        proResult,
        proResultDuration
    }

    const update = await ProjectOwner.findByIdAndUpdate(projectId, updateProjectOwner)
    .then(() =>{
        res.status(200).send({staus: "user updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({staus: "Error with updated data",error: err.mesege});
    })
})

    router.route("/delete/:id").delete(async (req,res) =>{
        let projectId = req.params.id;

        await ProjectOwner.findByIdAndDelete(projectId)
        .then(()=>{
            res.status(200).send({staus: "user deleted"})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({staus: "Error with deleted data",error: err.mesege});
        })
})

    router.route("/get/:id").get(async (req,res) => {
        let projectId = req.params.id;
        const user = await ProjectOwner.findById(projectId)
        .then((projectOwner)=>{
            res.status(200).send({staus: "user fetched",projectOwner})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({staus: "Error with get user",error: err.mesege});
        })
    })

module.exports = router;