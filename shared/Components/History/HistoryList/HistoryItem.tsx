import { cn } from "@/lib/utils";
import { TypeHistoryItem } from "@/types/types";
import { Badge } from "@/app/components/ui/badge";
import { countWords, countCharacters } from "@/shared/utils/textCounter";
import { Type, AlignLeft, Ellipsis } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/app/components/ui/dropdown-menu";
import { Trash2, Pencil, Copy } from "lucide-react";
import { formatDate } from "@/shared/utils/formatDate";

interface HistoryItemProps {
  classname?: string;
  item: TypeHistoryItem;
  plainText: string;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
  classname,
  item,
  plainText,
}) => {
  const { text, createdAt } = item;

  const displaySummary =
    text === "string" && text.length > 310 ? `${text.slice(0, 310)}...` : text;

  return (
    <div
      className={cn(
        "w-full h-[126px] p-4 rounded-2xl border border-mainBorder flex flex-col justify-between",
        classname
      )}
    >
      <div className="flex justify-between">
        <p className="text-sm">{displaySummary}</p>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="w-[32px] h-[32px] ml-3 bg-transparent text-historyItemMenuIcon rounded-xl border border-mainBorder hover:bg-zinc-50 shadow-custom">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="rounded-2xl border border-mainBorder"
            align="end"
          >
            <DropdownMenuItem>
              <Copy />
              Copy to Clipboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-2 justify-start">
        <Badge className="bg-footerBorderBtn text-historyItemMenuIcon rounded-lg text-sm h-[28px]">
          {formatDate(createdAt)}
        </Badge>
        <Badge className="bg-footerBorderBtn text-historyItemMenuIcon rounded-lg text-sm h-[28px] flex gap-1">
          <AlignLeft className="w-4 h-4" /> {countWords(plainText)} Words
        </Badge>
        <Badge className="bg-footerBorderBtn text-historyItemMenuIcon rounded-lg text-sm h-[28px] flex gap-1">
          <Type className="w-4 h-4" /> {countCharacters(plainText)} Characters
        </Badge>
      </div>
    </div>
  );
};
