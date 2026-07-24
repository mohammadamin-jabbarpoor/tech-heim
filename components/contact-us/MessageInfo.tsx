import MessageForm from "./MessageForm";
import MessageText from "./MessageText";

function MessageInfo() {
  return (
    <div className="w-254 flex justify-between gap-32 mx-auto">
      <MessageText />
      <MessageForm />
    </div>
  );
}

export default MessageInfo;
