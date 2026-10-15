import Line from "@/src/components/shared/ui/Line";
import SectionHeader from "@/src/components/shared/ui/SectionHeader";
import SmallBlogCard from "./SmallBlogCard";
import LargeBlogCard from "./LargeBlogCard";
import { largeBlogsInfo, smallBlogsInfo } from "@/src/lib/constants/blosInfo";

function Blogs() {
  return (
    <section className="mt-6 xl:mt-12">
      <SectionHeader value="Our Blogs" />
      <Line />
      <div className="flex gap-6">
        <div className="hidden lg:block w-full">
          <LargeBlogCard info={largeBlogsInfo[0]} />
        </div>
        <div className="space-y-6">
          {smallBlogsInfo.slice(0, 2).map((info) => (
            <SmallBlogCard key={info.id} info={info} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
