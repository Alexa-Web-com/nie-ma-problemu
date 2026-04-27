import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import heroRealizations from "@/assets/hero-realizations.jpg";
import realization1 from "@/assets/realization1.png";
// import realization2 from "@/assets/realization2.png"; // TODO: remove
// import realization3 from "@/assets/realization3.png"; // TODO: remove
import heroDoors from "@/assets/hero-doors.jpg";
import BaseSection from "@/components/BaseSection";

const realizations = [
  {
    surtitle: "Gdynia",
    title: "Galeria",
    description:
      "Każdy projekt to unikalna historia. Zobacz jak nasze rozwiązania zmieniają wnętrza naszych klientów w całym Trójmieście i okolicach, a nawet dalej.",
    baseImage: realization1,
    altImage: "alt", //TODO: add alt text
    isImageLeft: true,
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/ogladaj/ogladaj-galeria-1",
  },

  // TODO: remove
  // {
  //   surtitle: "Sopot",
  //   title: "Minimalistyczne drzwi ukryte",
  //   description:
  //     "Drzwi z ukrytą ościeżnicą pokryte tapetą strukturalną. Doskonałe wtopienie w ścianę dla maksymalnej elegancji.",
  //   baseImage: realization2,
  //   altImage: "alt", //TODO: add alt text
  //   isImageLeft: false,
  //   goToSectionName: "Zobacz galerię",
  //   goToSectionURL: "/ogladaj/ogladaj-galeria-2",
  // },
  // {
  //   surtitle: "Gdańsk",
  //   title: "Eleganckie przejście",
  //   description:
  //     "Klasyczne drzwi z tapetą o subtelnej fakturze. Nowoczesny minimalizm w każdym detalu.",
  //   baseImage: realization3,
  //   altImage: "alt", //TODO: add alt text
  //   isImageLeft: true,
  //   goToSectionName: "Zobacz galerię",
  //   goToSectionURL: "/ogladaj/ogladaj-galeria-3",
  // },
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
        introOne="Każdy projekt to unikalna historia. Zobacz jak nasze rozwiązania zmieniają wnętrza naszych klientów w całym Trójmieście i okolicach, a nawet dalej."
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
            baseImage={heroDoors}
            altImage="Youtube" // TODO: add alt text
            isImageLeft={false}
            title="Zobacz nas w akcji!"
            description="Zapraszamy na nasz kanał na YouTube! Publikujemy tam filmy z naszych realizacji, pokazujemy detale wykończenia i dzielimy się praktycznymi poradami. Kliknij i zainspiruj się do zmian w swoim domu!"
            goToSectionName="Przejdź do Youtube"
            goToSectionURL="https://youtube.com" //TODO: update URL
            goToSectionBg
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

export default Ogladaj;
