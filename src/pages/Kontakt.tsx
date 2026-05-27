import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

import { Mail, Facebook, Instagram, Youtube, Home, DoorOpen, Hammer, Lightbulb } from "lucide-react";
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
                  <p className="text-lg font-medium text-accent pb-2 flex">
                    <Lightbulb className="ml-2 mr-2 text-black" /> Pro tip
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
                    <DoorOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Drzwi i dekoracje
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
                    <Hammer className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Systemy budowlane i grzewcze
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228829.9785804984!2d18.309709969212058!3d54.473445822540604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda727e02372cf%3A0xaff08c49b5f669ee!2sWolno%C5%9Bci%2017%2C%2081-327%20Gdynia!5e0!3m2!1spl!2spl!4v1779785490251!5m2!1spl!2spl"
                width="100%"
                height="490"
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
          </div>
        </div>
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
            className="inline-flex items-center gap-2 bg-card text-foreground hover:bg-secondary px-8 py-4 rounded-md font-medium transition-all duration-200"
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
