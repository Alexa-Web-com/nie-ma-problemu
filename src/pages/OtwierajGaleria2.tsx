import ImageGallery from "@/components/ImageGallery";

import doorsHidden1 from "@/assets/przesuwne-1.jpg";
import doorsHidden2 from "@/assets/przesuwne-2.jpg";
import doorsHidden3 from "@/assets/przesuwne-3.jpg";
import doorsHidden4 from "@/assets/przesuwne-4.jpg";
import doorsHidden5 from "@/assets/przesuwne-5.jpg";
import doorsHidden6 from "@/assets/przesuwne-6.jpg";
import doorsHidden7 from "@/assets/przesuwne-7.jpg";
import doorsHidden8 from "@/assets/przesuwne-8.jpg";

const images: string[] = [
  doorsHidden1,
  doorsHidden2,
  doorsHidden3,
  doorsHidden4,
  doorsHidden5,
  doorsHidden6,
  doorsHidden7,
  doorsHidden8,
];

const OtwierajGaleria2 = () => {
  return <ImageGallery images={images} />;
};

export default OtwierajGaleria2;
