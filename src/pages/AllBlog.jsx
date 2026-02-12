import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Twitter, Linkedin } from "lucide-react";
import api from "../utils/api";
import { motion } from "framer-motion";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/api/blogs?section=allblogs");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const shareTwitter = (blog) => {
    const url = `${window.location.origin}/allblogs/${blog._id}`;
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${blog.title}`,
      "_blank"
    );
  };

  const shareLinkedIn = (blog) => {
    const url = `${window.location.origin}/allblogs/${blog._id}`;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">All Blogs</h1>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog._id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2
                className="text-2xl font-semibold cursor-pointer hover:underline"
                onClick={() => navigate(`/allblogs/${blog._id}`)}
              >
                {blog.title}
              </h2>

              <p className="text-slate-600 mt-3">{blog.description}</p>

              <div className="flex justify-between mt-6 text-sm text-slate-500">
                <span>Uploaded by: {blog.uploadedBy}</span>

                <div className="flex gap-4">
                  <Twitter
                    size={20}
                    className="cursor-pointer"
                    onClick={() => shareTwitter(blog)}
                  />
                  <Linkedin
                    size={20}
                    className="cursor-pointer"
                    onClick={() => shareLinkedIn(blog)}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
