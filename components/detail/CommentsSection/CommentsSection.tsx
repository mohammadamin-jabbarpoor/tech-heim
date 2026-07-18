import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";

function CommentsSection() {
  return (
    <div className="mt-12">
      <h3 className="font-medium text-xl mb-6">Comments</h3>
      <div className="flex gap-6">
        <CommentsForm />
        <CommentsList />
      </div>
    </div>
  );
}

export default CommentsSection;
