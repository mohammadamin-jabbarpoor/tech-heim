import MessageForm from "./MessageForm";
import MessageText from "./MessageText";

function MessageInfo() {
  return (
    <div className="w-full xl:w-254 flex flex-col lg:flex-row justify-between gap-4 md:gap-8 lg:gap-18 xl:gap-32 mx-auto">
      <MessageText />
      <MessageForm />
    </div>
  );
}

export default MessageInfo;
