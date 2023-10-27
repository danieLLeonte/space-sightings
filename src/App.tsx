import { ImageSlider } from "./components/ImageSlider";

const imageUrls = [
  "https://apod.nasa.gov/apod/image/2310/2P_Encke_2023_08_24JuneLake_California_USA_DEBartlett.jpg",
  "https://apod.nasa.gov/apod/image/2310/20231023_orionids_in_taurus_1440b.jpg",
  "https://apod.nasa.gov/apod/image/2310/Arp87_HubblePathak_1080.jpg",
  "https://apod.nasa.gov/apod/image/2310/IoFlyby_Juno_2047.jpg",
  "https://apod.nasa.gov/apod/image/2310/AuroraGhost_Takasaka_960.jpg",
  "https://apod.nasa.gov/apod/image/2310/C2023H2LemmonGalaxies.jpg",
];

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
}

export default App;
