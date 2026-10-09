import knowledge from "./knowledge.json";
import { buildIndex, retrieve } from "./retrieve";

const index = buildIndex(knowledge);
const titles = (q) => retrieve(index, q).map((c) => `${c.section}: ${c.title}`);

test("recruiter questions land on the right part of the site", () => {
  expect(titles("What does he do at AT&T?").join(" ")).toMatch(/AT&T/);
  expect(titles("Has he published any papers?").join(" ")).toMatch(/LIMA|IEEE|Publication/i);
  expect(titles("Where did he study and what was his GPA?").join(" ")).toMatch(/Education|University/i);
  expect(titles("Tell me about EvilTrace").join(" ")).toMatch(/EvilTrace/i);
  expect(titles("Does he have any certifications?").join(" ")).toMatch(/Certificate/i);
});

test("context stays small and empty questions fetch nothing", () => {
  const chunks = retrieve(index, "AI security agentic LLM penetration testing research experience");
  expect(chunks.length).toBeLessThanOrEqual(5);
  expect(chunks.reduce((n, c) => n + c.text.length, 0)).toBeLessThanOrEqual(3200);
  expect(retrieve(index, "hi, how are you?")).toEqual([]);
});
