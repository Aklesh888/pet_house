import React from "react";
import BlogsCard from "./BlogsCard";
import blog_1 from '../../assets/blog_1.png'
import blog_2 from '../../assets/blog_2.png'
import blog_3 from '../../assets/blog_3.png'

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-4">
      <div className="text-5xl font-bold py-4">Blogs</div>
      <div className="flex items-center justify-center text-left my-10 flex-wrap">
        <BlogsCard
          image={blog_1}
          title="How to choose right bully stick for your dog"
          description="Smile spoke total few great had never their too. Amongst moments do in arrived at my replied.
           Fat weddings servants but man believed prospect. Companions understood is as especially pianoforte connection introduced. "
        />
        <BlogsCard
          image={blog_2}
          title="How to choose right bully stick for your dog"
          description="Smile spoke total few great had never their too. Amongst moments do in arrived at my replied.
           Fat weddings servants but man believed prospect. Companions understood is as especially pianoforte connection introduced. "
        />
        <BlogsCard
          image={blog_3}
          title="How to choose right bully stick for your dog"
          description="Smile spoke total few great had never their too. Amongst moments do in arrived at my replied.
           Fat weddings servants but man believed prospect. Companions understood is as especially pianoforte connection introduced. "
        />
      </div>
    </div>
  );
};

export default Blogs;
