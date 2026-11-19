import dataModels from "../model/modelss.js";

export const controllers = async (req, res) => {
    try {
        const { username, useremail, userpassword } = req.body;

        const Milk = await dataModels.create({
            username,
            useremail,
            userpassword
        });

        res.status(201).json({
            msg: "Created successfully",
            Milk
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
};