export function parse(searchParams: URLSearchParams) { 
  const query: Record<string, string> = {};
  for (const [key, value] of searchParams.entries()) {
    query[key] = value;
  }
  return query;
}

export function stringify(query: Record<string, any>) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (!value) {
      continue;
    }

    searchParams.set(key, value + "");
  }
  return searchParams.toString();
}

export default {
  parse,
  stringify,
};
