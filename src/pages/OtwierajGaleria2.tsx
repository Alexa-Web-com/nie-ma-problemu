import ImageGallery from "@/components/ImageGallery";

import doorsSliding1 from "@/assets/przesuwne-1.jpg";
import doorsSliding2 from "@/assets/przesuwne-2.jpg";
import doorsSliding3 from "@/assets/przesuwne-3.jpg";
import doorsSliding4 from "@/assets/przesuwne-4.jpg";
import doorsSliding5 from "@/assets/przesuwne-5.jpg";
import doorsSliding6 from "@/assets/przesuwne-6.jpg";
import doorsSliding7 from "@/assets/przesuwne-7.jpg";
import doorsSliding8 from "@/assets/przesuwne-8.jpg";

const images: string[] = [
  doorsSliding1,
  doorsSliding2,
  doorsSliding3,
  doorsSliding4,
  doorsSliding5,
  doorsSliding6,
  doorsSliding7,
  doorsSliding8,
];

const OtwierajGaleria2 = () => {
  return <ImageGallery images={images} caption="Eclisse, Porta" />;
};

export default OtwierajGaleria2;
