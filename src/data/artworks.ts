export interface Artwork {
  id: string;
  title: string;
  medium: "Ink" | "Graphite" | "Plaster" | "Mixed Media";
  dimensions: string;
  price: number;
  imageUrl: string;
  images?: string[];
  keepColor?: boolean;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Dark Street",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/DarkStreet.jpg",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "2",
    title: "Crossroads",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/Crossroads.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "3",
    title: "Sugar Skull Skeleton",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/Sugarskull1.png",
    images: ["/images/Sugarskull1.png", "/images/Sugarskull2.png"],
    description: "Designed to be displayed from either side. When upside down, it’s a different piece of art.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "4",
    title: "Dark Mirror",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/DARKMIRROR1.png",
    images: ["/images/DARKMIRROR1.png", "/images/DARKMIRROR2.png"],
    description: "Dark Mirror was drawn by constantly rotating the paper, so when inverted its a different piece. When framed, must have the ability to be hung from either side to fully appreciate.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "5",
    title: "The Other Side",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/THEOTHERSIDE1.png",
    images: ["/images/THEOTHERSIDE1.png", "/images/THEOTHERSIDE2.png"],
    description: "When rotated on the wall, viewer is able to see “The Other Side”.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "6",
    title: "Nightmares Revisited",
    medium: "Graphite",
    dimensions: "11x14",
    price: 85,
    imageUrl: "/images/nightmares+revisited.png",
    description: "This is my 3rd time revisiting nightmares, all different versions, but I finally got it out if my head.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "7",
    title: "Good vs. Evil",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/GOODVSEVIL1.png",
    images: ["/images/GOODVSEVIL1.png", "/images/GOODVSEVIL2.png", "/images/GOODVSEVIL3.png", "/images/GOODVSEVIL4.png"],
    description: "There are four different views to this piece. Properly framed should have hangers on all sides so viewer can rotate art to preferred side.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "8",
    title: "Fully Awake",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/FULLYAWAKE.png",
    description: "This piece reflects the waking up of the pineal gland. When the eye stands alone ,you will be fully awake.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "9",
    title: "Nightmares",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/Nightmares.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "10",
    title: "Cheryl's Bake Shop",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/CHERYLSBAKESHOP.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "11",
    title: "The Other Sketch",
    medium: "Ink",
    dimensions: "8x10",
    price: 40,
    imageUrl: "/images/OtherSketch.png",
    images: ["/images/OtherSketch.png", "/images/OtherSketch2.png"],
    keepColor: true,
    description: "One of my first sketches before I made “The Other Side”. It was done with wine markers. Also designed to be hung from either side.\n\nHigh quality giclee print."
  },
  {
    id: "12",
    title: "Silent Scream",
    medium: "Graphite",
    dimensions: "16x16",
    price: 85,
    imageUrl: "/images/SilentScream.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "13",
    title: "Paranoid",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/PARANOID.jpg",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "14",
    title: "No Screaming",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/NOSCREAMING.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "15",
    title: "Life",
    medium: "Graphite",
    dimensions: "16x16",
    price: 85,
    imageUrl: "/images/LIFE.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "16",
    title: "Possession",
    medium: "Graphite",
    dimensions: "8x10",
    price: 40,
    imageUrl: "/images/POSSESSION.png",
    description: "When spun 90 degrees, the picture changes and the evil comes out.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "17",
    title: "Moses",
    medium: "Graphite",
    dimensions: "8x10",
    price: 40,
    imageUrl: "/images/MOSES.jpg",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "18",
    title: "Mother",
    medium: "Graphite",
    dimensions: "20x24",
    price: 120,
    imageUrl: "/images/mother.png",
    description: "This will always be my masterpiece. everythign after was always compared to “Mother”.\n\nGraphite on paper, limited number of signed Giclee Prints."
  },
  {
    id: "19",
    title: "Peeping Tom Cat",
    medium: "Graphite",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/PEEPINGTOMCAT.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "20",
    title: "Lazy Day",
    medium: "Graphite",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/LAZYDAY.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "21",
    title: "Eye See",
    medium: "Ink",
    dimensions: "11x14",
    price: 70,
    imageUrl: "/images/EYESEE.png",
    description: "Pen and Ink on Paper, high quality giclee print."
  },
  {
    id: "22",
    title: "Morning",
    medium: "Graphite",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/MORNING.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "23",
    title: "16 Faces",
    medium: "Graphite",
    dimensions: "16x16",
    price: 85,
    imageUrl: "/images/16+Faces.jpg",
    description: "There are 16 faces in this piece, each eye is connected to four faces. Designed to hang on either side.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "24",
    title: "Nightmare #2",
    medium: "Ink",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/nightmares2.png",
    description: "Ink on paper, high quality giclee print."
  },
  {
    id: "25",
    title: "Dark Hall",
    medium: "Graphite",
    dimensions: "11x14",
    price: 70,
    imageUrl: "/images/DARK+HALL.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "26",
    title: "Don’t Walk",
    medium: "Graphite",
    dimensions: "11x14",
    price: 80,
    imageUrl: "/images/DONT+WALK.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "27",
    title: "In The Sky",
    medium: "Plaster",
    dimensions: "20x20",
    price: 1500,
    imageUrl: "/images/InTheSky_Main.jpg",
    description: "Carved and molded plaster, painted and clear coated. Custom reclaimed oak frame."
  },
  {
    id: "28",
    title: "Camo",
    medium: "Plaster",
    dimensions: "20x20",
    price: 2200,
    imageUrl: "/images/Camo_Main.jpg",
    images: ["/images/Camo_Main.jpg", "/images/CAMO.png", "/images/CAMO+2.png", "/images/CAMO+3.png"],
    description: "Hand carved plaster, painted and clear coated. Custom reclaimed oak frame."
  },
  {
    id: "29",
    title: "Three Saints",
    medium: "Plaster",
    dimensions: "25x27",
    price: 1900,
    imageUrl: "/images/3Saints_Main.jpg",
    images: ["/images/3Saints_Main.jpg", "/images/3+SAINTS+1.jpg", "/images/3+SAINTS+2.jpg", "/images/3+SAINTS+3.jpg", "/images/3+SAINTS+4.jpg"],
    description: "Carved plaster, hand painted, clear coat\n\nCustom maple frame."
  },
  {
    id: "30",
    title: "Dark Night",
    medium: "Plaster",
    dimensions: "20x26",
    price: 1900,
    imageUrl: "/images/DarkNight_Main.jpg",
    images: ["/images/DarkNight_Main.jpg", "/images/DARK+NIGHT.jpg", "/images/DARK+NIGHT(1).jpg"],
    description: "Molded and hand carved plaster, hand painted\n\nCustom reclaimed oak frame."
  }
];
