import { parseISO, format } from 'date-fns';

export const MyDate = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>;
};
