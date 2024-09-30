import {
  FormatDistanceFnOptions,
  FormatDistanceToken,
  formatDistanceToNow,
  Locale,
} from "date-fns";
import { enUS } from "date-fns/locale";

const customLocale: Locale = {
  ...enUS,
  formatDistance: (
    token: FormatDistanceToken,
    count: number,
    options?: {
      addSuffix?: FormatDistanceFnOptions["addSuffix"];
      comparison?: FormatDistanceFnOptions["comparison"];
    }
  ) => {
    let result = enUS.formatDistance!(token, count, options);

    result = result.replace("about ", "");

    return result;
  },
};

export function getFormattedDate(date: Date) {
  return formatDistanceToNow(date, { addSuffix: true, locale: customLocale });
}
