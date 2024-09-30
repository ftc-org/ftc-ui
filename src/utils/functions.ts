export const truncateString = (str: string, maxlength: number) => {
  return str?.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
};
