export const dateToHourConverter = (date: string) => {
  const dateConverter = new Date(date).getHours();
  return dateConverter;
};
