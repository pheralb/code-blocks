import type { Document } from "@content-collections/core";
import {
  allGenerals,
  type General,
  allShikis,
  type Shiki,
} from "content-collections";

const allDocs = [...allGenerals, ...allShikis];

type Doc = Document & (General | Shiki);

interface GetAllDocs {
  category: string;
  documents: Doc[];
}

export const getAllDocs = (): GetAllDocs[] => {
  const categoriesMap: Record<string, Doc[]> = {};
  allDocs.forEach((doc) => {
    if (!categoriesMap[doc.category]) {
      categoriesMap[doc.category] = [];
    }
    categoriesMap[doc.category].push(doc);
  });
  return Object.entries(categoriesMap).map(([category, documents]) => ({
    category,
    documents,
  }));
};

export const getDocument = (documentPath: string): Doc | undefined => {
  return allDocs.find((doc) => doc._meta.path === documentPath);
};
