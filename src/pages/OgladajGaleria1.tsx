import ImageGallery from "@/components/ImageGallery";

import realization1 from "@/assets/oglądaj-1.jpg";
import realization2 from "@/assets/oglądaj-2.jpg";
import realization3 from "@/assets/oglądaj-3.jpg";
import realization4 from "@/assets/oglądaj-4.jpg";
import realization5 from "@/assets/oglądaj-5.jpg";
import realization6 from "@/assets/oglądaj-6.jpg";
import realization7 from "@/assets/oglądaj-7.jpg";
import realization8 from "@/assets/oglądaj-8.jpg";
import realization9 from "@/assets/oglądaj-9.jpg";
import realization10 from "@/assets/oglądaj-10.jpg";


const images: string[] = [
  realization1,
  realization2,
  realization3,
  realization4,
  realization5,
  realization6,
  realization7,
  realization8,
  realization9,
  realization10,
];

const OgladajGaleria1 = () => {
  return <ImageGallery images={images} />;
};

export default OgladajGaleria1;
