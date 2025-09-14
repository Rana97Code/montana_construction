import { useEffect } from "react";
import BlogPost from "../components/BlogPost";
import "aos/dist/aos.css";
import AOS from "aos";
import Announce from "../components/Announce";
import ParticlesBackground from "../components/ParticlesBackground";
import DynamicPageTitle from "../utils/DynamicPageTitle";
import ManagingDirector from "../components/ManagingDirector";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <DynamicPageTitle
        pageTitle="Services"
        pageContent="Mohanta Construction"
        pageURL="https://www.Mohanta Construction.com/blog"
      />
      <ManagingDirector />

      <div className="relative bg-black h-[600px]">
        <div className="relative h-auto">
          <ParticlesBackground />
          <div className="relative z-10">
            <Announce />
          </div>
        </div>
      </div>
      <BlogPost />
    </>
  );
};

export default Blog;
