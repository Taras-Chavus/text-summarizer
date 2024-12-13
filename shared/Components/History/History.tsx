import { cn } from "@/lib/utils";
import { Header } from "@/shared/Header";
import { FilterBar } from "./FilterBar/FilterBar";
import { HistoryList } from "./HistoryList/HistoryList";

interface HistoryProps {
  classname?: string;
}

const History: React.FC<HistoryProps> = ({ classname }) => {
  return (
    <div className={cn("flex-1 p-8 w-full flex flex-col gap-5", classname)}>
      <Header title="History" subtitle="View previously summarized texts" />
      <FilterBar />
      <HistoryList />
    </div>
  );
};

export default History;
