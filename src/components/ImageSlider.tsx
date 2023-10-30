import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

type ImageSliderProps = {
  images: unknown[];
  imageIndex: number;
  setImageIndex: (index: number) => void;
};

export const ImageSlider = ({
  images,
  imageIndex,
  setImageIndex,
}: ImageSliderProps) => {
  const { title, date, url, hdurl, media_type, copyright } = images[imageIndex];

  const incrementImageIndex = () => {
    setImageIndex(imageIndex + 1);
  };

  const decrementImageIndex = () => {
    setImageIndex(imageIndex - 1);
  };

  return (
    <>
      <p className="text-xs text-gray-300 -my-4 -mb-5">
        {copyright ? `Copyright: ${copyright}` : <span>&nbsp;</span>}
      </p>
      <div className="flex flex-col items-center justify-center bg-black gap-1 sm:relative sticky top-2 pb-4">
        <div className="outline outline-offset-4 outline-2 sm:w-[60%] aspect-square rounded-3xl flex justify-center items-center">
          <a href={hdurl || url} target="_blank" rel="noreferrer noopener">
            <img
              key={imageIndex}
              src={url || hdurl}
              alt={title}
              className="sm:w-[65rem]"
            />
          </a>
        </div>
        <div className="flex justify-between items-center w-full mt-3.5 sm:w-3/6">
          <button
            onClick={decrementImageIndex}
            disabled={imageIndex === 0}
            className="disabled:opacity-60"
            style={{ maxWidth: "90%" }}
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
            className="disabled:opacity-60"
            disabled={imageIndex === images.length - 1}
          >
            <BsFillArrowRightCircleFill className="text-5xl text-[#1d9bf0] bg-white rounded-full" />
          </button>
        </div>
      </div>
    </>
  );
};
