"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Copy } from "lucide-react";
import useStore from "@/app/store/useStore";
import { countWords, countCharacters } from "@/shared/utils/textCounter";
import { useToast } from "@/hooks/use-toast";

interface Props {
  classname?: string;
}
export const Footer: React.FC<Props> = ({ classname }) => {
  const { summary } = useStore();
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      toast({
        description: "Copied to Clipboard!",
        variant: "success",
        duration: 1000,
      });
    } catch (error) {
      console.error("Failed to copy text:", error);
      toast({
        description: "Failed to copy text. Please try again.",
        variant: "destructive",
        duration: 1000,
      });
    }
  };

  return (
    <div
      className={cn(
        "text-textSecondaryColor flex justify-between items-center h-[40px]",
        classname
      )}
    >
      <div className="flex text-sm">
        <p>
          Words <strong>{countWords(summary)}</strong>
        </p>
        <p className="ml-3">
          Characters <strong>{countCharacters(summary)}</strong>
        </p>
      </div>
      <Button
        onClick={handleCopy}
        disabled={countWords(summary) === 0}
        className={`rounded-lg bg-transparent border v hover:bg-transparent ${
          summary.length ? "text-black" : "text-footerTextBtn"
        }`}
      >
        <Copy />
        Copy to Clipboard
      </Button>
    </div>
  );
};
