"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useMemo } from "react";

interface PaginationProps {
  classname?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  classname,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = useMemo(() => {
    const visiblePages: number[] = [];
    const maxVisible = 3;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      if (currentPage === 1) {
        visiblePages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        visiblePages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        visiblePages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return visiblePages;
  }, [currentPage, totalPages]);

  return (
    <div
      className={cn("flex items-center justify-center gap-2 mt-4", classname)}
    >
      <Button
        className="rounded-2xl bg-transparent text-historyItemMenuIcon hover:text-black w-[40px] h-[40px]"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeft />
      </Button>

      {getVisiblePages.map((page) => (
        <Button
          key={page}
          className={`${
            currentPage === page
              ? "bg-paginationBgBtn text-black"
              : "bg-transparent text-historyItemMenuIcon hover:text-black"
          } rounded-2xl w-[40px] h-[40px]`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        className="rounded-2xl bg-transparent text-historyItemMenuIcon hover:text-black w-[40px] h-[40px]"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};
