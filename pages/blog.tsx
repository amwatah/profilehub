import { Icon } from "@iconify/react";
import React from "react";
import BlogCard from "../components/ui/BlogCard";

const BlogPage = () => {
  return (
    <div className="">
      <h2>Blogs</h2>
      <section className=" blogs  grid gap- 2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <BlogCard
          blogTitle="FINDING SOFTWARE ENGINEERING JOBS IN KENYA"
          website="https://amwatah-obuya.blogspot.com/2022/10/finding-software-engineering-jobs-in.html"
          tags={["coding", "tech", "Web-dev"]}
          blogImage={
            <img
              src="https://www.smallrevolution.com/wp-content/uploads/2020/06/small-revolution-online-jobs-experience.jpg"
              className=" w-full h-full"
            />
          }
        />
        <BlogCard
          blogTitle="CHOOSING A DATABASE FOR YOUR PROJECT        "
          website="https://amwatah-obuya.blogspot.com/2022/10/choosing-database-for-your-project.html"
          tags={["databases", "coding", "Web-dev"]}
          blogImage={
            <img
              src="https://cdn.pixabay.com/photo/2017/02/27/12/17/big-data-2103091_960_720.png"
              className=" w-full h-full"
            />
          }
        />
        <BlogCard
          blogTitle="WHY SVELTE IS A PROMISING WEB FRAMEWORK"
          website="https://amwatah-obuya.blogspot.com/2022/10/why-svelte-is-promising-web-framework.html"
          blogImage={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png"
              className=" w-full h-full"
            />
          }
          tags={["coding", "tech", "Web-dev"]}
        />
      </section>
    </div>
  );
};

export default BlogPage;
