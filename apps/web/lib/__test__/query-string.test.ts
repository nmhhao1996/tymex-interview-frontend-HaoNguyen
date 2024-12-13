import { parse, stringify } from "../query-string";

describe("query-string", () => {
  describe("parse", () => {
    it("should parse search params into an object", () => {
      const searchParams = new URLSearchParams("key1=value1&key2=value2");
      const result = parse(searchParams);
      expect(result).toEqual({ key1: "value1", key2: "value2" });
    });

    it("should handle empty search params", () => {
      const searchParams = new URLSearchParams("");
      const result = parse(searchParams);
      expect(result).toEqual({});
    });

    it("should handle search params with empty values", () => {
      const searchParams = new URLSearchParams("key1=&key2=value2");
      const result = parse(searchParams);
      expect(result).toEqual({ key1: "", key2: "value2" });
    });
  });

  describe("stringify", () => {
    it("should stringify an object into search params", () => {
      const query = { key1: "value1", key2: "value2" };
      const result = stringify(query);
      expect(result).toBe("key1=value1&key2=value2");
    });

    it("should handle empty object", () => {
      const query = {};
      const result = stringify(query);
      expect(result).toBe("");
    });

    it("should skip keys with undefined or null values", () => {
      const query = { key1: "value1", key2: undefined, key3: null };
      const result = stringify(query);
      expect(result).toBe("key1=value1");
    });

    it("should convert non-string values to strings", () => {
      const query = { key1: 123, key2: true, key3: false };
      const result = stringify(query);
      expect(result).toBe("key1=123&key2=true&key3=false");
    });
  });
});
