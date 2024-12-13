export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  const dateParts = formattedDate.split(", ");
  const dateStr = dateParts[0];
  const timeStr = dateParts[1];

  return `${dateStr} • ${timeStr}`;
};
