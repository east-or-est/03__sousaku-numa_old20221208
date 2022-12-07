import styles from './style.module.scss';
import { format, zonedTimeToUtc } from 'date-fns-tz';

interface DateProps {
  time: string;
}

function Date({ time }: DateProps) {
  const text = zonedTimeToUtc(time, 'Asia/Tokyo');
  const date = format(text, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'Asia/Tokyo' });
  return <time dateTime={date} className={styles.time}><span className='en'>{format(text, 'yyyy')}</span><span className='en'>{format(text, 'MM/dd')}</span></time>;
}

export default Date;