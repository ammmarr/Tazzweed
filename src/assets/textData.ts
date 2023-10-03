import p1 from "./images/p1.jfif";
import p2 from "./images/p2.jfif";
import p3 from "./images/p3.jfif";
import p4 from "./images/p4.jfif";
import p5 from "./images/p5.jfif";
import p6 from "./images/p6.jfif";
import p7 from "./images/p7.jfif";
import p8 from "./images/p8.jfif";
import p9 from "./images/p9.jfif";
import p10 from "./images/p10.jfif";
import p11 from "./images/p11.jfif";
import p12 from "./images/p12.jfif";

export interface TextData {
  text: string;
  img: any;
}
const textData: TextData[] = [
  {
    text: "Can you find a reliable supplier for bulk office stationery at competitive prices?",
    img: p1,
  },
  {
    text: "I need assistance in sourcing raw materials for our manufacturing process. Can you help us find suitable suppliers?",
    img: p2,
  },
  {
    text: "We're looking for a supplier of eco-friendly packaging materials. Can you provide us with options?",
    img: p3,
  },
  {
    text: "Can you help us locate a reputable electronics distributor for our upcoming product launch?",
    img: p4,
  },
  {
    text: "We're interested in purchasing custom-branded merchandise for our company's promotional events. Can you find suppliers for this?",
    img: p5,
  },
  {
    text: "Do you have access to suppliers who can provide high-quality IT equipment for our office upgrade?",
    img: p6,
  },
  {
    text: "We're in need of a reliable food supplier for our restaurant. Can you recommend options with competitive pricing?",
    img: p7,
  },

  {
    text: "Can you assist us in sourcing industrial machinery for our new manufacturing facility?",
    img: p8,
  },

  {
    text: "We're looking for a clothing manufacturer to produce our fashion line. Do you have any recommendations?",
    img: p9,
  },

  {
    text: "Could you find us a vendor that specializes in eco-friendly cleaning products for our hospitality business?",
    img: p10,
  },

  {
    text: " We need a supplier for specialized medical equipment. Can you help us find one with reasonable rates?",
    img: p11,
  },
  {
    text: "Do you have access to suppliers of sustainable building materials for our construction project?",
    img: p12,
  },
];
export default textData;
