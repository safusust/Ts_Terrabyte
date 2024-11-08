const educationalContentSchema =require('../Schema/educationalContentSchema.js')

exports.Educational = async (req, res) => {
    try {
        const educational = await educationalContentSchema.findOne();
        res.status(200).json(educational);
    } catch (error) {
        console.error("Error fetching ", error);
        res.status(500).json({ error: "Server error" });
    }
};

