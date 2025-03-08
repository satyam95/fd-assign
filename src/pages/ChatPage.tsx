import { useState } from "react";

import { LuArrowRightToLine, LuBrain } from "react-icons/lu";
import { MdOutlineFestival } from "react-icons/md";
import { FaArrowTrendUp, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { TfiLayoutSliderAlt } from "react-icons/tfi";

import user from "../assets/user.png";

import MessageBubble from "../components/MessageBubble";
import BadgeButton from "../components/BadgeButton";
import Button from "../components/Button";

function ChatPage() {
  const [selectedCategoryButtons, setSelectedCategoryButtons] = useState<
    string[]
  >([]);
  const [selectedPlatformButtons, setSelectedPlatformButtons] = useState<
    string[]
  >([]);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(
    null
  );
  const [submissionMessage, setSubmissionMessage] = useState("");

  const toggleCategoryButton = (id: string) => {
    setSelectedCategoryButtons((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const togglePlatformButton = (id: string) => {
    setSelectedPlatformButtons((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const selectContentType = (id: string) => {
    setSelectedContentType((prevSelected) => (prevSelected === id ? null : id));
  };

  const handleSubmit = () => {
    console.log("Selected Categories:", selectedCategoryButtons);
    console.log("Selected Platforms:", selectedPlatformButtons);
    console.log("Selected Content Type:", selectedContentType);
    setSubmissionMessage("Submission Successful!");
  };

  const isFormComplete =
    selectedCategoryButtons.length > 0 &&
    selectedPlatformButtons.length > 0 &&
    selectedContentType !== null;

  const categoryButtons = [
    { id: "educational", icon: <LuBrain />, label: "Educational" },
    { id: "promotional", icon: null, label: "Promotional" },
    { id: "festival", icon: <MdOutlineFestival />, label: "Festival" },
    { id: "trends", icon: <FaArrowTrendUp />, label: "Trends" },
  ];

  const platformButtons = [
    { id: "instagram", icon: <FaInstagram />, label: "Instagram" },
    { id: "facebook", icon: <FaFacebookSquare />, label: "Facebook" },
    { id: "linkedin", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  const contentTypeButtons = [
    { id: "static", icon: <CiImageOn />, label: "Static post" },
    { id: "carousal", icon: <TfiLayoutSliderAlt />, label: "Carousal" },
  ];

  return (
    <div className="container mx-auto py-4 flex flex-col items-center gap-20">
      <div className="max-w-5xl">
        <div className="flex flex-col gap-11">
          <div className="flex gap-2">
            <img src={user} alt="user-image" className="w-[38px] h-[41px]" />
            <div className="flex flex-col gap-4">
              <MessageBubble message="Choose the category of the Post" />
              <div className="flex gap-3">
                {categoryButtons.map((button) => (
                  <BadgeButton
                    key={button.id}
                    icon={button.icon}
                    label={button.label}
                    selected={selectedCategoryButtons.includes(button.id)}
                    onClick={() => toggleCategoryButton(button.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={user} alt="user-image" className="w-[38px] h-[41px]" />
            <div className="flex flex-col gap-4">
              <MessageBubble message="Choose the Platform you wish to post on" />
              <div className="flex gap-3">
                {platformButtons.map((button) => (
                  <BadgeButton
                    key={button.id}
                    icon={button.icon}
                    label={button.label}
                    selected={selectedPlatformButtons.includes(button.id)}
                    onClick={() => togglePlatformButton(button.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={user} alt="user-image" className="w-[38px] h-[41px]" />
            <div className="flex flex-col gap-4">
              <MessageBubble message="Choose the Type of Post" />
              <div className="flex gap-3">
                {contentTypeButtons.map((button) => (
                  <BadgeButton
                    key={button.id}
                    icon={button.icon}
                    label={button.label}
                    selected={selectedContentType === button.id}
                    onClick={() => selectContentType(button.id)}
                  />
                ))}
              </div>
              <Button
                className="w-fit"
                disabled={!isFormComplete}
                onClick={handleSubmit}
              >
                Submit <LuArrowRightToLine />
              </Button>
            </div>
          </div>
          {submissionMessage && (
            <div className="flex gap-2">
              <img src={user} alt="user-image" className="w-[38px] h-[41px]" />
              <MessageBubble
                size="large"
                message="You can choose from the suggestions on the right panel or you can suggest me something you you have something in your mind."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
