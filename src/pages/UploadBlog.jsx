import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function UploadBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("foundations");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !category || !title || !description) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("file", file); // MUST be `file`

      await api.post("/api/admin/blog", formData);

      alert("Blog uploaded successfully ✅");
      navigate("/blog");
    } catch (err) {
      alert(err.response?.data?.message || "Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
          Upload New Blog
        </h2>

        {/* TITLE */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-slate-700">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-slate-700">
            Blog Description
          </label>
          <textarea
            placeholder="Short description of the blog"
            className="w-full p-3 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-slate-800"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* CATEGORY */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-slate-700">
            Category
          </label>
          <select
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="foundations">Foundations</option>
            <option value="deep">Deep Dive</option>
          </select>
        </div>

        {/* FILE */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-slate-700">
            Upload File (PDF / DOC)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg transition"
          >
            {loading ? "Uploading..." : "Upload Blog"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="flex-1 border border-slate-400 text-slate-700 py-3 rounded-lg hover:bg-slate-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
