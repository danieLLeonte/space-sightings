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
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center -space-x-52">
        <img
          key={imageIndex - 1}
          src={images[(imageIndex - 1 + images.length) % images.length].url}
          alt="NASA"
          className="border-4 border-yellow-50 w-2/6 aspect-square object-cover rounded-3xl mt-10"
        />
        <img
          key={imageIndex}
          src={images[imageIndex].url}
          alt="NASA"
          className="border-4 border-yellow-50 w-3/6 aspect-square object-cover rounded-3xl z-10"
        />
        <img
          key={imageIndex + 1}
          src={images[(imageIndex + 1) % images.length].url}
          alt="NASA"
          className="border-4 border-yellow-50 w-2/6 aspect-square object-cover rounded-3xl mt-10 "
        />
      </div>

      <div className="flex items-center justify-between w-full absolute bottom-0">
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={incrementImageIndex}
        >
          Next
        </button>
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={decrementImageIndex}
        >
          Prev
        </button>
      </div>
    </div>
  );
};
