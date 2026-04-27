import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import heroDoors from "@/assets/hero-doors.jpg";
import heroDecoration from "@/assets/hero-decoration.jpg";
import heroRealizations from "@/assets/hero-realizations.jpg";
import heroFloors from "@/assets/hero-floors.jpg";
import BaseSection from "@/components/BaseSection";
import PageHero from "@/components/PageHero";

const sectionData = [
  {
    baseImage: heroDoors,
    altImage: "Drzwi wewnętrzne i klamki",
    isImageLeft: true,
    surtitle: "Otwieraj",
    title: "Drzwi wewnętrzne i klamki",
    description:
      "Wszystko zaczyna się od progu. Wybierz stylowe i solidne drzwi, które chronią Twoją prywatność i klamki, które są biżuterią dla wnętrza. Oferujemy modele od klasyki po nowoczesny minimalizm – zawsze z profesjonalnym montażem.",
    goToSectionName: "Sprawdź ofertę",
    goToSectionURL: "/otwieraj",
  },
  {
    baseImage: heroDecoration,
    altImage: "Drzwi, tapety i płyty ścienno-podłogowe",
    isImageLeft: false,
    surtitle: "Dekoruj",
    title: "Drzwi, tapety i płyty ścienno-podłogowe",
    description:
      "Nadaj swojemu wnętrzu niepowtarzalny charakter. Odkryj wyjątkowe tapety na wymiar, elegancką sztukaterię oraz nowoczesne płyty dekoracyjne. Wybierz rozwiązania, które zachwycają trwałością i stylem.",
    goToSectionName: "Sprawdź ofertę",
    goToSectionURL: "/dekoruj",
  },
  {
    baseImage: heroRealizations,
    altImage: "Przykładowa realizacja",
    isImageLeft: true,
    surtitle: "Oglądaj",
    title: "Nasza praca bez retuszu",
    description:
      "Przekonaj się, jak oferowane przez nas produkty prezentują się we wnętrzach osób, które nam zaufały. Zobacz jakość naszego montażu, sprawdź, jak pracują nasze ekipy i jak zmieniają się domy naszych klientów.",
    goToSectionName: "Zobacz galerię",
    goToSectionURL: "/ogladaj",
  },
  {
    baseImage: heroFloors,
    altImage: "Dla wykonawców",
    isImageLeft: false,
    surtitle: "Trzymaj poziom",
    title: "Strefa profesjonalisty: fundament, który buduje zaufanie",
    description:
      "Narzędzia i systemy, które pozwalają wykonawcom pracować szybciej i bez poprawek, a projektantom dają wolność w kreowaniu luksusowych, bezpiecznych i funkcjonalnych wnętrz.",
    goToSectionName: "Sprawdź",
    goToSectionURL: "/trzymaj-poziom",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title={`Piękne i funkcjonalne wnętrza`}
        subtitle="Drzwi z montażem, stylowe tapety, innowacyjne systemy narzędziowe"
        backgroundImage={heroHome}
        ctaButtonText="Skontaktuj się"
        ctaLinkURL="/kontakt"
        introSurtitle="Masz wnętrze do wykończenia?"
        introTitle="Nie ma problemu!"
        introOne="Doradzamy, dostarczamy i montujemy – oferujemy sprawdzone produkty, zapewniamy fachowy montaż i profesjonalne wsparcie techniczne dla Twojej inwestycji."
      />

      {/* Services Preview */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          {sectionData.map((section, index) => (
            <BaseSection
              key={index}
              baseImage={section.baseImage}
              altImage={section.altImage}
              isImageLeft={section.isImageLeft}
              surtitle={section.surtitle}
              title={section.title}
              description={section.description}
              goToSectionName={section.goToSectionName}
              goToSectionURL={section.goToSectionURL}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader title="Dlaczego warto z nami pracować?" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Kompleksowe wsparcie
              </h3>
              <p className="text-muted-foreground text-sm">
                Doradzamy, dostarczamy i montujemy – bez przerzucania
                odpowiedzialności. Jesteśmy z Tobą od pierwszego pomiaru aż po
                montaż, szukając najlepszych rozwiązań na każdym etapie
                realizacji.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Doświadczenie i elastyczność
              </h3>
              <p className="text-muted-foreground text-sm">
                Od lat współpracujemy z profesjonalnymi wykonawcami i wiemy, jak
                ważna jest komunikacja i szybka reakcja na zmiany. Znamy realia
                budowy i potrafimy dostosować się do sytuacji.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-sansTitle font-semibold mb-4">
                Indywidualne podejście
              </h3>
              <p className="text-muted-foreground text-sm">
                Nie jesteśmy dużą siecią, dzięki czemu możemy zaopiekować się
                każdym klientem. Masz bezpośredni kontakt z osobą odpowiedzialną
                za projekt i pewność ze nikt nie zostawi Cię z problemem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
            Stwórzmy razem przestrzeń, o której marzysz!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami i rozpocznij transformację swojego wnętrza już
            dziś.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            Skontaktuj się
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
