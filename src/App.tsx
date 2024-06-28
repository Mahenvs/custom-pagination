import { useEffect, useState } from "react";
import "./App.css";
import ViewProduct from "./ViewProduct";
import { fetchProducts } from "./Utils/fetchProducts";

function App() {
  const [currentPage, setPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [products, setProducts] = useState([]);

  const fetchProd = async () => {

    const data = await fetchProducts(currentPage);
    setProducts(data.products);
    if (selectedPage > 10) {
      setTotalPages(selectedPage + 1);
    }
  };
  const skipHandler = (i) => {
    setPage((i - 1) * 4);
    setSelectedPage(i);
  };
  useEffect(() => {
    fetchProd();
  }, [currentPage]);
  const startPage = Math.floor((selectedPage - 1) / 10) * 10 + 1;
  
  const endPage = Math.min(startPage + 9, totalPages);
  
  return (
    <div className="container">
      <h1>Products List</h1>
      <div>
        {products?.map((item) => (
          <ViewProduct product={item} />
        ))}
      </div>
      <div className="pagination">
        <span className="pointer" onClick={() => skipHandler(selectedPage - 1)}>
          Prev
        </span>
        <span className="pagination_num">
          {[...Array(endPage - startPage + 1)]?.map((_, i) => (
            <span
              style={{
                backgroundColor: selectedPage === startPage + i ? "green" : "",
              }}
              onClick={() => skipHandler(startPage + i)}
            >
              {startPage + i}
            </span>
          ))}
        </span>
        <span className="pointer" onClick={() => skipHandler(selectedPage + 1)}>
          Next
        </span>
      </div>
    </div>
  );
}

export default App;
