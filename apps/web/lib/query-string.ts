export function parse(searchParams: URLSearchParams) {
  const query: Record<string, string> = {};
  for (const [key, value] of searchParams.entries()) {
    query[key] = value;
  }
  return query;
}

export function stringify(query: Record<string, unknown>) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (typeof value !== "boolean" && !value) {
      continue;
    }

    searchParams.set(key, value + "");
  }
  return searchParams.toString();
}

const qs = {
  parse,
  stringify,
};

export default qs;
