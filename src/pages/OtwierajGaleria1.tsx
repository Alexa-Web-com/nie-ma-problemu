import ImageGallery from "@/components/ImageGallery";

import doorsHidden1 from "@/assets/ukryte-1.jpg";
import doorsHidden2 from "@/assets/ukryte-2.jpg";
import doorsHidden3 from "@/assets/ukryte-3.jpg";
import doorsHidden4 from "@/assets/ukryte-4.jpg";
import doorsHidden5 from "@/assets/ukryte-5.jpg";
import doorsHidden6 from "@/assets/ukryte-6.jpg";
import doorsHidden7 from "@/assets/ukryte-7.jpg";
import doorsHidden8 from "@/assets/ukryte-8.jpg";
import doorsHidden9 from "@/assets/ukryte-9.jpg";
import doorsHidden10 from "@/assets/ukryte-10.jpg";

const images: string[] = [
  doorsHidden1,
  doorsHidden2,
  doorsHidden3,
  doorsHidden4,
  doorsHidden5,
  doorsHidden6,
  doorsHidden7,
  doorsHidden8,
  doorsHidden9,
  doorsHidden10,
];

const OtwierajGaleria1 = () => {
  return <ImageGallery images={images} />;
};

export default OtwierajGaleria1;
