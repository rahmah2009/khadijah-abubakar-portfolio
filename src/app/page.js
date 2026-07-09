// // import Image from "next/image";
// import HeroComp from "../components/HomeComponent/HeroComp";
// import RecentPostsComp from "../components/HomeComponent/RecentPostComp"
// import FeaturedWorksComp from "../components/HomeComponent/FeaturedWorkComp";

// export default function Home() {
//   return (
//     <section className="h-full flex flex-col items-center w-full gap-6">
//       <HeroComp />
//       <RecentPostsComp />
//       <FeaturedWorksComp />
//     </section>
//   );
// }


import HeroComp from "../components/HomeComponent/HeroComp";
import RecentPostsComp from "../components/HomeComponent/RecentPostComp";
import FeaturedWorksComp from "../components/HomeComponent/FeaturedWorkComp";

export default function Home() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center gap-12 pb-16 bg-gradient-to-b from-white via-[#F1EFFF] to-white selection:bg-[#6366F1]/20 selection:text-[#4F46E5]">
      
      <div className="w-full flex justify-center pt-6">
        <HeroComp />
      </div>
      
      <div className="w-full">
        <RecentPostsComp />
      </div>
      
      <div className="w-full flex justify-center px-4 sm:px-0">
        <FeaturedWorksComp />
      </div>

    </section>
  );
}