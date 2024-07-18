const requestOptions: object = {
  method: "GET",
  redirect: "follow",
};

function savePagesAmount(numFound: number, limit: number) {
  const totalPages = Math.ceil(numFound / limit);

  localStorage.setItem("totalPages", String(totalPages));
}

async function fetchData(URL: string, limit: number) {
  const FETCH_OBJECT_NAME = "docs";
  try {
    const response = await fetch(URL, requestOptions);

    if (!response.ok) {
      console.error("Network response was not ok");
    }

    const data = await response.json();
    savePagesAmount(data.numFound, limit);
    return data[FETCH_OBJECT_NAME];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

type DataObject = {
  title: string;
  _version_: string;
  author_name?: string;
  cover_i?: string;
  ratings_average?: number;
  numberOfPages: number | null;
  number_of_pages_median?: number;
};

function createDescriptionData(obj: DataObject) {
  return {
    author: obj.author_name ? obj.author_name : null,
    cover: obj.cover_i
      ? `https://covers.openlibrary.org/b/id/${obj.cover_i}-M.jpg`
      : null,
    rating: obj.ratings_average ? obj.ratings_average : null,
    numberOfPages: obj.number_of_pages_median
      ? obj.number_of_pages_median
      : null,
  };
}

function formatTheData(data: DataObject[]) {
  return data.map((obj) => {
    return {
      name: obj.title,
      id: String(crypto.randomUUID()),
      description: createDescriptionData(obj),
    };
  });
}

export async function getBooks(searchTerm = "", page = 1, limit = 20) {
  try {
    const BASE_URL = "http://openlibrary.org/search.json";
    let search_settings;
    if (searchTerm === "") {
      search_settings = `?q=book&page=${page}&limit=${limit}`;
    } else {
      search_settings = `?title=${searchTerm}&page=${page}&limit=${limit}`;
    }
    const SEARCH_URL = BASE_URL + search_settings;
    const result = await fetchData(SEARCH_URL, limit);
    return formatTheData(result);
  } catch (error) {
    console.error("Problem with API!", error);
    throw error;
  }
}
