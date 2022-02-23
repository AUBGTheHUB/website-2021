import mongoose, {Schema, Document} from "mongoose";

export interface ArticleInterface extends Document {
  title: string;
  author: string;
  articleBody: string;
  createdOn: Date; 
}

const ArticleSchema: Schema = new Schema({
  title: {type: String, required:true},
  author: {type: String, required: true},
  articleBody: {type: String, required: true},
  createdOn: {type: Date, required: true}
});

const Article = mongoose.model<ArticleInterface>("Article", ArticleSchema);
export default Article;