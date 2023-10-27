import { useState } from "react";

type ImageSliderProps = {
  imageUrls: string[];
};

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const incrementImageIndex = () => {
    setImageIndex((imageIndex + 1) % imageUrls.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center -space-x-52">
        <img
          key={imageIndex - 1}
          src={
            imageUrls[(imageIndex - 1 + imageUrls.length) % imageUrls.length]
          }
          alt="NASA"
          className="border-4 border-yellow-50 w-2/5 aspect-square object-cover rounded-3xl"
        />
        <img
          key={imageIndex}
          src={imageUrls[imageIndex]}
          alt="NASA"
          className="border-4 border-yellow-50 w-3/5 aspect-square object-cover rounded-3xl z-10"
        />
        <img
          key={imageIndex + 1}
          src={imageUrls[(imageIndex + 1) % imageUrls.length]}
          alt="NASA"
          className="border-4 border-yellow-50 w-2/5 aspect-square object-cover rounded-3xl"
        />
      </div>
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={incrementImageIndex}
      >
        Next
      </button>
    </div>
  );
};
