async function fetchData(URL: string) {
  const FETCH_OBJECT_NAME = "docs";
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      console.error("Network response was not ok");
    }

    const data = await response.json();
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

function formatTheData(data: Array<DataObject>) {
  return data.map((obj) => {
    return {
      name: obj.title,
      id: obj._version_,
      description: createDescriptionData(obj),
    };
  });
}

export async function getData(searchTerm = "", limit = 20, offset = 0) {
  try {
    const BASE_URL = "http://openlibrary.org/search.json";
    let search_settings;
    if (searchTerm === "") {
      search_settings = `?q=book&limit=${limit}&offset=${offset}`;
    } else {
      search_settings = `?q=book&title=${searchTerm}&limit=${limit}&offset=${offset}`;
    }
    const SEARCH_URL = BASE_URL + search_settings;
    const result = await fetchData(SEARCH_URL);
    return formatTheData(result);
  } catch (error) {
    console.error("Problem with API!", error);
    throw error;
  }
}
