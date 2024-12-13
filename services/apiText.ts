import { supabase } from "@/lib/supabase";

export const insertText = async (userId: number, text: string) => {
  const { data, error } = await supabase
    .from("SummarizedText")
    .insert([{ userId, text }]);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

export const getText = async (userId: number) => {
  const { data, error } = await supabase
    .from("SummarizedText")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};
