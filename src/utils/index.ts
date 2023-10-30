const API_KEY = import.meta.env.VITE_APOD_API_KEY || "DEMO_KEY";

export const getImagesRange = async (startDate: string, endDate: string) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data.reverse();
    }
    throw new Error("Network response was not ok.");
  } catch (error) {
    console.error(error);
    return reserveImages.reverse();
  }
};

export const getImage = async (date: string) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Network response was not ok.");
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const reserveImages = [
  {
    date: "2023-10-24",
    explanation:
      "This dance is to the death.  As these two large galaxies duel, a cosmic bridge of stars, gas, and dust currently stretches over 75,000 light-years and joins them.  The bridge itself is strong evidence that these two immense star systems have passed close to each other and experienced violent tides induced by mutual gravity. As further evidence, the face-on spiral galaxy on the right, also known as NGC 3808A, exhibits many young blue star clusters produced in a burst of star formation. The twisted edge-on spiral on the left (NGC 3808B) seems to be wrapped in the material bridging the galaxies and surrounded by a curious polar ring. Together, the system is known as Arp 87. While such interactions are drawn out over billions of years, repeated close passages will ultimately create one merged galaxy. Although this scenario does look unusual, galactic mergers are thought to be common, with Arp 87 representing a stage in this inevitable process. The Arp 87 dancing pair are about 300 million light-years distant toward the constellation of the Lion (Leo). The prominent edge-on spiral galaxy at the far left appears to be a more distant background galaxy and not involved in the on-going merger.",
    hdurl: "https://apod.nasa.gov/apod/image/2310/Arp87_HubblePathak_2512.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Arp 87: Merging Galaxies from Hubble",
    url: "https://apod.nasa.gov/apod/image/2310/Arp87_HubblePathak_1080.jpg",
  },
  {
    copyright: "\nTengyu Cai\n",
    date: "2023-10-25",
    explanation:
      "In 60 seconds, this setting Sun will turn green. Actually, the top of the Sun already appears not only green, but wavey -- along with all of its edges. The Sun itself is unchanged -- both effects are caused by looking along hot and cold layers in Earth's atmosphere.  The unusual color is known as a green flash and occurs because these atmospheric layers not only shift background images but disperse colors into slightly different directions, like a prism.  The featured video was captured earlier this month off the coast of Hawaii, USA. After waiting those 60 seconds, at the video's end, the upper part of the Sun seems to hover alone in space, while turning not only green, but blue.  Then suddenly, the Sun appears to shrink to nothing -- only to return tomorrow.",
    media_type: "video",
    service_version: "v1",
    title: "Gone in 60 Seconds: A Green Flash Sunset",
    url: "https://www.youtube.com/embed/J3_88eyN44w?rel=0",
  },
  {
    copyright: "David Cortner",
    date: "2023-10-26",
    explanation:
      "History's first known periodic comet, Comet Halley (1P/Halley), returns to the inner Solar System every 76 years or so. The famous comet made its last appearance to the naked-eye in 1986. But dusty debris from Comet Halley can be seen raining through planet Earth's skies twice a year during two annual meteor showers, the Eta Aquarids in May and the Orionids in October. In fact, an unhurried series of exposures captured these two bright meteors, vaporizing bits of Halley dust, during the early morning hours of October 23 against a starry background along the Taurus molecular cloud. Impacting the atmosphere at about 66 kilometers per second their greenish streaks point back to the shower's radiant just north of Orion's bright star Betelgeuse off the lower left side of the frame. The familiar Pleiades star cluster anchors the dusty celestial scene at the right.",
    hdurl:
      "https://apod.nasa.gov/apod/image/2310/20231023_orionids_in_taurus_1440b.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Orionids in Taurus",
    url: "https://apod.nasa.gov/apod/image/2310/20231023_orionids_in_taurus_1024c.jpg",
  },
  {
    copyright: "Dan Bartlett",
    date: "2023-10-27",
    explanation:
      "History's second known periodic comet is Comet Encke (2P/Encke). As it swings through the inner Solar System, Encke's orbit takes it from an aphelion, its greatest distance from the Sun, inside the orbit of Jupiter to a perihelion just inside the orbit of Mercury. Returning to its perihelion every 3.3 years, Encke has the shortest period of the Solar System's major comets. Comet Encke is also associated with (at least) two annual meteor showers on planet Earth, the North and South Taurids. Both showers are active in late October and early November. Their two separate radiants lie near bright star Aldebaran in the head-strong constellation Taurus. A faint comet, Encke was captured in this telescopic field of view imaged on the morning of August 24. Then, Encke's pretty greenish coma was close on the sky to the young, embedded star cluster and light-years long, tadpole-shaped star-forming clouds in emission nebula IC 410. Now near bright star Spica in Virgo Comet Encke passed its 2023 perihelion only five days ago, on October 22.",
    hdurl:
      "https://apod.nasa.gov/apod/image/2310/2P_Encke_2023_08_24JuneLake_California_USA_DEBartlett.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Encke and the Tadpoles",
    url: "https://apod.nasa.gov/apod/image/2310/2P_Encke_2023_08_24JuneLake_California_USA_DEBartlett1024.jpg",
  },
  {
    copyright: "Guillaume Gruntz",
    date: "2023-10-28",
    explanation:
      "Gamma Cassiopeiae shines high in northern autumn evening skies. It's the brightest spiky star in this telescopic field of view toward the constellation Cassiopeia. Gamma Cas shares the ethereal-looking scene with ghostly interstellar clouds of gas and dust, IC 59 (top left) and IC 63.  About 600 light-years distant, the clouds aren't actually ghosts. They are slowly disappearing though, eroding under the influence of energetic radiation from hot and luminous gamma Cas. Gamma Cas is physically located only 3 to 4 light-years from the nebulae. Slightly closer to gamma Cas, IC 63 is dominated by red H-alpha light emitted as hydrogen atoms ionized by the star's ultraviolet radiation recombine with electrons. Farther from the star, IC 59 shows proportionally less H-alpha emission but more of the characteristic blue tint of dust reflected star light. The cosmic stage spans over 1 degree or 10 light-years at the estimated distance of gamma Cas and friends.",
    hdurl: "https://apod.nasa.gov/apod/image/2310/IC63_GruntzBax.jpg",
    media_type: "image",
    service_version: "v1",
    title: "The Ghosts of Gamma Cas",
    url: "https://apod.nasa.gov/apod/image/2310/IC63_GruntzBax1024.jpg",
  },
  {
    copyright: "\nOrazio Mezzio\n",
    date: "2023-10-29",
    explanation:
      "What's happened to the Moon?  Within the last day, part of the Moon moved through the Earth's shadow.  This happens about once or twice a year, but not every month since the Moon's orbit around the Earth is slightly tilted.  Pictured here, the face of a full Hunter's Moon is shown twice from Italy during this partial lunar eclipse.  On the left, most of the Moon appears overexposed except for the eclipsed bottom right, which shows some familiar lunar surface details. In contrast, on the right, most of the (same) Moon appears normally exposed, with the exception of the bottom right, which now appears dark. All lunar eclipses are visible from the half of the Earth facing the Moon at the time of the eclipse, but this eclipse was visible specifically from Europe, Africa, Asia, and Australia, clouds permitting. In April, a total solar eclipse will be visible from North America.   Album: Selected partial lunar eclipse images sent in to APOD",
    hdurl:
      "https://apod.nasa.gov/apod/image/2310/PartialLunarItaly_Mezzio_5524.jpg",
    media_type: "image",
    service_version: "v1",
    title: "A Partial Lunar Eclipse",
    url: "https://apod.nasa.gov/apod/image/2310/PartialLunarItaly_Mezzio_1080.jpg",
  },
];
