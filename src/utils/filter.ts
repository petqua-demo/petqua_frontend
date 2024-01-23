export const categoryFilter = (id: string): string => {
  switch (id) {
    case "all":
      return "전체";
    case "disease":
      return "질병";
    case "filter":
      return "여과/수질";
    case "breeding":
      return "사육/번식";
    case "goods":
      return "용품/사료";
    case "species":
      return "어종";
    case "board":
      return "자유게시판";
    case "column":
      return "전문가 칼럼";
    default:
      return "몰라";
  }
};
