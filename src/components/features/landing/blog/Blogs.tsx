import Line from "@/src/components/shared/ui/Line";
import SectionHeader from "@/src/components/shared/ui/SectionHeader";
import { blogsInfo, moBlogsInfo } from "@/src/lib/constants/blosInfo";
import BlogFeaturedCard from "./BlogFeaturedCard";
import BlogCompactCard from "./BlogCompactCard";
import BlogCard from "./BlogCard";

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
