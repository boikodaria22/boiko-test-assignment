export const useFormatPhone = (phone: string): string => {
  return phone?.length ? phone.replace(/[.-]/g, " ") : "";
};
