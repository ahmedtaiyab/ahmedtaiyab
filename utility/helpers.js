import fs from "fs";
import matter from "gray-matter";

export function fetchFilesFromDirectory(directory) {
  const filesInDirectory = fs.readdirSync(directory);

  const fileData = filesInDirectory.map((filename) => {
    const file = fs.readFileSync(`${directory}/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return fileData;
}

export function countPosts() {
  return fetchFilesFromDirectory(directory).length;
}

export function listPostContent(page, limit, directory) {
  return fetchFilesFromDirectory(directory).slice(
    (page - 1) * limit,
    page * limit
  );
}
