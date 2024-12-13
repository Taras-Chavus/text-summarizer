"use client";
import { cn } from "@/lib/utils";
import { HistoryItem } from "./HistoryItem";
import { useState } from "react";
import { Pagination } from "../../Pagination/Pagination";
import { useMemo, useEffect, isValidElement } from "react";
import useStore from "@/app/store/useStore";

interface HistoryListProps {
  classname?: string;
}

function getPlainText(content: string | JSX.Element): string {
  if (typeof content === "string") {
    return content;
  }

  if (isValidElement(content)) {
    const { children } = content.props as { children?: React.ReactNode };

    if (typeof children === "string") {
      return children;
    } else if (Array.isArray(children)) {
      return children.map(getPlainText).join("");
    } else if (isValidElement(children)) {
      return getPlainText(children);
    }
  }

  return "";
}

const highlightText = (
  text: string | JSX.Element,
  query: string
): string | JSX.Element => {
  if (!query) return text;

  if (typeof text !== "string") return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};
export const HistoryList: React.FC<HistoryListProps> = ({ classname }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchQuery = useStore((state) => state.searchQuery);
  const { data } = useStore();

  const itemsPerPage = 4;

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      getPlainText(item.text).toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages > 0 ? totalPages : 1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={cn("flex flex-col justify-between ", classname)}>
      <div className="flex flex-col gap-3">
        {currentItems.map((item) => {
          const highlightedSummary = highlightText(item.text, searchQuery);

          const summaryText =
            typeof highlightedSummary === "string"
              ? highlightedSummary
              : (highlightedSummary as JSX.Element).props.children;

          return (
            <HistoryItem
              key={item.id}
              plainText={item.text}
              item={{
                ...item,
                text: summaryText,
              }}
            />
          );
        })}
      </div>

      <div className="flex justify-between items-center h-[70px]">
        <p className="text-sm text-historyItemMenuIcon">
          Show {startIndex + 1} to {startIndex + currentItems.length} of{" "}
          {filteredData.length} entries
        </p>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
