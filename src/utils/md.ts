import matter from "gray-matter";
import path from "path";
import fs from "fs";

const root = process.cwd() + "/src/_static";

export async function getFiles(dataType?: string) {
  return fs.readdirSync(
    dataType ? path.join(root, dataType) : path.join(root),
    "utf-8"
  );
}

export async function getPostBySlug(slug: string, dataType?: string) {
  const source = fs.readFileSync(
    dataType
      ? path.join(root, dataType, `${slug}.md`)
      : path.join(root, `${slug}.md`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}

export async function getAllPostsWithFrontMatter(dataType?: string) {
  const files = await getMdFiles(dataType ? path.join(root, dataType) : root);

  // @ts-ignore
  return files.map((file) => {
    const source = fs.readFileSync(file.path, "utf8");
    const { data } = matter(source);

    return {
      frontMatter: data,
      slug: file.slug,
    };
  });
}

async function getMdFiles(
  directory: string
): Promise<{ path: string; slug: string }[]> {
  const entries = await fs.promises.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        const subFiles = await getMdFiles(entryPath);
        return subFiles;
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        return {
          path: entryPath,
          slug: entry.name.replace(".md", ""),
        };
      }
      return null;
    })
  );
  const flattenedFiles = files.filter((file) => file !== null).flat();
  if (flattenedFiles.length === 0) {
    return [{ path: "", slug: "" }];
  }
  return flattenedFiles;
}

async function collateCategories(dataType: string) {
  const files = fs.readdirSync(path.join(root, dataType));
  let allCategories = new Set<string>(); // to ensure only unique tags are added

  files.map((postSlug) => {
    const source = fs.readFileSync(path.join(root, dataType, postSlug), "utf8");
    const { data } = matter(source);
    data.categories.forEach((category: string) => {
      allCategories.add(category);
    });
  });
  return Array.from(allCategories);
}

export type CategoryOptions = {
  [key: string]: string[];
};

export async function getCategories(dataType: string) {
  const categories: CategoryOptions = {
    commands: await collateCategories("commands"),
    // books: await collateTags('books'),
  };
  return categories[dataType];
}

export function sortByOrder(data) {
  data.sort((a, b) => a.frontMatter.order - b.frontMatter.order);
  return data;
}
