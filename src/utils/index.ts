export const getPrevSearchParams = (
  searchParams: URLSearchParams,
): Record<string, string> | object =>
  [...searchParams.entries()].reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
