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

const allDocsArray = [
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

const allDocs = allDocsArray.filter(
  (doc, index, self) =>
    index ===
    self.findIndex(
      (d) => d.folder === doc.folder && d._meta.path === doc._meta.path,
    ),
);

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

const getDocsByFolder = () => {
  return allDocs.reduce(
    (acc, doc) => {
      const folderName =
        doc.folder.charAt(0).toUpperCase() + doc.folder.slice(1);
      if (!acc[folderName]) {
        acc[folderName] = [];
      }
      const tableOfContents = getTableOfContents(doc.content);
      acc[folderName].push({ ...doc, tableOfContents });
      return acc;
    },
    {} as Record<string, Doc[]>,
  );
};

const getDocumentContent = ({
  folder,
  document,
}: GetDocument): string | undefined => {
  const doc = allDocs.find(
    (doc) => doc.folder === folder && doc._meta.path === document,
  );
  return doc ? doc.mdx : undefined;
};

export { getDocument, getDocsByFolder, getDocumentContent };
