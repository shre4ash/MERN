const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg: "User created sucessfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const responce = await Course.find({})
    
    res.json({
        courses: responce
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse : courseId
        }
    })

    res.json({
        msg: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await Course.find({
       username: req.headers.username
    });

    const courses = await Course.find({
        _Id: {
            "$in":user.purchasedCourse
        }
    });
    
    res.json({
        courses: courses
    })
});

module.exports = router