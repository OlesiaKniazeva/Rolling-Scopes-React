async function fetchData(url: string, query: string) {
  try {
    const fullUrl = `${url}?search=${encodeURIComponent(query)}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

type DataObject = {
  name: string;
  classification: string;
  language: string;
};

function formatDescription(obj: DataObject) {
  if (obj.language === "n/a") {
    return `${obj.name} is a ${obj.classification.toLowerCase()}.`;
  }

  return `${obj.name} is a ${obj.classification.toLowerCase()} speaking ${obj.language} language.`;
}

function formatTheData(data: Array<DataObject>) {
  return data.map((obj) => {
    return {
      name: obj.name,
      id: crypto.randomUUID().toString(),
      description: formatDescription(obj),
    };
  });
}

export async function getData(searchTerm = "") {
  try {
    const URL = "https://swapi.dev/api/species/";
    const result = await fetchData(URL, searchTerm);
    return formatTheData(result);
  } catch (error) {
    console.error("Problem with API!", error);
    throw error;
  }
}
