const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    const { username, password } = req.body;
    try{
    const hashpassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
        username,
        password: hashpassword,
    });
    res.status(201).json({
        status: "succes",
        data: {
        user: newUser,
    },
    });
    } catch (e) {
    res.status(400).json({
        status: "fail",
    });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try{
    const user = await User.findOne({username})
    
    if (!user) {
        return res.status(404).json({
            staus: "fail",
            message: "User not Found"
        })
    }

    ifCorrect = await bcrypt.compare(password,user.password)

    if(ifCorrect){
        res.status(200).json({
            staus: "succes"
        })
    } else {
        req.status(400).json({
            status: 'fail',
            message: "incorrect username or password"
        })
    }

    } catch (e) {
    res.status(400).json({
        status: "fail",
    });
    }
};
