import styles from "./PaginationBar.module.css";
import { NavLink, useSearchParams, useNavigation } from "react-router-dom";
function PaginationBar() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";

  const currentPage = parseInt(searchParams.get("page") || "1");
  const searchTerm = searchParams.get("q") || "";
  const totalPages = parseInt(localStorage.getItem("totalPages") || "1");

  return (
    <nav className={styles.paginationBar}>
      <NavLink to={`/search?page=${currentPage - 1}&q=${searchTerm}`}>
        {<button disabled={currentPage === 1 || isSubmitting}>Previous</button>}
      </NavLink>
      <NavLink to={`/search?page=${currentPage + 1}&q=${searchTerm}`}>
        {
          <button disabled={currentPage >= totalPages || isSubmitting}>
            Next
          </button>
        }
      </NavLink>
    </nav>
  );
}

export default PaginationBar;
