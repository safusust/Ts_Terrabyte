const userSchema =require('../Schema/userSchema');

exports.User = async (req, res) => {
    try {
        const user = await userSchema.findOne;
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching ", error);
        res.status(500).json({ error: "Server error" });
 
    }
};

