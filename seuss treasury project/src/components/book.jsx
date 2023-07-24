import { Link } from "react-router-dom";

function Book(props) {
  const bookData = {
    id: props.data.id,
    image: props.data.image,
  };

  return (
    <Link to={"/books/" + bookData.id}>
      <img className=" self-center" src={bookData.image} alt="book" />
    </Link>
  );
}

export default Book;
