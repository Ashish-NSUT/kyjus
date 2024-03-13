const razorpay = require('razorpay');
const {instance} = require("../Config/razorpay");
const Course = require('../Models/Course');
const User = require('../Models/User');
const sendMail = require('../utils/NodeMailer');
const { default: mongoose } = require("mongoose");


// capture the payment 

exports.capturePayment = async (req, res) => {
    try{
        const {courseId} = req.body;
        const userId = req.user.id;

        if(!courseId) {
            return res.status(404).send({
                success: false,
                message: 'Enter valid Course'
            })
        }

        const course = await Course.findById(courseId);
        if(!course) {
            return res.status(404).send({
                success: false,
                message: 'No Course Found'
            })
        }

        const UID = new mongoose.Types.ObjectId(userId);
        if(course.studentsEnrolled.includes(UID)) {
            return res.status(404).send({
                success: false,
                message: 'Student Already Enrolled!'
            })
        }

        // payment part
        const price = course.price;
        const currency = "INR";

        const options = {
            amount: price*100,
            currency: currency,
            receipt: Math.random(Date.now()).toString(),
            notes:{
                courseId: course._id,
                userId
            }
        }

        const razorpayPayment = await instance.orders.create(options);
        console.log(razorpayPayment);
        return res.status(200).send({
            success: true,
            courseName : course.name,
            courseDescription : course.description,
            thumbnail: course.thumbnail,
            orderId: razorpayPayment.id,
            amount: razorpayPayment.amount
        })

    }catch(err){
        return res.status(500).send({
            success: false,
            message: err.message
        })
    }
}


// verify Payment 

exports.verifySignature = async (req, res) => {
    const webhook = "12345678";
    const signature = req.headers["x-razorpay-signature"];

    const shasum = crypto.createHmac("sha256", webhook);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if(signature !== digest) {
        return res.status(500).send({
            success: false,
            message: "Invalid Signature"
        })
    }
    console.log("Payment Authorized");

    const {courseId, userId} = req.body.payload.payment.entity.notes;

    try{
        const courseEnroll = await Course.findByIdAndUpdate(courseId, {$push :{studentsEnrolled:userId}},{new:true});
        
        if(!courseEnroll) {
            return res.status(500).send({
                success: false,
                message: "Course not Found"
            })
        };

        console.log(courseEnroll);

        const userEnroll = await User.findByIdAndUpdate(userId, {$push :{course:userId}},{new:true});

        await sendMail(
            userEnroll.email,
            `Course added`,
            `Course Purchased`
            )

            return res.status(200).send({
                success: true,
                message: "Signature verified"
            })


    }catch(err) {
        return res.status(500).send({
            success: false,
            message: err.message
        })
    }
}