import { createFileRoute } from "@tanstack/react-router";

const heroBg = "https://diningguide.hu/wp-content/uploads/2025/09/credit-szasz-marcell-scaled.jpg";
const gallery1 = "https://storage.googleapis.com/reservours-images/23f0b3af957b4ddcbceef7d399980c8c";
const gallery2 = "https://www.minap.hu/sites/default/files/styles/max_1300x1300/public/media/image/2026-01-18-20-45/gajdo-1.jpg.webp?itok=4Ww7f4y-";
const gallery3 = "https://www.minap.hu/sites/default/files/styles/max_1300x1300/public/media/image/2026-01-18-19-31/gajdo-5.jpg.webp?itok=eqW9xVvX";
const gallery4 = "https://diningguide.hu/wp-content/uploads/2025/09/555488809-777315138388720-1682371713701558350-n.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GAJDÓ | Bar & Food – Miskolc, Nagyavas" },
      { name: "description", content: "Kávézó, borbár és casual bisztró Miskolcon. Powered by Iszkor – Michelin Bib Gourmand. Széles barfood kínálat, hetente változó ebédmenü." },
      { property: "og:title", content: "GAJDÓ | Bar & Food – Miskolc" },
      { property: "og:description", content: "Kávézó, borbár és casual bisztró Miskolcon. Powered by Iszkor." },
      { property: "og:type", content: "restaurant" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Reviews />
      <Hours />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold tracking-wider text-cream">
          GAJDÓ
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <a href="#about" className="text-muted-foreground hover:text-cream transition-colors">Rólunk</a>
          <a href="#gallery" className="text-muted-foreground hover:text-cream transition-colors">Galéria</a>
          <a href="#reviews" className="text-muted-foreground hover:text-cream transition-colors">Vélemények</a>
          <a href="#hours" className="text-muted-foreground hover:text-cream transition-colors">Nyitvatartás</a>
          <a
            href="tel:+36307765845"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Foglalás
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="GAJDÓ étterem belső tere"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>
      <div className="relative text-center px-6 max-w-3xl animate-fade-up">
        <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-body">
          Powered by Iszkor · Michelin Bib Gourmand
        </p>
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-cream tracking-wider mb-6">
          GAJDÓ
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed mb-8">
          Bar & Food · Miskolc, Nagyavas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+36307765845"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            Asztalfoglalás
          </a>
          <a
            href="#about"
            className="border border-cream/30 text-cream px-8 py-3.5 rounded-lg font-medium hover:bg-cream/10 transition-colors text-sm tracking-wide"
          >
            Ismerd meg a helyet
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-gold tracking-[0.3em] uppercase text-xs">Az Iszkor városi fejezete</span>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4 mb-8">
          Nem fine dining, nem étterem –<br />hanem egy élhető városi hely
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          A Gajdó célja, hogy új színt vigyen Miskolc gasztronómiai életébe: kávézó, borbár, casual bisztró fogások,
          hetente változó ebédmenü, széles barfood kínálat baráti találkozók mellé.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Olyan hely, ahol jó lenni és ahol mindig szívesen látnak – akár egy gyors kávéra, akár egy hosszabb vacsorára.
          A Kisavason található étterem a Michelin Bib Gourmand minősítésű Iszkor csapatának új, városi otthona.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: gallery1, alt: "GAJDÓ ételek – ramen, steak, kávé" },
    { src: gallery2, alt: "GAJDÓ belső tér és hangulat" },
    { src: gallery3, alt: "GAJDÓ fogások és tálalás" },
    { src: gallery4, alt: "GAJDÓ ételek és italok" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Ízelítő</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4">Galéria</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviewsData = [
  {
    name: "Juliet for OnlyOnwards",
    source: "Google",
    rating: 4,
    text: "I was really looking forward to trying this restaurant, as I admire the owners and all their work for the local area and their trailblazer role in gastronomy.",
    date: "1 hónapja",
  },
  {
    name: "Szófia Kun",
    source: "Google",
    rating: 5,
    text: "Kellemes, családias hangulatú, igazán meleg atmoszférájú étterem Miskolcon. A kandalló különösen hangulatossá teszi a helyet, a hatalmas borválaszték pedig lenyűgöző.",
    date: "3 hónapja",
  },
  {
    name: "Zsanett Hajdú",
    source: "Google",
    rating: 5,
    text: "Nagyon vártuk a nyitást, hogy a mályinkai iszkoros csapat ételeit Miskolcon is kóstolhassuk. Az étlap ázsiai fogásait próbáltuk és le voltunk nyűgözve.",
    date: "2 hónapja",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Vélemények</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4">
            Amit vendégeink mondanak
          </h2>
        </div>

        <div className="flex justify-center gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-gold">4,8<span className="text-lg text-muted-foreground">/5</span></div>
            <div className="text-sm text-muted-foreground mt-1">Google · 75 értékelés</div>
          </div>
          <div className="w-px bg-border" />
          <div>
            <div className="text-3xl font-heading font-bold text-gold">4,6<span className="text-lg text-muted-foreground">/5</span></div>
            <div className="text-sm text-muted-foreground mt-1">DiningCity · 18 értékelés</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review, i) => (
            <div key={i} className="bg-card rounded-xl p-8 border border-border/50">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={j < review.rating ? "text-gold" : "text-muted"}>★</span>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-cream text-sm font-medium">{review.name}</span>
                <span className="text-muted-foreground text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const schedule = [
  { day: "Hétfő", hours: "Zárva" },
  { day: "Kedd", hours: "Zárva" },
  { day: "Szerda", hours: "15:00 – 23:00" },
  { day: "Csütörtök", hours: "15:00 – 23:00" },
  { day: "Péntek", hours: "12:00 – 23:00" },
  { day: "Szombat", hours: "12:00 – 23:00" },
  { day: "Vasárnap", hours: "12:00 – 20:00" },
];

function Hours() {
  return (
    <section id="hours" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Nyitvatartás & Elérhetőség</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4">Látogass el hozzánk</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-cream mb-6">Nyitvatartás</h3>
            <div className="space-y-3">
              {schedule.map((s) => (
                <div key={s.day} className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-foreground/80">{s.day}</span>
                  <span className={s.hours === "Zárva" ? "text-primary" : "text-cream font-medium"}>
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-cream mb-6">Elérhetőség</h3>
            <div className="space-y-6 text-foreground/80">
              <div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Cím</div>
                <p>Miskolc, Csáti sor 377, 3530</p>
              </div>
              <div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Telefon</div>
                <a href="tel:+36307765845" className="hover:text-cream transition-colors">
                  +36 30 776 5845
                </a>
              </div>
              <div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Közösségi média</div>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/61581107567445" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/gajdo_miskolc" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-xl font-bold tracking-wider text-cream">GAJDÓ</div>
        <p className="text-muted-foreground text-sm">
          © 2026 GAJDÓ · Bar & Food, Miskolc. Powered by Iszkor.
        </p>
      </div>
    </footer>
  );
}
