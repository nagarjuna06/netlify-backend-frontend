import mongoose from "mongoose";
import { config } from "dotenv";
config();
const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  code: {
    type: Object,
    default: null,
  },
  options: {
    type: Array,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    default: null,
  },
  level: {
    type: String,
    required: true,
  },
  quizName: {
    type: String,
    required: true,
  },
});

export const practiceQuestionModel = mongoose.model(
  "practice-questions",
  questionSchema
);

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.log(err));
};
