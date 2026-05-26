import ImageGallery from "@/components/ImageGallery";

import decoratePanels1 from "@/assets/płyty-1.jpg";
import decoratePanels2 from "@/assets/płyty-2.jpg";
import decoratePanels3 from "@/assets/płyty-3.jpg";
import decoratePanels4 from "@/assets/płyty-4.jpg";
import decoratePanels5 from "@/assets/płyty-5.jpg";
import decoratePanels6 from "@/assets/płyty-6.jpg";
import decoratePanels7 from "@/assets/płyty-7.jpg";
import decoratePanels8 from "@/assets/płyty-8.jpg";
import decoratePanels9 from "@/assets/płyty-9.jpg";
import decoratePanels10 from "@/assets/płyty-10.jpg";


const images: string[] = [
  decoratePanels1,
  decoratePanels2,
  decoratePanels3,
  decoratePanels4,
  decoratePanels5,
  decoratePanels6,
  decoratePanels7,
  decoratePanels8,
  decoratePanels9,
  decoratePanels10,
];

const DekorujGaleria3 = () => {
  return <ImageGallery images={images} />;
};

export default DekorujGaleria3;
