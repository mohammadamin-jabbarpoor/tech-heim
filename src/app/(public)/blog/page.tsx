import BlogVideoCard from "@/src/components/features/landing/blog/BlogVideoCard";
import LargeBlogCard from "@/src/components/features/landing/blog/LargeBlogCard";
import SmallBlogCard from "@/src/components/features/landing/blog/SmallBlogCard";
import ReviewsCard from "@/src/components/features/products/productPage/reviewsSection/ReviewsCard";

import Breadcrumb from "@/src/components/shared/ui/Breadcrumb";
import { largeBlogsInfo, smallBlogsInfo } from "@/src/lib/constants/blosInfo";
import { productReviews } from "@/src/lib/constants/productRevirews";

function BlogPage() {
  return (
    <div className="mt-4 lg:mt-6 mb-6 md:mb-10 lg:mb-14">
      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Blog",
            href: "/blog",
          },
        ]}
      />

      <div className="my-6 md:my-8 lg:my-10">
        <div className="w-full xl:flex xl:justify-between xl:gap-6">
          <div className="w-full min-w-0 xl:flex-[67%]">
            <div className="mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 justify-items-center xl:content-start">
              {largeBlogsInfo.map((info) => (
                <LargeBlogCard key={info.id} info={info} />
              ))}
            </div>
            <div className="mx-auto lg:mx-0 w-78 sm:w-full mt-6 mb-6 md:mb-9 md:mt-9 xl:mt-12">
              <h3 className="font-medium md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
                Recent Posts
              </h3>
              <div className="space-y-3 md:scroll-py-4.5 lg:space-y-6">
                {smallBlogsInfo.map((info) => (
                  <SmallBlogCard key={info.id} info={info} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-78 sm:w-full min-w-0 mx-auto lg:mx-0 xl:flex-[33%]">
            <h3 className="font-medium md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
              Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 lg:gap-6">
              {productReviews.map((video) => (
                <BlogVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
