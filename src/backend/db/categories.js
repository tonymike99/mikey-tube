import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "Cute Puppies",
    description: "Who doesn't like those cute and playful munchkins!",
    imageUrl: require("../../assets/images/1.png").default,
  },
  {
    _id: uuid(),
    name: "RCB Parody Conferences",
    description: "When RCB lose, it is Mr.Nags who makes us laugh!",
    imageUrl: require("../../assets/images/2.png").default,
  },
  {
    _id: uuid(),
    name: "Manchester United",
    description:
      "Highlights of the worse team (at present) in EPL, Manchester United!",
    imageUrl: require("../../assets/images/3.png").default,
  },
  {
    _id: uuid(),
    name: "Champions League",
    description: "Highlights of the champions league matches!",
    imageUrl: require("../../assets/images/4.png").default,
  },
];
