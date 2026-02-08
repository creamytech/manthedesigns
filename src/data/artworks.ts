export interface Artwork {
  id: string;
  title: string;
  medium: "Ink" | "Graphite" | "Plaster" | "Mixed Media";
  dimensions: string;
  price: number;
  imageUrl: string;
  images?: string[];
  keepColor?: boolean;
  isLandscape?: boolean;
  videoUrl?: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: "dark-street",
    title: "Dark Street",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/DarkStreet.jpg",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "crossroads",
    title: "Crossroads",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/Crossroads.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "sugar-skull-skeleton",
    title: "Sugar Skull Skeleton",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/Sugarskull1.png",
    images: ["/images/Sugarskull1.png", "/images/Sugarskull2.png"],
    description: "Designed to be displayed from either side. When upside down, it's a different piece of art.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "dark-mirror",
    title: "Dark Mirror",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/DARKMIRROR1.png",
    images: ["/images/DARKMIRROR1.png", "/images/DARKMIRROR2.png"],
    description: "Dark Mirror was drawn by constantly rotating the paper, so when inverted its a different piece. When framed, must have the ability to be hung from either side to fully appreciate.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "the-other-side",
    title: "The Other Side",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/THEOTHERSIDE1.png",
    images: ["/images/THEOTHERSIDE1.png", "/images/THEOTHERSIDE2.png"],
    description: "When rotated on the wall, viewer is able to see \u201CThe Other Side\u201D.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "nightmares-revisited",
    title: "Nightmares Revisited",
    medium: "Graphite",
    dimensions: "11x14",
    price: 85,
    imageUrl: "/images/nightmares+revisited.png",
    isLandscape: true,
    description: "This is my 3rd time revisiting nightmares, all different versions, but I finally got it out if my head.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "good-vs-evil",
    title: "Good vs. Evil",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/GOODVSEVIL1.png",
    images: ["/images/GOODVSEVIL1.png", "/images/GOODVSEVIL2.png", "/images/GOODVSEVIL3.png", "/images/GOODVSEVIL4.png"],
    description: "There are four different views to this piece. Properly framed should have hangers on all sides so viewer can rotate art to preferred side.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "fully-awake",
    title: "Fully Awake",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/FULLYAWAKE.png",
    description: "This piece reflects the waking up of the pineal gland. When the eye stands alone ,you will be fully awake.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "nightmares",
    title: "Nightmares",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/Nightmares.png",
    isLandscape: true,
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "cheryls-bake-shop",
    title: "Cheryl's Bake Shop",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/CHERYLSBAKESHOP.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "the-other-sketch",
    title: "The Other Sketch",
    medium: "Ink",
    dimensions: "8x10",
    price: 40,
    imageUrl: "/images/OtherSketch.png",
    images: ["/images/OtherSketch.png", "/images/OtherSketch2.png"],
    keepColor: true,
    description: "One of my first sketches before I made \u201CThe Other Side\u201D. It was done with wine markers. Also designed to be hung from either side.\n\nHigh quality giclee print."
  },
  {
    id: "silent-scream",
    title: "Silent Scream",
    medium: "Graphite",
    dimensions: "16x16",
    price: 85,
    imageUrl: "/images/SilentScream.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "paranoid",
    title: "Paranoid",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/PARANOID.jpg",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "no-screaming",
    title: "No Screaming",
    medium: "Graphite",
    dimensions: "16x20",
    price: 85,
    imageUrl: "/images/NOSCREAMING.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "life",
    title: "Life",
    medium: "Graphite",
    dimensions: "16x16",
    price: 85,
    imageUrl: "/images/LIFE.png",
    isLandscape: true,
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "possession",
    title: "Possession",
    medium: "Graphite",
    dimensions: "8x10",
    price: 40,
    imageUrl: "/images/POSSESSION.png",
    description: "When spun 90 degrees, the picture changes and the evil comes out.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "moses",
    title: "Moses",
    medium: "Graphite",
    dimensions: "8x10",
    price: 40,
    imageUrl: "/images/MOSES.jpg",
    isLandscape: true,
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "mother",
    title: "Mother",
    medium: "Graphite",
    dimensions: "20x24",
    price: 120,
    imageUrl: "/images/mother.png",
    isLandscape: true,
    description: "This will always be my masterpiece. everythign after was always compared to \u201CMother\u201D.\n\nGraphite on paper, limited number of signed Giclee Prints."
  },
  {
    id: "peeping-tom-cat",
    title: "Peeping Tom Cat",
    medium: "Graphite",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/PEEPINGTOMCAT.png",
    isLandscape: true,
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "lazy-day",
    title: "Lazy Day",
    medium: "Graphite",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/LAZYDAY.png",
    isLandscape: true,
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "eye-see",
    title: "Eye See",
    medium: "Ink",
    dimensions: "11x14",
    price: 70,
    imageUrl: "/images/EYESEE.png",
    description: "Pen and Ink on Paper, high quality giclee print."
  },
  {
    id: "morning",
    title: "Morning",
    medium: "Graphite",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/MORNING.png",
    isLandscape: true,
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "16-faces",
    title: "16 Faces",
    medium: "Graphite",
    dimensions: "16x16",
    price: 85,
    imageUrl: "/images/16+Faces.jpg",
    images: ["/images/16+Faces.jpg", "/images/16+Faces_inverted.jpg"],
    description: "There are 16 faces in this piece, each eye is connected to four faces. Designed to hang on either side.\n\nGraphite on paper, high quality giclee print."
  },
  {
    id: "nightmare-2",
    title: "Nightmare #2",
    medium: "Ink",
    dimensions: "11x14",
    price: 75,
    imageUrl: "/images/nightmares2.png",
    isLandscape: true,
    description: "Ink on paper, high quality giclee print."
  },
  {
    id: "dark-hall",
    title: "Dark Hall",
    medium: "Graphite",
    dimensions: "11x14",
    price: 70,
    imageUrl: "/images/DARK+HALL.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "dont-walk",
    title: "Don't Walk",
    medium: "Graphite",
    dimensions: "11x14",
    price: 80,
    imageUrl: "/images/DONT+WALK.png",
    description: "Graphite on paper, high quality giclee print."
  },
  {
    id: "in-the-sky",
    title: "In The Sky",
    medium: "Plaster",
    dimensions: "20x20",
    price: 1500,
    imageUrl: "/images/InTheSky_Main.jpg",
    description: "Carved and molded plaster, painted and clear coated. Custom reclaimed oak frame."
  },
  {
    id: "camo",
    title: "Camo",
    medium: "Plaster",
    dimensions: "20x20",
    price: 2200,
    imageUrl: "/images/Camo_Main.jpg",
    images: ["/images/Camo_Main.jpg", "/images/CAMO.png", "/images/CAMO+2.png", "/images/CAMO+3.png"],
    description: "Hand carved plaster, painted and clear coated. Custom reclaimed oak frame."
  },
  {
    id: "three-saints",
    title: "Three Saints",
    medium: "Plaster",
    dimensions: "25x27",
    price: 1900,
    imageUrl: "/images/3Saints_Main.jpg",
    images: ["/images/3Saints_Main.jpg", "/images/3+SAINTS+1.jpg", "/images/3+SAINTS+2.jpg", "/images/3+SAINTS+3.jpg", "/images/3+SAINTS+4.jpg"],
    description: "Carved plaster, hand painted, clear coat\n\nCustom maple frame."
  },
  {
    id: "dark-night",
    title: "Dark Night",
    medium: "Plaster",
    dimensions: "20x26",
    price: 1900,
    imageUrl: "/images/DarkNight_Main.jpg",
    images: ["/images/DarkNight_Main.jpg", "/images/DARK+NIGHT.jpg", "/images/DARK+NIGHT(1).jpg"],
    description: "Molded and hand carved plaster, hand painted\n\nCustom reclaimed oak frame."
  }
];
