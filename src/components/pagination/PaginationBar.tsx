import styles from "./PaginationBar.module.css";
import { NavLink, useSearchParams } from "react-router-dom";
function PaginationBar() {
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1");
  const searchTerm = searchParams.get("q") || "";

  return (
    <nav className={styles.paginationBar}>
      <NavLink to={`/search?page=${currentPage - 1}q=${searchTerm}`}>
        {<button disabled={currentPage === 1}>Previous</button>}
      </NavLink>
      <NavLink to={`/search?page=${currentPage + 1}q=${searchTerm}`}>
        {<button>Next</button>}
      </NavLink>
    </nav>
  );
}

export default PaginationBar;
