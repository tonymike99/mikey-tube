import { v4 as uuid } from "uuid";
import { categories } from "./categories";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

const videoDetails = (url, categoryName, index) => ({
  _id: uuid(),
  title: categoryName + "  Video " + index,
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, corrupti!",
  creator: categoryName + " " + index,
  url,
  categoryName,
  thumbnailUrl:
    "https://i.ytimg.com/vi/" + url.slice(30) + "/maxresdefault.jpg",
});

let videos = [];

const videoUrls = [
  "https://www.youtube.com/embed/HFYQMLIxhf4",
  "https://www.youtube.com/embed/qGcWwBVcjz8",
  "https://www.youtube.com/embed/59MdCHCZeeI",
  "https://www.youtube.com/embed/s07VLbGSTQc",

  "https://www.youtube.com/embed/vnmSEvy6Hp4",
  "https://www.youtube.com/embed/PbWEWQf99vU",
  "https://www.youtube.com/embed/NZ2qaSMvHtg",
  "https://www.youtube.com/embed/CYmjTyLuzuo",

  "https://www.youtube.com/embed/zdBthc6fCk4",
  "https://www.youtube.com/embed/-_EVfrXqkEo",
  "https://www.youtube.com/embed/AmHsd9NG_fs",
  "https://www.youtube.com/embed/Ahnby2vUlxM",

  "https://www.youtube.com/embed/NfGIGfIz16s",
  "https://www.youtube.com/embed/UoUjz-bOn_w",
  "https://www.youtube.com/embed/lb9Rh6OQq0Y",
  "https://www.youtube.com/embed/lPJ4HIl26gI",
];

for (let i = 0; i < videoUrls.length; i++) {
  let categoryIndex = 0;
  i <= 3
    ? (categoryIndex = 0)
    : i >= 4 && i <= 7
    ? (categoryIndex = 1)
    : i >= 8 && i <= 11
    ? (categoryIndex = 2)
    : (categoryIndex = 3);

  videos.push(videoDetails(videoUrls[i], categories[categoryIndex].name, i));
}

export { videos };
