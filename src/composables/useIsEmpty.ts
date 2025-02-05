export const useIsEmpty = (
  obj: Record<string, unknown> | null | undefined
): boolean => {
  return !obj || Object.keys(obj).length === 0;
};
