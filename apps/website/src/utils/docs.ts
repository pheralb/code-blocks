import type { Document } from "@content-collections/core";
import { getTableOfContents, type ToCItem } from "@/mdx/plugins/generateToC";

import {
  allGenerals,
  allGstarteds,
  allShikis,
  allReacts,
  allShighs,
  type Gstarted,
  type Shiki,
  type Shigh,
  type React,
} from "content-collections";

const allDocsArray = [
  ...allGstarteds,
  ...allShikis,
  ...allShighs,
  ...allReacts,
];

type Doc = Document &
  (Gstarted | Shiki | Shigh | React) & {
    tableOfContents: ToCItem[];
  };

interface GetDocument {
  folder: string;
  document: string;
}

const normalizePath = (path: string): string => {
  return path.replace(/\\/g, "/");
};

const allDocs = allDocsArray.filter(
  (doc, index, self) =>
    index ===
    self.findIndex(
      (d) => d.folder === doc.folder && d._meta.path === doc._meta.path,
    ),
);

const getDocument = ({ folder, document }: GetDocument): Doc | undefined => {
  const normalizedDocument = normalizePath(document);
  const doc = allDocs.find((doc) => {
    const normalizedPath = normalizePath(doc._meta.path);
    return doc.folder === folder && normalizedPath === normalizedDocument;
  });
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

const getGeneralDocument = (document: string): Doc | undefined => {
  const doc = allGenerals.find((doc) => doc._meta.path === document);
  if (!doc) {
    return undefined;
  }
  const tableOfContents = getTableOfContents(doc.content);
  return { ...doc, tableOfContents };
};

export {
  allDocs,
  normalizePath,
  getDocument,
  getDocsByFolder,
  getGeneralDocument,
};
