"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarIcon, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogCard({
  slug,
  title,
  date,
  summary,
  image = "/images/blog-placeholder.jpg",
}: {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition group"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6 space-y-3">
          <h3 className="text-lg font-semibold text-blue-800 group-hover:underline">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <p className="text-sm text-gray-700 leading-snug line-clamp-3">
            {summary}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-blue-600 mt-2 hover:underline">
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
