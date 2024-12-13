"use client";
import { useState, FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Clipboard, Keyboard, RotateCcw } from "lucide-react";
import useStore from "@/app/store/useStore";
import { countWords, countCharacters } from "@/shared/utils/textCounter";
import { insertText } from "@/services/apiText";

interface TextSummarizerProps {
  classname?: string;
}

export const TextSummarizer: FC<TextSummarizerProps> = ({ classname }) => {
  const [textMode, setTextMode] = useState<boolean>(false);
  const { prompt, setPrompt, setSummary } = useStore();

  const summarizeText = async () => {
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
        await insertText(1, data.summary);
      } else {
        setSummary("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setSummary("Error occurred while summarizing.");
    }
  };

  const toggleEnterText = () => {
    setTextMode((prev) => !prev);
  };

  const handleEnterText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.currentTarget.value);
  };

  const handleResetClick = () => {
    setPrompt("");
  };

  const handleSummarizeClick = () => {
    summarizeText();
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPrompt(text);
      toggleEnterText();
    } catch (error) {
      console.error("Failed to read clipboard contents:", error);
    }
  };

  return (
    <div
      className={cn(
        classname,
        "w-full bg-summarizerContainerColor rounded-lg border border-black"
      )}
    >
      {textMode ? (
        <div className="flex justify-center bg-white mt-5">
          <Textarea
            value={prompt}
            onChange={handleEnterText}
            placeholder="Enter your text here"
            className="reset-textarea w-full h-[170px] m-1"
          />
        </div>
      ) : (
        <div className="flex gap-3 justify-center align-center bg-white p-10 mt-5">
          <Button
            onClick={toggleEnterText}
            className="bg-transparent w-[120px] h-[90px] text-black flex-col border hover:bg-transparent rounded-xl hover:border-black"
          >
            <Keyboard className="text-textSecondaryColor !w-6 !h-6" />
            Enter Text
          </Button>

          <Button
            onClick={handlePaste}
            className="bg-transparent w-[120px] h-[90px] text-black flex-col border hover:bg-transparent rounded-xl hover:border-black"
          >
            <Clipboard className="text-textSecondaryColor !w-6 !h-6" />
            Paste Text
          </Button>
        </div>
      )}

      <div className="text-textSecondaryColor flex justify-between items-center p-3">
        <div className="flex text-sm">
          <p className="ml-6">
            Words <strong className="text-white">{countWords(prompt)}</strong>
          </p>
          <p className="ml-3">
            Characters{" "}
            <strong className="text-white">{countCharacters(prompt)}</strong>
          </p>
        </div>
        <div className="flex justify-start gap-3 mr-6">
          {textMode && (
            <Button
              className={`rounded-lg border hover:bg-sidebarHoverBtnColor ${
                prompt.length
                  ? "border-white bg-black text-white"
                  : "bg-zinc-900 text-textSecondaryBtn border-sidebarHoverBtnColor"
              }`}
              onClick={handleResetClick}
              disabled={!prompt.length}
            >
              <RotateCcw />
              Reset
            </Button>
          )}

          <Button
            onClick={handleSummarizeClick}
            className={`rounded-lg border hover:bg-gray-100 ${
              prompt.length
                ? "bg-white text-black"
                : "bg-zinc-900 text-textSecondaryBtn border-sidebarHoverBtnColor"
            }`}
            disabled={!prompt.length}
          >
            Summarize My Text
          </Button>
        </div>
      </div>
    </div>
  );
};
