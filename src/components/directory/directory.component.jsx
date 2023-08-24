import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "G-Shock",
    imageUrl:
      "https://wristlab.lk/wp-content/uploads/2023/04/G1245.jpg-600x800.jpg",
    route: "shop/g-shock",
  },
  {
    id: 2,
    title: "Edifice",
    imageUrl:
      "https://wristlab.lk/wp-content/uploads/2023/04/EX438.jpg-600x800.jpg",
    route: "shop/edifice",
  },
  {
    id: 3,
    title: "Seiko",
    imageUrl:
      "https://wristlab.lk/wp-content/uploads/2023/08/SRPJ13J1.jpg-600x800.jpg",
    route: "shop/seiko",
  },
  {
    id: 4,
    title: "Citizen",
    imageUrl:
      "https://wristlab.lk/wp-content/uploads/2023/08/CA069088L.jpg-600x800.jpg",
    route: "shop/citizen",
  },
  {
    id: 5,
    title: "Vintage",
    imageUrl:
      "https://wristlab.lk/wp-content/uploads/2023/04/D217.jpg-600x800.jpg",
    route: "shop/lacoste",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
