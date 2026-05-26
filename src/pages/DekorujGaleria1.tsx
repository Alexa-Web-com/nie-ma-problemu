import ImageGallery from "@/components/ImageGallery";

import decorateWallpapers1 from "@/assets/tapety-1.jpg";
import decorateWallpapers2 from "@/assets/tapety-2.jpg";
import decorateWallpapers3 from "@/assets/tapety-3.jpg";
import decorateWallpapers4 from "@/assets/tapety-4.jpg";
import decorateWallpapers5 from "@/assets/tapety-5.jpg";
import decorateWallpapers6 from "@/assets/tapety-6.jpg";
import decorateWallpapers7 from "@/assets/tapety-7.jpg";
import decorateWallpapers8 from "@/assets/tapety-8.jpg";
import decorateWallpapers9 from "@/assets/tapety-9.jpg";
import decorateWallpapers10 from "@/assets/tapety-10.jpg";

const images: string[] = [
  decorateWallpapers1,
  decorateWallpapers2,
  decorateWallpapers3,
  decorateWallpapers4,
  decorateWallpapers5,
  decorateWallpapers6,
  decorateWallpapers7,
  decorateWallpapers8,
  decorateWallpapers9,
  decorateWallpapers10,
];

const DekorujGaleria1 = () => {
  return <ImageGallery images={images} />;
};

export default DekorujGaleria1;
