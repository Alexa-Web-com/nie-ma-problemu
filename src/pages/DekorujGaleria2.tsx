import ImageGallery from "@/components/ImageGallery";

import decorateStucco1 from "@/assets/sztukateria-1.jpg";
import decorateStucco2 from "@/assets/sztukateria-2.jpg";
import decorateStucco3 from "@/assets/sztukateria-3.jpg";
import decorateStucco4 from "@/assets/sztukateria-4.jpg";
import decorateStucco5 from "@/assets/sztukateria-5.jpg";
import decorateStucco6 from "@/assets/sztukateria-6.jpg";
import decorateStucco7 from "@/assets/sztukateria-7.jpg";
import decorateStucco8 from "@/assets/sztukateria-8.jpg";
import decorateStucco9 from "@/assets/sztukateria-9.jpg";


const images: string[] = [
  decorateStucco1,
  decorateStucco2,
  decorateStucco3,
  decorateStucco4,
  decorateStucco5,
  decorateStucco6,
  decorateStucco7,
  decorateStucco8,
  decorateStucco9,
];

const DekorujGaleria2 = () => {
  return <ImageGallery images={images} />;
};

export default DekorujGaleria2;
