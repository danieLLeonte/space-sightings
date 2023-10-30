import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { Image } from "../interfaces";

type ImageSliderProps = {
  images: Image[];
  imageIndex: number;
  setImageIndex: (index: number) => void;
};

export const ImageSlider = ({
  images,
  imageIndex,
  setImageIndex,
}: ImageSliderProps) => {
  const { title, date, url, hdurl, media_type, copyright } = images[imageIndex];
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const incrementImageIndex = () => {
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 400);
    setImageIndex(imageIndex + 1);
  };

  const decrementImageIndex = () => {
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 400);
    setImageIndex(imageIndex - 1);
  };

  return (
    <>
      <p className="text-xs text-gray-300 -my-4">
        {copyright ? `Copyright: ${copyright}` : <span>&nbsp;</span>}
      </p>
      <div className="flex flex-col items-center justify-center bg-black gap-2 sm:relative sticky top-2 pb-4">
        <div className="outline outline-offset-4 outline-2 sm:w-[60%] aspect-square rounded-3xl flex justify-center items-center">
          {media_type === "video" ? (
            <iframe
              src={url}
              title="YouTube video player"
              className="sm:w-[65rem] h-5/6 min-[406px]:w-96 w-[92vw]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          ) : (
            <a href={hdurl || url} target="_blank" rel="noreferrer noopener">
              <img
                src={url || hdurl}
                alt={title}
                className="sm:w-[65rem] aspect-square object-contain"
              />
            </a>
          )}
        </div>
        <div className="flex justify-between items-center w-full mt-3.5 sm:w-3/6">
          <button
            onClick={decrementImageIndex}
            disabled={imageIndex === 0 || isButtonDisabled}
            className="disabled:opacity-75"
          >
            <BsFillArrowLeftCircleFill className="text-5xl text-[#1d9bf0] bg-white rounded-full" />
          </button>
          <p className="text-gray-300">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <button
            onClick={incrementImageIndex}
            disabled={imageIndex === images.length - 1 || isButtonDisabled}
            className="disabled:opacity-75"
          >
            <BsFillArrowRightCircleFill className="text-5xl text-[#1d9bf0] bg-white rounded-full" />
          </button>
        </div>
      </div>
    </>
  );
};
