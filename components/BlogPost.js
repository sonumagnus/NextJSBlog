import Image from "next/image";
import Link from "next/link";
import { authImgLink } from "@/lib/AuthImgLink";

export default function BlogPost({ post, index, compact }) {
  return (
    <div className="flex justify-between items-center font-sohne">
      <div className="md:max-w-[448px] mr-5">
        <div className="flex text-[13px] font-medium mb-2">
          {!compact && (
            <Image
              src={`/images/author_image/${authImgLink(
                post.frontmatter.author
              )}.jpg`}
              alt="image"
              height={20}
              width={20}
              className="rounded-full"
            />
          )}
          <p className="ml-2">{post.frontmatter.author}</p>
          <p className="mx-0.5 text-gray-500">in</p>
          <p>{post.frontmatter.category}</p>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <div>
              <h2 className="md:text-xl font-bold line-clamp-2 leading-5 md:leading-7">
                {post.frontmatter.title}
              </h2>
              <span className="hidden md:block">
                <h3 className="text-base text-gray-500 line-clamp-2 mt-1">
                  {post.frontmatter.excerpt}
                </h3>
              </span>
            </div>
          </a>
        </Link>
        <div className="text-gray-500 mt-1.5">
          <p className="text-[13px]">{post.frontmatter.date}</p>
        </div>
      </div>
      {!compact && (
        <div className="min-w-[100px] min-h-[100px] rounded overflow-hidden md:w-[194px] md:h-32 relative">
          <Image
            src={`/images/post_images/${post.frontmatter.cover_image}.jpg`}
            alt="image"
            layout="fill"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
