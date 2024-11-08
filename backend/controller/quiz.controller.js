const quizSchema =require('../Schema/quizSchema');
exports.Quiz = async (req, res) => {
    try {
        const quiz = await quizSchema.find();
        res.status(200).json(quiz);
    } catch (error) {
        console.error("Error fetching ", error);
        res.status(500).json({ error: "Server error" });
    }
};

