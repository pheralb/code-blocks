import type { Document } from "@content-collections/core";
import { getTableOfContents, type ToCItem } from "@/mdx/plugins/generateToC";

import {
  allGenerals,
  allGstarteds,
  allShikis,
  allComponents,
  allShighs,
  type General,
  type Gstarted,
  type Shiki,
  type Shigh,
  type Component,
} from "content-collections";

const allDocs = [
  ...allGenerals,
  ...allGstarteds,
  ...allShikis,
  ...allShighs,
  ...allComponents,
];

type Doc = Document &
  (General | Gstarted | Shiki | Shigh | Component) & {
    tableOfContents: ToCItem[];
  };

interface GetDocument {
  folder: string;
  document: string;
}

const getDocument = ({ folder, document }: GetDocument): Doc | undefined => {
  const doc = allDocs.find(
    (doc) => doc.folder === folder && doc._meta.path === document,
  );
  if (!doc) {
    return undefined;
  }
  const tableOfContents = getTableOfContents(doc.content);
  return { ...doc, tableOfContents };
};

export { getDocument };
