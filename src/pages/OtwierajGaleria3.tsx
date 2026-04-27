import ImageGallery from "@/components/ImageGallery";

import doorsClassic1 from "@/assets/klasyczne-1.jpg";
import doorsClassic2 from "@/assets/klasyczne-2.jpg";
import doorsClassic3 from "@/assets/klasyczne-3.jpg";
import doorsClassic4 from "@/assets/klasyczne-4.jpg";
import doorsClassic5 from "@/assets/klasyczne-5.jpg";
import doorsClassic6 from "@/assets/klasyczne-6.jpg";
import doorsClassic7 from "@/assets/klasyczne-7.jpg";
import doorsClassic8 from "@/assets/klasyczne-8.jpg";

const images: string[] = [
  doorsClassic1,
  doorsClassic2,
  doorsClassic3,
  doorsClassic4,
  doorsClassic5,
  doorsClassic6,
  doorsClassic7,
  doorsClassic8,
];

const OtwierajGaleria3 = () => {
  return <ImageGallery images={images} />;
};

export default OtwierajGaleria3;
