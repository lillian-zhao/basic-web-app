export default function QueryProcessor(query: string): string {
  const q = query.toLowerCase().trim();

  // Static examples you already have
  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (q.includes("name")) {
    return "lillianz1";
  }

  if (q.includes("andrew")) {
    return "lillianz";
  }

  // ---------- Dynamic Handling Starts Below ----------

  // Handle addition: "what is 93 plus 78"
  if (q.includes("plus")) {
    const match = q.match(/(\d+)\s*plus\s*(\d+)/);
    if (match) {
      const a = parseFloat(match[1]);
      const b = parseFloat(match[2]);
      return String(a + b);
    }
  }

  // Handle subtraction: "what is 80 minus 30"
  if (q.includes("minus")) {
    const match = q.match(/(\d+)\s*minus\s*(\d+)/);
    if (match) {
      const a = parseFloat(match[1]);
      const b = parseFloat(match[2]);
      return String(a - b);
    }
  }

  // Handle multiplication: "what is 6 times 8" or "multiplied by"
  if (q.includes("times") || q.includes("multiplied by")) {
    const match = q.match(/(\d+)\s*(?:times|multiplied by)\s*(\d+)/);
    if (match) {
      const a = parseFloat(match[1]);
      const b = parseFloat(match[2]);
      return String(a * b);
    }
  }

  // Handle division: "what is 10 divided by 2"
  if (q.includes("divided by")) {
    const match = q.match(/(\d+)\s*divided by\s*(\d+)/);
    if (match) {
      const a = parseFloat(match[1]);
      const b = parseFloat(match[2]);
      if (b === 0) return "undefined";
      return String(a / b);
    }
  }

  // Handle "largest" number question
  if (q.includes("largest")) {
    const nums = q.match(/\d+/g);
    if (nums && nums.length > 0) {
      const max = Math.max(...nums.map(Number));
      return String(max);
    }
  }

  // Handle "smallest" number question
  if (q.includes("smallest")) {
    const nums = q.match(/\d+/g);
    if (nums && nums.length > 0) {
      const min = Math.min(...nums.map(Number));
      return String(min);
    }
  }

  // ---------- Default fallback ----------
  return "";
}
