import ImageGallery from "@/components/ImageGallery";

import doorsGlass1 from "@/assets/szklane-1.jpg";
import doorsGlass2 from "@/assets/szklane-2.jpg";
import doorsGlass3 from "@/assets/szklane-3.jpg";
import doorsGlass4 from "@/assets/szklane-4.jpg";
import doorsGlass5 from "@/assets/szklane-5.jpg";
import doorsGlass6 from "@/assets/szklane-6.jpg";
import doorsGlass7 from "@/assets/szklane-7.jpg";
import doorsGlass8 from "@/assets/szklane-8.jpg";
import doorsGlass9 from "@/assets/szklane-9.jpg";
import doorsGlass10 from "@/assets/szklane-10.jpg";

const images: string[] = [
  doorsGlass1,
  doorsGlass2,
  doorsGlass3,
  doorsGlass4,
  doorsGlass5,
  doorsGlass6,
  doorsGlass7,
  doorsGlass8,
  doorsGlass9,
  doorsGlass10,
];

const OtwierajGaleria4 = () => {
  return <ImageGallery images={images} />;
};

export default OtwierajGaleria4;
