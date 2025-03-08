import tail from "../assets/tail.png";

interface MessageBubbleProps {
  message: string;
  size?: "small" | "large"
}

const MessageBubble = ({ message, size="small" }: MessageBubbleProps) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="px-3 font-medium leading-[13px] text-[11px] text-[#3C3C4399]">
        First Last
      </div>
      <div className={`relative w-full ${size === "small" ? "max-w-[259px]" : "max-w-[482px]"}`}>
        <div className="bg-[#E9E9EB] px-3 py-1.5 rounded-[18px] text-[#696464] text-[15px] leading-[22px] font-normal -tracking-[0.41px] relative z-10">
          {message}
        </div>
        <img src={tail} alt="tail" className="absolute bottom-0 left-0 z-0" />
      </div>
    </div>
  );
};

export default MessageBubble;
