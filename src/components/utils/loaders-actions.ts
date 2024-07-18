import { redirect, defer } from "react-router-dom";
import { getBooks } from "../../api/api-data";

export async function searchAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const searchTerm = String(formData.get("q")) || "";

  return redirect(`/search?page=1&q=${encodeURIComponent(searchTerm)}`);
}

export function resultsLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const searchTerm = url.searchParams.get("q") || "";

  return defer({
    booksGetter: getBooks(searchTerm, page),
    searchTerm,
  });
}
