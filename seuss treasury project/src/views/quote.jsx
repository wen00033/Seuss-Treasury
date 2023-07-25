import axios from "axios";
import { useState, useEffect } from "react";
import Sentence from "../components/sentence";

function Quote() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    axios
      .get("https://seussology.info/api/quotes/random/10")
      .then((res) => setQuote(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-screen bg-slate-300 gap-2 p-3  h-screen">
      {quote.map((el) => (
        <Sentence props={el} key={el.id} />
      ))}
    </div>
  );
}

export default Quote;
