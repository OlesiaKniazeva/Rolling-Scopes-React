import CardList from "../card-list/CardList";
import { useLoaderData, Await, useNavigation } from "react-router-dom";
import { Suspense } from "react";

import styles from "./Results.module.css";
import Loader from "../loader/Loader";
import Main from "../main/Main";

function Results() {
  const { booksGetter, searchTerm } = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={booksGetter}>
        {(books) => (
          <Main>
            <h2 className={styles.title}>
              {searchTerm !== "" ? `Results for "${searchTerm}":` : `Results:`}
            </h2>
            <div className={styles.content}>
              {books.length > 0 ? (
                <CardList data={books} />
              ) : (
                <p>No results found</p>
              )}
            </div>
          </Main>
        )}
      </Await>
    </Suspense>
  );
}

export default Results;
