import z from "zod";

export const DEGREE = [
  "undergraduate",
  "graduate",
  "postdoc",
  "phD",
  "professor",
] as const;

export const AREA_OF_EXPERTISE = [
  "physics",
  "chemistry",
  "biology",
  "computer science",
  "biomedical engineering",
  "electrical engineering",
  "mechanical engineering",
  "civil engineering",
  "environmental science",
  "mathematics",
  "statistics",
  "materials science",
  "astronomy",
] as const;

export const LANGUAGES = [
  "english",
  "spanish",
  "french",
  "chinese",
  "tagalog",
  "vietnamese",
  "german",
  "korean",
  "russian",
  "italian",
  "arabic",
  "portuguese",
  "polish",
  "japanese",
] as const;

export const TIMEZONES = [
  // "All Timezones",
  "PST",
  "MST",
  "CST",
  "EST",
  "AST",
  "NST",
  "HST",
  "AKST",
] as const;

const timezoneSchema = z.enum(TIMEZONES);
const languageSchema = z.enum(LANGUAGES);
const degreeSchema = z.enum(DEGREE);
const areaOfExpertiseSchema = z.enum(AREA_OF_EXPERTISE);

export const SearchFilterSchema = z.object({
  degree: z.array(degreeSchema).optional(),
  industry_workplace: z.array(areaOfExpertiseSchema).optional(),
  languages: z.array(languageSchema).optional(),
  timezone: z.array(timezoneSchema).optional(),
  search_string: z.string().optional(),
});
