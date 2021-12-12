import Link from "next/link";
import Layout from "@/components/Layout";
import NewsPost from "@/components/NewsPost.js";
import BlogPost from "@/components/BlogPost";
import { getPost } from "@/lib/posts";
import CategoryList from "@/components/CategoryList";
import ModelTitle from "@/components/ModelTitle";

export default function HomePage({ posts, categories }) {
  return (
    <Layout categories={categories}>
      <ModelTitle title="Popular Posts" textColor="yellow" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-y-10 py-8 border-b">
        {posts.map((post, index) => (
          <NewsPost key={index} post={post} index={index} />
        ))}
      </div>
      <div className="flex">
        <div>
          <ModelTitle title='Latest Articles' />
          <div className="grid grid-cols-1 gap-y-10 py-8">
            {posts.map((post, index) => (
              <BlogPost key={index} post={post} index={index} />
            ))}
            <Link href="/blog">
              <button className="px-3 py-2 border hover:text-gray-600 border-red-600 hover:bg-gray-100">
                Read All Blogs
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPost();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];
  return {
    props: {
      posts: getPost().slice(0, 6),
      categories: uniqueCategories,
    },
  };
}
