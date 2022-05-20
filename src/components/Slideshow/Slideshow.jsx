import "./Slideshow.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Slideshow({ videos }) {
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const timeoutRef = useRef(null);
  let delay = 3000;
  const slideshowVideos = videos.filter((video, index) => index % 4 === 0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideshowIndex((prevIndex) =>
          prevIndex === slideshowVideos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideshowIndex]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-slideshowIndex * 100}%, 0, 0)` }}
      >
        {slideshowVideos.map((slideshowVideo, index) => (
          <Link key={slideshowVideo._id} to={`/explore/${slideshowVideo._id}`}>
            <div className="slide center-contents" key={index}>
              <img
                src={slideshowVideo.thumbnailUrl}
                alt={slideshowVideo.title}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="slideshowDots">
        {slideshowVideos.map((slideshowVideo, index) => (
          <div
            key={index}
            className={`slideshowDot${
              slideshowIndex === index ? " active" : ""
            }`}
            onClick={() => {
              setSlideshowIndex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export { Slideshow };
