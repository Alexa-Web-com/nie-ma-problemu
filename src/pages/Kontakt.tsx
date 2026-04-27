import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

import { Phone, Mail, Facebook, Instagram, Youtube, Home } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

const Kontakt = () => {
  return (
    <Layout>
      <PageHero
        title="Kontakt z nami"
        subtitle="Porozmawiajmy o Twoim projekcie"
        backgroundImage={heroContact}
        isBacgkgroundForTextDark={true}
        introTitle="Spotkajmy się tam, gdzie dzieją się zmiany!"
        introOne="Cenimy Twój czas, dlatego to my dojeżdżamy do Ciebie. Nie prowadzimy stacjonarnego biura, bo wierzymy, że najlepsze decyzje dotyczące wnętrz podejmuje się na miejscu. Zadzwoń lub napisz do nas, aby od razu otrzymać wstępną wycenę lub umówić się na pomiary i prezentację oferty."
      />

      {/* Contact Info Section */}
      <section className="section-padding pt-0 bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-lg font-medium text-accent pb-2">
                    💡 Pro tip
                  </p>
                  <h3 className="font-semibold text-foreground pl-2">
                    Przede wszystkim działamy zdalnie!
                  </h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:kontakt@niemaproblemu.com.pl"
                      className="text-muted-foreground hover:underline"
                    >
                      kontakt@niemaproblemu.com.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Telefon dla klientów
                    </h3>
                    <a
                      href="tel:+48505397950"
                      className="text-muted-foreground"
                    >
                      +48 505 397 950
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Telefon dla wykonawców
                    </h3>
                    <a
                      href="tel:+48505397950"
                      className="text-muted-foreground"
                    >
                      +48 608 453 653
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-semibold text-foreground mb-2">
                  Obserwuj nas
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/niemaproblemugdynia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/niemaproblemugdynia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Youtube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-lg overflow-hidden shadow-xl lg:col-span-2">
              <iframe
                src="https://maps.google.com/maps?q=Tr%C3%B3jmiasto&t=&z=10&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Obszar działania - Trójmiasto i okolice"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="container-custom">
          <div className="pt-12 flex items-start gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12">
              <div className="lg:col-span-1 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Dane firmy
                  </h3>
                  <p className="text-muted-foreground">
                    ul. Wolności 17/1
                    <br />
                    81-327 Gdynia
                    <br />
                    NIP: 739 356 87 86
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 flex items-center">
                <p className="text-muted-foreground italic">
                  Uwaga: Pod tym adresem prowadzimy zaplecze logistyczne.
                  Spotkania z klientami odbywają się na miejscu inwestycji.
                </p>
              </div>
            </div>
            {/* <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-accent" />
            </div> */}
            {/* <div>
              <h3 className="font-semibold text-foreground mb-1">Dane firmy</h3>
              <p className="text-muted-foreground">
                ul. Wolności 17/1
                <br />
                81-327 Gdynia
                <br />
                NIP: 739 356 87 86
              </p>
              <p className="text-muted-foreground italic">
                Uwaga: Pod tym adresem prowadzimy zaplecze logistyczne.
                Spotkania z klientami odbywają się na miejscu inwestycji.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-section-alt">
        {/* <div className="container-custom">
          <SectionHeader
            title="Jak do nas trafić?"
            subtitle="Znajdujemy się w centrum Gdyni, w dogodnej lokalizacji z łatwym dojazdem"
            centered
          />

          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.6751595261994!2d18.53881397684099!3d54.51838097265935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda73817f73adf%3A0x57f7c8d93e3d5c7a!2sWolno%C5%9Bci%2016%2C%2081-327%20Gdynia!5e0!3m2!1spl!2spl!4v1706000000000!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Nie Ma Problemu - ul. Wolności 16, Gdynia"
              className="w-full"
            />
          </div>
        </div> */}
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sansTitle font-semibold text-primary-foreground mb-6">
            Masz pytania? Zadzwoń lub napisz!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Chętnie odpowiemy na wszystkie pytania i pomożemy w realizacji
            Twojego projektu.
          </p>
          <a
            href="mailto:kontakt@niemaproblemu.com.pl"
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-md font-medium transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Napisz do nas
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
