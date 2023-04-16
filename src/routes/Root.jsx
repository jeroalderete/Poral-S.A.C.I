import Home from "../pages/Home/Home";
import { useParams } from "react-router-dom";
import "./App.css";

//asdas

function Root() {
  const params = useParams();
  const CategoryRoute = Boolean(params.id);

  return (
    <div className="App">
      <Home
        subtitle="Fashion Design & Home Wear"
        CategoryRoute={CategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;
