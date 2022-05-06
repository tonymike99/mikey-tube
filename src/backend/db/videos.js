import { v4 as uuid } from "uuid";
import { categories } from "./categories";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

// export const videos = [
//   {
//     _id: "Wo5dMEP_BbI",
//     title: "Awesome Video about Coding",
//     description:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
//     creator: "Soham Shah",
//   },
//   {
//     _id: "F_Riqjdh2oM",
//     title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
//     creator: "Sentdex",
//     description:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
//   },
// ];

const urlData = [
  [
    "https://www.youtube.com/watch?v=HFYQMLIxhf4",
    "https://www.youtube.com/watch?v=qGcWwBVcjz8",
    "https://www.youtube.com/watch?v=59MdCHCZeeI",
    "https://www.youtube.com/watch?v=59MdCHCZeeI",
  ],
  [
    "https://www.youtube.com/watch?v=vnmSEvy6Hp4",
    "https://www.youtube.com/watch?v=PbWEWQf99vU",
    "https://www.youtube.com/watch?v=NZ2qaSMvHtg",
    "https://www.youtube.com/watch?v=CYmjTyLuzuo",
  ],
  [
    "https://www.youtube.com/watch?v=zdBthc6fCk4",
    "https://www.youtube.com/watch?v=-_EVfrXqkEo",
    "https://www.youtube.com/watch?v=AmHsd9NG_fs",
    "https://www.youtube.com/watch?v=PUdemKYW6QE",
  ],
];

let videos = [];

const generateData = (urlArray, categoryName) => {
  return urlArray.map((url, index) => ({
    _id: uuid(),
    title: categoryName + " " + index,
    description: categoryName + " " + index,
    creator: categoryName + " " + index,
    url,
    categoryName,
    playlists: [],
    watched: false,
    likes: 0,
    dislikes: 0,
    views: 0,
  }));
};

for (let i = 0; i < categories.length; i++) {
  videos.push(generateData(urlData[i], categories[i].categoryName));
}

// {_id, title:string, description:string, creator:string, url:string, category:string, watchLater:boolean, watched:boolean, playlists:array}

export { videos };
