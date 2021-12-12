import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-t-2 h-20 py-4 px-6 md:px-14 space-y-8 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center md:space-y-0 space-y-2">
        <div className="relative w-36 h-10">
          <Image src="/websiteSVGname.svg" alt="" layout="fill" />
        </div>
        <p className="text-gray-400">
          Copyright © 2021 wikiflare All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-2/5 text-gray-500 md:space-y-0 space-y-3">
        <div className="flex space-x-6">
          <FaTwitterSquare className="w-6 h-6" />
          <FaFacebookSquare className="w-6 h-6" />
          <FaInstagramSquare className="w-6 h-6" />
          <MdEmail className="w-6 h-6" />
        </div>
        <div className="w-64 md:w-auto flex items-center space-x-3 md:space-x-0 hover:text-gray-800 font-semibold font-macan">
          <Link href="/privacy">
            <a className="p-2 px-3 hover:bg-gray-100 rounded-full">
              Privacy Policy
            </a>
          </Link>
          <Link href="/contact">
            <a className="p-2 px-3 hover:bg-gray-100 rounded-full">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
