import ImageGallery from "@/components/ImageGallery";

import doorsHandle1 from "@/assets/klamka-1.jpg";
import doorsHandle2 from "@/assets/klamka-2.jpg";
import doorsHandle3 from "@/assets/klamka-3.jpg";
import doorsHandle4 from "@/assets/klamka-4.jpg";
import doorsHandle5 from "@/assets/klamka-5.jpg";
import doorsHandle6 from "@/assets/klamka-6.jpg";
import doorsHandle7 from "@/assets/klamka-7.jpg";
import doorsHandle8 from "@/assets/klamka-8.jpg";

const images: string[] = [
  doorsHandle1,
  doorsHandle2,
  doorsHandle3,
  doorsHandle4,
  doorsHandle5,
  doorsHandle6,
  doorsHandle7,
  doorsHandle8,
];

const OtwierajGaleria5 = () => {
  return <ImageGallery images={images} />;
};

export default OtwierajGaleria5;
