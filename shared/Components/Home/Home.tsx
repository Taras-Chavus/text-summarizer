import React from "react";
import { cn } from "@/lib/utils";
import { Header } from "@/shared/Header";
import { TextSummarizer } from "../TextSummarizer/TextSummarizer";
import { SummarizedText } from "../SummarizedText/SummarizedText";
import { Footer } from "@/shared/Footer";

interface HomeProps {
  classname?: string;
}

const Home: React.FC<HomeProps> = ({ classname }) => {
  return (
    <div className={cn("flex-1 p-8 w-full flex flex-col gap-5 ", classname)}>
      <Header
        title="Text Summarizer"
        subtitle="Summarize and manage texts with ease"
      />
      <TextSummarizer />
      <SummarizedText />
      <Footer />
    </div>
  );
};

export default Home;
