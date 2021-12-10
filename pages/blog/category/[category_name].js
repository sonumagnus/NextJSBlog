import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import CategoryList from "@/components/CategoryList";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getPost } from "@/lib/posts";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl border-b-2 py-5 font-bold text-gray-600">
            Posts in {categoryName}:
          </h1>

          <div className="grid grid-cols-1 md:gap-y-10 my-1 py-5">
            {posts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </div>
          
        </div>
        <div className="hidden md:block flex-1">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  // const files = fs.readdirSync(path.join("posts"));

  const posts = getPost();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
