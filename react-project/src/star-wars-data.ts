async function fetchStarWarsAnimalsData() {
  console.log("Here");
  try {
    const query = "https://stapi.co/api/v1/rest/animal/search?pageNumber=1";
    const response = await fetch(query);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error("Problem with API!", error);
    throw error;
  }
}

type Animal = {
  name: string;
  uid: string;
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
};

export async function getAnimals() {
  try {
    const result = await fetchStarWarsAnimalsData();
    return result.animals.map((animal: Animal) => {
      return {
        name: animal.name,
        id: animal.uid,
        description: getAnimalDescription(animal),
      };
    });
  } catch (error) {
    console.error("Problem with API!", error);
    throw error;
  }
}

const ANIMAL_TRAITS = {
  avian: "a bird",
  canine: "a dog-like animal",
  earthAnimal: "a land-dwelling animal",
  earthInsect: "an insect that lives on land",
  feline: "a cat-like animal",
};

function getAnimalDescription(animal: Animal) {
  const descriptions = [];

  if (animal.avian) descriptions.push(ANIMAL_TRAITS.avian);
  if (animal.canine) descriptions.push(ANIMAL_TRAITS.canine);
  if (animal.earthAnimal) descriptions.push(ANIMAL_TRAITS.earthAnimal);
  if (animal.earthInsect) descriptions.push(ANIMAL_TRAITS.earthInsect);
  if (animal.feline) descriptions.push(ANIMAL_TRAITS.feline);

  return descriptions.length > 0
    ? `This animal is ${descriptions.join(", ")}.`
    : "This animal has no specific traits defined.";
}
