import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import SearchNav from "../search-nav/SearchNav";
import PaginationBar from "../pagination/PaginationBar";

export default function Layout() {
  return (
    <>
      <Header />
      <SearchNav />
      <Outlet />
      <PaginationBar />
      <Footer />
    </>
  );
}
