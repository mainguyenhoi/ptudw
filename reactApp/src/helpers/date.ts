import DateFnsUtils from '@date-io/date-fns';
import {DateFormatConstant} from '@constants';
const dateFns = new DateFnsUtils();

export const formatToVNDate = (date: Date) => dateFns.format(new Date(date), DateFormatConstant.VN_DATE) || '';

