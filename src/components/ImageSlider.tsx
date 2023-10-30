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
  const incrementImageIndex = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const decrementImageIndex = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {images[imageIndex].copyright && (
        <p className="text-sm text-gray-300 -my-3">
          Copyright: {images[imageIndex].copyright}
        </p>
      )}
      <div className="flex flex-col items-center justify-center bg-black gap-1 sm:relative sticky top-2 pb-4">
        <div className="outline outline-offset-4 outline-2 sm:w-[60%] h-3/6 aspect-square rounded-3xl flex justify-center items-center">
          <img
            key={imageIndex}
            src={images[imageIndex].url} // what if it's a video?
            alt={images[imageIndex].title}
          />
        </div>
        <p className="text- text-gray-300 mt-1 -mb-2">
          {images[imageIndex].date}
        </p>
        <div className="flex justify-between w-full -mt-2 sm:w-3/6">
          <button className="" onClick={decrementImageIndex}>
            <BsFillArrowLeftCircleFill className="text-5xl" />
          </button>
          <button className="" onClick={incrementImageIndex}>
            <BsFillArrowRightCircleFill className="text-5xl" />
          </button>
        </div>
      </div>
    </>
  );
};
