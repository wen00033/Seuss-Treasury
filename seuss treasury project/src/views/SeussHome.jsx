import axios from "axios";
import { useState, useEffect } from "react";
import Book from "../components/book";

function SeussHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://seussology.info/api/books")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="bg-slate-300 h-screen w-screen">
      <h1 className="text-center text-4xl p-3 font-black uppercase">
        Seuss Treasury{" "}
      </h1>

      <div className="  grid gap-4 mx-10 sm:grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {data.map((el) => (
          <Book key={el.id} data={el}></Book>
        ))}
      </div>
    </div>
  );
}

export default SeussHome;

{
  /* <label htmlFor="cars">Order:</label>
<select name="filter" id="categories">
  <option on value="year">
    Year
  </option>
  <option value="random">random</option>
</select> */
}
