import Link from "next/link";
import Image from "next/image";
import { authImgLink } from "@/lib/AuthImgLink";

export default function NewsPost({ post, index }) {
  return (
    <div className="flex font-sohne ">
      <span className="text-3xl font-bold text-gray-300 mr-4">
        0{index + 1}
      </span>
      <div>
        <div className="flex font-medium text-[13px] ">
          <Image
            src={`/images/author_image/${authImgLink(
              post.frontmatter.author
            )}.jpg`}
            alt="image"
            height={20}
            width={20}
            className="rounded-full"
          />
          <h3 className="ml-2">{post.frontmatter.author}</h3>
          <p className="mx-0.5 text-gray-500">in</p>
          <Link
            href={`/blog/category/${post.frontmatter.category.toLowerCase()}`}
          >
            <a>
              <h3>{post.frontmatter.category}</h3>
            </a>
          </Link>
        </div>
        <div>
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h1 className="font-bold line-clamp-2 my-2">
                {post.frontmatter.title}
              </h1>
              <p className="text-[13px] text-gray-500 flex">
                {post.frontmatter.date}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
