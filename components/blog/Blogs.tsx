import BlogFeaturedCard from "./BlogFeaturedCard";
import { BlogsInfo } from "@/app/types";
import BlogCompactCard from "./BlogCompactCard";
import BlogCard from "./BlogCard";
import SectionHeader from "../ui/SectionHeader";
import Line from "../ui/Line";

const blogsInfo: BlogsInfo = {
  featured: {
    id: crypto.randomUUID(),
    image: "/blogs/meta.svg",
    title: "Meta Platforms plans to release free software that",
    description:
      "The parent company of Facebook, Meta Platforms, is introducing software to help developers",
    date: {
      year: 2026,
      month: "August",
      day: 8,
    },
  },
  blogs: [
    {
      id: crypto.randomUUID(),
      image: "/blogs/headphone.svg",
      title: "8 Things You Probably Didn’t Know About Headphones",
      description:
        "Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.",
      date: {
        year: 2026,
        month: "March",
        day: 28,
      },
    },
    {
      id: crypto.randomUUID(),
      image: "/blogs/bitcoin.svg",
      title: "Analyzing the August 17th Bitcoin Price Drop",
      description:
        "On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled",
      date: {
        year: 2026,
        month: "August",
        day: 17,
      },
    },
  ],
};

const moBlogsInfo = [
  {
    id: crypto.randomUUID(),
    image: "/blogs/meta.svg",
    title: "Meta Platforms plans to release free software that",
    description:
      "The parent company of Facebook, Meta Platforms, is introducing software to help developers",
    date: {
      year: 2026,
      month: "August",
      day: 8,
    },
    time: 3,
  },
  {
    id: crypto.randomUUID(),
    image: "/blogs/headphone.svg",
    title: "8 Things You Probably Didn’t Know About Headphones",
    description:
      "Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.",
    date: {
      year: 2026,
      month: "March",
      day: 28,
    },
    time: 5,
  },
  {
    id: crypto.randomUUID(),
    image: "/blogs/bitcoin.svg",
    title: "Analyzing the August 17th Bitcoin Price Drop",
    description:
      "On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled",
    date: {
      year: 2026,
      month: "August",
      day: 17,
    },
    time: 4,
  },
];

function Blogs() {
  return (
    <section className="mt-12">
      <SectionHeader value="Our Blogs" />
      <Line />
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-6">
        <BlogFeaturedCard blogsInfo={blogsInfo} />
        {blogsInfo.blogs.map((blog) => (
          <BlogCompactCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex sm:hidden flex-col gap-4">
        {moBlogsInfo.map((info) => (
          <BlogCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
