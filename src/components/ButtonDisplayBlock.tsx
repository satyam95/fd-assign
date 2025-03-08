import Button from "./Button";
import { FaPlay } from "react-icons/fa6";

const ButtonDisplayBlock = () => {
  return (
    <div className="flex gap-12 py-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="text-[#BABABA] text-base text-left font-semibold">
          Icon
        </div>
        <Button variant="icon" size="small">
          <FaPlay className="w-3.5" />
        </Button>
        <Button variant="icon" size="medium">
          <FaPlay className="w-3.5" />
        </Button>
        <Button variant="icon" size="large">
          <FaPlay className="w-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="text-[#BABABA] text-base text-left font-semibold">
          text
        </div>
        <Button variant="text" size="small">
          Sample Text
        </Button>
        <Button variant="text" size="medium">
          Sample Text
        </Button>
        <Button variant="text" size="large">
          Sample Text
        </Button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="text-[#BABABA] text-base text-left font-semibold">
          Button with Left Icon
        </div>
        <Button variant="text" size="small">
          <FaPlay className="w-3.5" />
          Play
        </Button>
        <Button variant="text" size="medium">
          <FaPlay className="w-3.5" />
          Play
        </Button>
        <Button variant="text" size="large">
          <FaPlay className="w-4" />
          Play
        </Button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="text-[#BABABA] text-base text-left font-semibold">
          Button with Right Icon
        </div>
        <Button variant="text" size="small">
          Play
          <FaPlay className="w-3.5" />
        </Button>
        <Button variant="text" size="medium">
          Play
          <FaPlay className="w-3.5" />
        </Button>
        <Button variant="text" size="large">
          Play
          <FaPlay className="w-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="text-[#BABABA] text-base text-left font-semibold">
          Disabled Button
        </div>
        <Button variant="text" size="small" disabled>
          <FaPlay className="w-3.5 disabled:text-[#B9B9BC]" />
          Play
        </Button>
        <Button variant="text" size="medium" disabled>
          <FaPlay className="w-3.5 disabled:text-[#B9B9BC]" />
          Play
        </Button>
        <Button variant="text" size="large" disabled>
          <FaPlay className="w-4 disabled:text-[#B9B9BC]" />
          Play
        </Button>
      </div>
    </div>
  );
};

export default ButtonDisplayBlock;
