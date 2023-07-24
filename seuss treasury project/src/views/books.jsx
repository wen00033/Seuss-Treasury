import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    axios
      .get("https://seussology.info/api/books/" + params.id)
      .then((res) =>
        setDetail({
          id: res.data.id,
          image: res.data.image,
          title: res.data.title,
          sort: res.data.title_sort,
          year: res.data.year_published,
          description: res.data.description,
        })
      )
      .catch(() => navigate("/"));
  }, []);

  return (
    <div className="p-4 grid  sm:grid-cols-2 gap-3 bg-slate-300  w-screen">
      <div className="container ">
        <img className=" object-cover" src={detail.image} alt="image" />
        <h1 className=" text-center text-lg my-2 py-3 font-black bg-red-500  text-white bg-gradient-to-tl">
          {detail.title}
        </h1>
      </div>
      <div className="description flex flex-col justify-center bg-cover">
        <span
          className=" italic text-xs border-red-500 border px-1 py-2
        "
        >
          {detail.sort}
        </span>
        <h2 className="font-extrabold italic px-4 py-2 inline-block my-3 bg-red-400">
          Year:{detail.year}
        </h2>
        <p className=" text-justify  p-2 bg-red-200">
          Description: {detail.description}
        </p>
      </div>
    </div>
  );
}

export default Books;
