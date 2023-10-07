import { useRef, useEffect } from "react";

export const SECTION_LIST_MOCK_DATA = [
  {
    title: "Appetizers",
    data: [
      {
        id: "1",
        title: "Pasta",
        price: "10",
      },
      {
        id: "3",
        title: "Pizza",
        price: "8",
      },
    ],
  },
  {
    title: "Salads",
    data: [
      {
        id: "2",
        title: "Caesar",
        price: "2",
      },
      {
        id: "4",
        title: "Greek",
        price: "3",
      },
    ],
  },
];

export function getSectionListData(data) {
  /**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference

//   // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
//   // The title of each section should be the category.
//   // The data property should contain an array of menu items.
//   // Each item has the following properties: "id", "title" and "price"
**/

  console.log("Data received for transformation:", data);
  const sections = {};

  data.forEach((item) => {
    if (!item.category) {
      // Skip items without a valid category or uuid
      console.log("Skipping item:", item);
      return;
    }

    const category = item.category;

    if (!sections[category]) {
      sections[category] = [];
    }

    sections[category].push({
      id: item.uuid,
      title: item.title,
      price: item.price,
    });
  });

  const sectionListData = Object.keys(sections).map((category) => ({
    title: category,
    data: sections[category],
  }));

  return sectionListData;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
