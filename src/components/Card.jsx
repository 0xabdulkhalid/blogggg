import { Link } from "react-router-dom";
import { Edit, Trash2 } from "react-feather";

export default function Card({
  date,
  title,
  description,
  cover,
  id,
  showOptions,
  editPost,
  deletePost,
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-xl relative pb-6 mx-auto outline-1 outline bg-gray-50 outline-gray-400 md:max-w-96 lg:max-w-md">
      <div className="p-3 flex items-center justify-between border-b border-b-gray-400">
        <p className={showOptions ? "text-sm" : "text-xs"}>{formattedDate}</p>

        {showOptions && (
          <div className="flex gap-3">
            <button
              aria-label="Edit Post"
              title="Edit Post"
              onClick={() => editPost(id)}
              className="outline outline-1 transition-[background,transform] outline-indigo-300 bg-indigo-100 rounded p-2 hover:bg-indigo-200 hover:outline-indigo-400 hover:scale-110 active:scale-90 disabled:pointer-events-none"
            >
              <Edit strokeWidth={1.5} width={20} height={20} />
            </button>
            <button
              aria-label="Delete Post"
              title="Delete Post"
              onClick={() => deletePost(id)}
              className="outline outline-1 transition-[background,transform] outline-red-300 bg-red-100 rounded-md p-2 hover:bg-red-200 hover:outline-red-400 hover:scale-110 active:scale-90 disabled:pointer-events-none"
            >
              <Trash2 strokeWidth={1.5} width={20} height={20} />
            </button>
          </div>
        )}
      </div>
      <h2 className="heading text-2xl capitalize p-3 py-4">{title}</h2>
      <img className="h-36 w-full object-cover card" src={cover} alt="" />
      <p className="p-3">
        {description ||
          `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime placeat
        enim excepturi est voluptates! Error soluta nulla ipsam repudiandae illo
        architecto numquam obcaecati assumenda sapiente consequatur.`}
      </p>
      <Link
        className="w-max float-right absolute bottom-3 right-3 block text-right underline underline-offset-4"
        to={`/post/${id}`}
      >
        Read ---&gt;
      </Link>
    </div>
  );
}
