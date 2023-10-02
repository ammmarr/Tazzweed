import collab1 from "./images/collabs/collab1.png";
import collab2 from "./images/collabs/collab2.png";
import collab3 from "./images/collabs/collab3.png";
import collab4 from "./images/collabs/collab4.png";
import collab5 from "./images/collabs/collab5.png";
import collab6 from "./images/collabs/collab6.png";

export interface CollabBrandsData {
  img: any;
  alt?: string;
}
const collabBrandsData: CollabBrandsData[] = [
  {
    img: collab1,
  },
  {
    img: collab2,
  },
  {
    img: collab3,
  },
  {
    img: collab4,
  },
  {
    img: collab5,
  },
  {
    img: collab6,
  },
];
export default collabBrandsData;
