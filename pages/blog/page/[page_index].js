import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import BlogPost from "@/components/BlogPost";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPost } from "@/lib/posts";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <h1 className="text-4xl border-b-2 py-5 font-bold text-gray-600">
            All Blog:
          </h1>

          <div className="grid grid-cols-1 gap-5 py-5">
            {posts.map((post, index) => (
              <BlogPost key={post} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
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

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPost();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
