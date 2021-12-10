import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { authImgLink } from "@/lib/AuthImgLink";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, excerpt },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <div className="max-w-[690px] m-auto font-sohne">
        <div className="my-2">
          <Link href={`/blog/category/${category.toLowerCase()}`} passHref>
            <a
              title={`Read More From ${category} Category`}
              className="truncate uppercase tracking-wider font-medium px-2 py-1 rounded-full border hover:bg-gray-100"
            >
              {category}
            </a>
          </Link>
        </div>
        <h1 className="text-[32px] text-gray-900 md:text-[46px] leading-10 md:leading-[56px] font-fell">
          {title}
        </h1>
        <h2 className="text-lg md:text-[22px] text-gray-500 mt-2.5 lg:mt-3.5">
          {excerpt}
        </h2>
        <div className="flex justify-between md:items-center flex-col-reverse md:flex-row my-7">
          <div className="flex mt-6 md:mt-0">
            <span className="h-12 w-12 relative">
              <Image
                src={`/images/author_image/${authImgLink(author)}.jpg`}
                alt=""
                layout="fill"
                className="rounded-full object-cover"
              />
            </span>
            <div className="ml-3">
              <p className="capitalize text-[14px] ">{author} </p>
              <p>{date} </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <FaTwitter className="w-[22px] h-[22px] text-gray-700" />
            <FaInstagramSquare className="w-[22px] h-[22px] text-gray-700" />
            <FaFacebookSquare className="w-[22px] h-[22px] text-gray-700" />
            <FaShareSquare className="w-[22px] h-[22px] text-gray-700" />
          </div>
        </div>
        <Image
          src={`/images/post_images/${cover_image}.jpg`}
          alt="cover"
          height={420}
          width={720}
          className="object-cover"
        />
        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          className="markdown-content"
        ></div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
