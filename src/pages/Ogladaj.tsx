import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
// import heroRealizations from "@/assets/hero-realizations.jpg";
import heroRealizations from "@/assets/ukryte-10.jpg";
import realization3A from "@/assets/oglądaj-1.jpg";
import movieShot from "@/assets/movie-shot.jpg";
import BaseSection from "@/components/BaseSection";

const realizations = [
  {
    title: "Galeria",
    description:
      "Każdy projekt to unikalna historia. Zobacz jak nasze rozwiązania zmieniają wnętrza naszych klientów w całym Trójmieście i okolicach, a nawet dalej.",
    baseImage: realization3A,
    altImage: "Przykład realizacji wnętrza",
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/ogladaj/ogladaj-galeria-1",
  },
];

const Ogladaj = () => {
  return (
    <Layout>
      <PageHero
        title="Oglądaj"
        subtitle="Zobacz nasze realizacje i zainspiruj się"
        backgroundImage={heroRealizations}
        isBacgkgroundForTextDark={true}
        introTitle="Nasze realizacje"
        introOne="Wymarzone drzwi muszą być nie tylko piękne i spójne z wnętrzem, ale i funkcjonalne. Solidny montaż odgrywa tu kluczową rolę, a każdy montaż to inna historia i unikalne potrzeby."
        introTwo="Prezentujemy niektóre z projektów, które mieliśmy przyjemność współtworzyć - są tu drzwi, które dostarczyliśmy i zamontowaliśmy u naszych klientów."
      />

      {/* Gallery Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {realizations.map((section, index) => (
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

      {/* Handles Section */}

      <section className="section-padding bg-card">
        <div className="container-custom">
          <BaseSection
            baseImage={movieShot}
            altImage="Przykładowe wnętrze"
            isImageLeft={false}
            title="Zobacz nas w akcji!"
            description="Zapraszamy na nasz kanał na YouTube! Publikujemy tam filmy z naszych realizacji, pokazujemy detale wykończenia i dzielimy się praktycznymi poradami. Kliknij i zainspiruj się do zmian w swoim domu!"
            goToSectionName="Przejdź do Youtube"
            goToSectionURL="https://youtube.com/@niemaproblemugdynia"
            openInNewTab
            openInNewTabImage
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
            Chcesz zobaczyć więcej?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami i porozmawiajmy o Twoim projekcie.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-secondary px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            Skontaktuj się z nami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Ogladaj;
