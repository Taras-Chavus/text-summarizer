export const countWords = (text: string): number => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
};

export const countCharacters = (text: string): number => {
  return text.length;
};
