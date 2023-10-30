import { useEffect, useState } from "react";

import { ImageSlider } from "./components/ImageSlider";
import { getImagesRange, getImage } from "./utils";
import { Image } from "./interfaces";

const startDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);
const endDate = new Date().toISOString().slice(0, 10);

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchImagesRange = async () => {
      const data = await getImagesRange(startDate, endDate);
      setImages(data);
    };
    if (images.length === 0) {
      fetchImagesRange();
    }
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      const date = new Date(
        new Date(images[images.length - 1].date).getTime() - 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 10);
      const data = await getImage(date);
      if (data !== null) {
        setImages((prevImages) => [...prevImages, data]);
      }
    };
    if (imageIndex === images.length - 1) {
      fetchImage();
    }
  }, [imageIndex]);

  if (images.length === 0) return;
  const { title, explanation } = images[imageIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex flex-col items-center justify-start min-h-screen py-2 gap-y-6">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
        <ImageSlider
          images={images}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <p className="max-w-prose -mt-4">{explanation}</p>
      </div>
    </div>
  );
}

export default App;
