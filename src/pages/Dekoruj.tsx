import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import heroDecoration from "@/assets/hero-decoration.jpg";
import decoration1 from "@/assets/decorate-1.png";
import decoration2 from "@/assets/decorate-2.png";
import decoration3 from "@/assets/decorate-3.png";
import BaseSection from "@/components/BaseSection";

const decorations = [
  {
    title: "Tapety",
    description:
      "Oferujemy tapety, które projektowane są jak obrazy – idealnie dopasowane do wymiarów Twojej ściany, by kompozycja zawsze prezentowała się perfekcyjnie.",
    baseImage: decoration1,
    altImage: "Przykład dekoracji - tapeta",
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/dekoruj/dekoruj-galeria-1",
  },
  {
    title: "Sztukateria",
    description:
      "Listwy i panele 3D, które spajają całą aranżację w spójną całość oraz podkreślają styl i elegancję. Są nie tylko estetyczne, ale też niezawodne i trwałe.",
    baseImage: decoration2,
    altImage: "Przykład dekoracji - sztukateria",
    isImageLeft: false,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/dekoruj/dekoruj-galeria-2",
  },
  {
    title: "Płyty ścienne i podłogowe",
    description:
      "Innowacyjne płyty SPC to rewolucja w wykończeniu wnętrz. Są całkowicie wodoodporne, ekstremalnie trwałe i banalnie proste w montażu, a przy tym piękne.",
    baseImage: decoration3,
    altImage: "Przykład dekoracji - płyty",
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/dekoruj/dekoruj-galeria-3",
  },
];

const Dekoruj = () => {
  return (
    <Layout>
      <PageHero
        title="Dekoruj"
        subtitle="Tapety i sztukateria, które odmienią Twoje wnętrze"
        backgroundImage={heroDecoration}
        isBacgkgroundForTextDark={true}
        introTitle="Wyjątkowe dekoracje ścienne"
        introOne="Odkryj wyjątkowe kolekcje tapet, elegancką sztukaterię oraz wodoodporne płyty dekoracyjne, które nadadzą Twoim wnętrzom niepowtarzalny charakter. Sprawdź niezawodne rozwiązania, idealnie dopasowane do wymiarów i funkcji pomieszczeń."
      />

      {/* Gallery Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {decorations.map((section, index) => (
            <BaseSection
              key={index}
              baseImage={section.baseImage}
              altImage={section.altImage}
              isImageLeft={section.isImageLeft}
              title={section.title}
              description={section.description}
              goToSectionName={section.goToSectionName}
              goToSectionURL={section.goToSectionURL}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader title="Co oferujemy?" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Tapety
              </h3>
              <p className="text-muted-foreground">
                Szeroki wybór wzorów od minimalistycznych po artystyczne
                fototapety. Profesjonalny montaż z gwarancją.
              </p>
            </div>

            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Podłogi
              </h3>
              <p className="text-muted-foreground">
                Drewniane, winylowe i laminowane. Montaż z dbałością o każdy
                detal.
              </p>
            </div>

            <div className="bg-section-alt rounded-lg p-8 text-center card-hover">
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Sztukateria
              </h3>
              <p className="text-muted-foreground">
                Listwy, rozety i panele ścienne dodające elegancji każdemu
                wnętrzu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
            Zainspirowany? Porozmawiajmy!
          </h2>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            Skontaktuj się z nami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Dekoruj;
