import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ImageSlider, Navbar } from "./components";
import { getImagesRange, getImage } from "./utils";
import { Image } from "./interfaces";
import AboutPage from "./about-page";

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

  const HomePage = () => (
    <main className="flex flex-col items-center justify-start min-h-screen py-2 gap-y-6">
      <h2 className="text-3xl font-bold text-center -mb-2">{title}</h2>
      <ImageSlider
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      <p className="max-w-prose -mt-4">{explanation}</p>
    </main>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <header className="flex items-center justify-between py-2 border-b-2 border-primaryBlue/60">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <footer className="mt-2 py-3 border-t-2 border-primaryBlue/60">
        <p className="text-center text-gray-500 text-sm">Space Sightings</p>
      </footer>
    </div>
  );
}

export default App;
