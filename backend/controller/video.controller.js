const vedioSchema =require('../Schema/VideoSchema');

exports.Video = async (req, res) => {
    try {
        const video = await vedioSchema.findOne;
        res.status(200).json(video);
    } catch (error) {
        console.error("Error fetching ", error);
        res.status(500).json({ error: "Server error" });
    }
};

