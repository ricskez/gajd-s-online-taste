import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

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
      <motion.div
        className="relative text-center px-6 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-body">
          Powered by Iszkor · Michelin Bib Gourmand
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-heading text-6xl md:text-8xl font-bold text-cream tracking-wider mb-6"
        >
          GAJDÓ
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed mb-8">
          Bar & Food · Miskolc, Nagyavas
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-4">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Az Iszkor városi fejezete</span>
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-semibold text-cream mb-8">
          Nem fine dining, nem étterem –<br />hanem egy élhető városi hely
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          A Gajdó célja, hogy új színt vigyen Miskolc gasztronómiai életébe: kávézó, borbár, casual bisztró fogások,
          hetente változó ebédmenü, széles barfood kínálat baráti találkozók mellé.
        </motion.p>
        <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Olyan hely, ahol jó lenni és ahol mindig szívesen látnak – akár egy gyors kávéra, akár egy hosszabb vacsorára.
          A Kisavason található étterem a Michelin Bib Gourmand minősítésű Iszkor csapatának új, városi otthona.
        </motion.p>
      </motion.div>
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
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Ízelítő</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4">Galéria</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const reviews = [
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
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-6">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Vélemények</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4">
            Amit vendégeink mondanak
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-gold">4,8<span className="text-lg text-muted-foreground">/5</span></div>
            <div className="text-sm text-muted-foreground mt-1">Google · 75 értékelés</div>
          </div>
          <div className="w-px bg-border" />
          <div>
            <div className="text-3xl font-heading font-bold text-gold">4,6<span className="text-lg text-muted-foreground">/5</span></div>
            <div className="text-sm text-muted-foreground mt-1">DiningCity · 18 értékelés</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-card rounded-xl p-8 border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={j < review.rating ? "text-gold" : "text-muted"}>★</span>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-cream text-sm font-medium">{review.name}</span>
                <span className="text-muted-foreground text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
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
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs">Nyitvatartás & Elérhetőség</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mt-4">Látogass el hozzánk</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp}>
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
          </motion.div>

          <motion.div variants={fadeUp}>
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
                  <a
                    href="https://www.facebook.com/61581107567445"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/gajdo_miskolc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Megjegyzés</div>
                <p className="text-sm">Konyhazárás zárás előtt 1 órával</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
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
