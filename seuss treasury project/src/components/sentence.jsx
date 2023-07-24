function Sentence({ props }) {
  return (
    <div className=" bg-red-200 p-3 ">
      <h1 className="  text-center font-black text-md">
        Book Name: {props.book.title}{" "}
      </h1>
      <p className=" text-center italic">{props.text}</p>
    </div>
  );
}

export default Sentence;
