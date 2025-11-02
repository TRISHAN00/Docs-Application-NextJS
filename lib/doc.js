import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  const fileName = fs.readdirSync(postsDirectory);

  const allDocuments = fileName.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const mattercontent = matter(fileContents);

    return {
      id,
      ...mattercontent.data,
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }

    if (a.order > b.order) {
      return 1;
    }

    return 0;
  });
}
