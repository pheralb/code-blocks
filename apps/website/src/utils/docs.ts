import type { Document } from "@content-collections/core";
import {
  allGenerals,
  allGstarteds,
  allShikis,
  allComponents,
  type General,
  type Gstarted,
  type Shiki,
  type Component,
} from "content-collections";

const allDocs = [
  ...allGenerals,
  ...allGstarteds,
  ...allShikis,
  ...allComponents,
];

type Doc = Document & (General | Gstarted | Shiki | Component);

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
  return doc;
};

export { getDocument };
