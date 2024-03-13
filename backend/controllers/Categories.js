const Category = require("../Models/Categories");



exports.createCategory = async (req, res) => {
    try{
        const {name, description} = req.body;

        if(!description || !name) {
            return res.status(404).send({
                success: false,
                message: "Invalid description"
            })
        }

        // create Category in DB

        const CategoryDetail = await Category.create({
            name :name,
            description: description
            })
        
        console.log(CategoryDetail);

        return res.status(200).send({
            success: true,
            message: "Category Created Succesfully!"
        })

    }catch(e) {
        console.log("error while creating Category: ",e);
        return res.status(500).send({
            success: false,
            message: "Something went wrong"
        })

    }
}


exports.getAllCategories = async (req, res) => {
    try{
        
        const Categories = await Category.find({},{name:true, description:true});

        return res.status(200).send({
            success: true,
            message: "All Categories Fetched",
            Categories: Categories
        })

    }catch(e) {
        console.log("error while creating Category: ",e);
        return res.status(500).send({
            success: false,
            message: "Something went wrong"
        })

    }
}


// category page details

exports.categorypagedetails = async (req, res) => {
    try{
        const {category} = req.body;

        const courses = await Category.findById(category).populate("course").exec();

        if(!courses) {
            return res.status(404).send({
                success: false,
                message: "No Courses Found"
            })
        }

        const diffCourses = await Category.find({_id:{$ne: category}}).populate("course").exec();

        return res.status(200).send({
            success: true,
            message: "Details Fetched",
            courses,
            diffCourses
        })



    }catch(err) {
        console.log("error while getting Category details: ",e);
        return res.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
}