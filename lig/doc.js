import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  console.log(postsDirectory);
  const fileName = fs.readdirSync(postsDirectory);
  console.log(fileName);

  const allDocuments = fileName.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const mattercontent = matter(fileContents);
    console.log(mattercontent);
  });
}
