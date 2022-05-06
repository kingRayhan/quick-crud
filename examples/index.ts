import { index } from "../dist/quick-crud";
import { connect, Schema, model } from "mongoose";

connect(
  "mongodb+srv://rayhan:rayhan123@cluster0.dymuq.mongodb.net/newsrme-dev?retryWrites=true&w=majority"
).then((res) => console.log("Database connected"));

const ArticleSchema = new Schema({
  title: {
    type: String,
  },
});

const Article = model<typeof ArticleSchema>("Article", ArticleSchema);

// index<typeof ArticleSchema>({
//   model: Article,
// });
