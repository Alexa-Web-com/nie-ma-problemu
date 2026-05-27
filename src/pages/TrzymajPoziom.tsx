import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import heroKeep from "@/assets/hero-keep.jpg";
import keep4A from "@/assets/trzymaj-4a.jpg";
import keep4B from "@/assets/trzymaj-4b.jpg";
import keep4C from "@/assets/trzymaj-4c.jpg";
import BaseSection from "@/components/BaseSection";

const keepStandards = [
  {
    title: "Nowoczesne systemy płyt i chemii budowlanej",
    description:
      "Systemowe i modułowe rozwiązania dające niemal nieograniczone możliwości aranżacyjne, będące jednocześnie szybkie i łatwe w montażu. Oferujemy sprawdzone produkty wysokiej jakości, dzięki którym realizacja odbędzie się bezproblemowo i w terminie.",
    baseImage: keep4A,
    altImage: "przykładowy produkt",
    isImageLeft: true,
  },
  {
    title: "Narzędzia do cięcia i obróbki płytek",
    description:
      "Precyzyjny system do poziomowania płytek, solidne systemy do przenoszenia płyt wielkoformatowych oraz stoły glazurnicze to narzędzia, dzięki którym nadążysz za potrzebami klientów i za terminami. Te produkty doceniło już wielu fachowców, wypróbuj i zauważ różnicę.",
    baseImage: keep4B,
    altImage: "zdjęcie poglądowe montażu",
    isImageLeft: false,
  },
  {
    title: "Systemy grzewcze do łazienek i SPA",
    description:
      "Wychodząc naprzeciw oczekiwaniom rynku, oferujemy elektryczne maty grzewcze, które zapewnią komfort klientom, łatwość montażu wykonawcom oraz nieograniczone możliwości aranżacyjne projektantom. To nie tylko ogrzewanie podłogowe, ale również m.in. podgrzewane siedziska, ściany i odparowywacze luster.",
    baseImage: keep4C,
    altImage: "termometr w telefonie",
    isImageLeft: true,
  },
];

const TrzymajPoziom = () => {
  return (
    <Layout>
      <PageHero
        title="Trzymaj poziom"
        subtitle="Sprawdzone rozwiązania dla fachowców"
        backgroundImage={heroKeep}
        isBacgkgroundForTextDark={true}
        introTitle="Trzymaj poziom - strefa profesjonalisty"
        introOne="Doskonale wiemy, że sukces inwestycji zależy od ludzi, którzy ją realizują. Dlatego oferujemy niezawodne produkty, które są realnym wsparciem dla wykonawców i architektów. Mamy rozwiązania, które nie tylko gwarantują najwyższą jakość wykończenia, ale przede wszystkim przyspieszają pracę i eliminują ryzyko błędów, otwierając przy tym nowe możliwości aranżacyjne."
      />

      {/* Door Systems Gallery */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {keepStandards.map((section, index) => (
            <BaseSection
              key={index}
              baseImage={section.baseImage}
              altImage={section.altImage}
              isImageLeft={section.isImageLeft}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
            Porozmawiajmy o Twoim remoncie
          </h2>
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

export default TrzymajPoziom;
