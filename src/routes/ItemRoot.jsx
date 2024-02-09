import { useParams } from "react-router-dom";
import Home from "../pages/Home/Home";
import "./App.css";

const ItemRoot = () => {
  const params = useParams();

  return (
    <div className="App">
      <Home itemId={params.id} />
    </div>
  );
};

export default ItemRoot;
