"use client";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import useStore from "@/app/store/useStore";

interface SummarizedTextProps {
  classname?: string;
}

export const SummarizedText: React.FC<SummarizedTextProps> = ({
  classname,
}) => {
  const { summary } = useStore();

  return (
    <>
      {summary ? (
        <div
          className={cn(
            "flex justify-start items-start p-4 overflow-hidden bg-summarizedTextBlock h-[50%] border border-borderBlock rounded-lg",
            classname
          )}
        >
          <p className="text-base">{summary}</p>
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col justify-center items-center bg-summarizedTextBlock h-[50%] border border-borderBlock rounded-lg",
            classname
          )}
        >
          <FileText className="text-textSecondaryColor pb-3 w-20 h-20" />
          <p>Your summarized text will appear here</p>
        </div>
      )}
    </>
  );
};
