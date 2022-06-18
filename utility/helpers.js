import fs from "fs";
import matter from "gray-matter";

let postCache = [];

function fetchPostContent(postsDirectory) {
  if (postCache?.length) {
    return postCache;
  }

  const filesInDirectory = fs.readdirSync(postsDirectory);

  postCache = filesInDirectory.map((filename) => {
    const file = fs.readFileSync(`${postsDirectory}/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return postCache;
}

export function countPosts() {
  return fetchPostContent(postsDirectory).length;
}

export function listPostContent(page, limit, postsDirectory) {
  return fetchPostContent(postsDirectory).slice(
    (page - 1) * limit,
    page * limit
  );
}
