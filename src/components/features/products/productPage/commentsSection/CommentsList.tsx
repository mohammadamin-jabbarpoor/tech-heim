import { commentsInfo } from "@/src/lib/constants/commentsInfo";
import CommentCard from "./CommentCard";

function CommentsList() {
  return (
    <div className="w-3/4">
      <div className="flex flex-col gap-2">
        {commentsInfo.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsList;
