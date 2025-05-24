export const formattedFullDate: string = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());

export const formattedYear: string = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
}).format(new Date());
