import uuid from "react-uuid";
import CategoriesTitle from "../CommunityPostingCategoriesTitle";
import images from "../Images";

const SpeciesPostingData = [
  {
    id: uuid(),
    category: CategoriesTitle.species,
    subCategory: "전체",
    title: "구피랑 베타랑 키우고 있습니다.",
    content:
      "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
    imgSrc: images.itemImageExample,
    date: "07/12",
    howLong: "2주전",
    comment: "129",
    heart: "9",
    scrap: "123",
  },
  {
    id: uuid(),
    category: CategoriesTitle.species,
    subCategory: "열대어",
    title: "구피랑 베타랑 키우고 있습니다.",
    content:
      "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
    imgSrc: images.itemImageExample,
    date: "07/12",
    howLong: "2주전",
    comment: "129",
    heart: "9",
    scrap: "123",
  },
  {
    id: uuid(),
    category: CategoriesTitle.species,
    subCategory: "열대어",
    title: "구피랑 베타랑 키우고 있습니다.",
    content:
      "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
    date: "07/12",
    howLong: "2주전",
    comment: "129",
    heart: "9",
    scrap: "123",
  },
  {
    id: uuid(),
    category: CategoriesTitle.species,
    subCategory: "해수어",
    title: "구피랑 베타랑 키우고 있습니다.",
    content:
      "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
    date: "07/12",
    howLong: "2주전",
    comment: "129",
    heart: "9",
    scrap: "123",
  },
];

export default SpeciesPostingData;
