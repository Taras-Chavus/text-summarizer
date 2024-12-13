"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HomeIcon, HistoryIcon, LogOut, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "@/app/store/useStore";
import { getText } from "@/services/apiText";

export default function Sidebar() {
  const pathname = usePathname();
  const { setData } = useStore();

  const handleHistoryClick = async () => {
    const response = await getText(1);
    setData(response);
  };

  return (
    <aside className="bg-black text-white w-64 p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <Avatar>
          <AvatarFallback className="bg-avatarColor">JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="text-sm text-gray-400">johndoe@email.com</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto hover:bg-sidebarHoverBtnColor hover:text-white"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>

      <Button
        variant="outline"
        className="w-full mb-4 text-sidebarColor rounded-lg"
      >
        <Plus />
        Summarize Text
      </Button>

      <nav className="flex flex-col gap-2">
        <Link href="/">
          <Button
            variant="ghost"
            className={`
              w-full justify-start hover:bg-sidebarHoverBtnColor hover:text-white
              ${pathname === "/" ? "bg-sidebarHoverBtnColor text-white" : ""}
            `}
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </Button>
        </Link>

        <Link href="/history">
          <Button
            onClick={handleHistoryClick}
            variant="ghost"
            className={`
              w-full justify-start hover:bg-sidebarHoverBtnColor hover:text-white
              ${
                pathname === "/history"
                  ? "bg-sidebarHoverBtnColor text-white"
                  : ""
              }
            `}
          >
            <HistoryIcon className="w-5 h-5 mr-2" />
            History
            <Badge
              variant="secondary"
              className=" bg-badgeColor text-white rounded-sm border border-badgeBorderColor hover:bg-badgeColor/40"
            >
              15
            </Badge>
          </Button>
        </Link>
      </nav>
    </aside>
  );
}
