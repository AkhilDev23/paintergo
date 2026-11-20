import "./Services.css";
import SiteHeader from "./SiteHeader";


  
const services = [
  {
    title: "Painting",
    text: "Interior, exterior, texture, metallic & wood finishes.",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800"
  },
  {
    title: "Civil Work",
    text: "Cement, plastering, partitions, demolition & repairs.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
  },
  {
    title: "Waterproofing",
    text: "Terrace, bathroom, basement & leakage solutions.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
  },
  {
    title: "Flooring & Tiling",
    text: "Tile, marble, granite, wooden flooring & installation.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
  },
  {
    title: "False Ceiling",
    text: "Gypsum, POP, grid ceilings with LED lighting design.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
  },
  {
    title: "Electrical Work",
    text: "Wiring, switches, lights, fans, MCB & concealed work.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800"
  },
  {
    title: "Plumbing Services",
    text: "Pipe fitting, fixtures, geysers, water tanks & repairs.",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800"
  },
  {
    title: "Modular Kitchen",
    text: "Custom kitchens, cabinets, chimneys, backsplash & accessories.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    title: "Bathroom Renovation",
    text: "Full upgrade, sanitary ware, tiles, showers & storage.",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800"
  },
  {
    title: "Windows & Carpentry",
    text: "Wooden, aluminium, uPVC windows, doors & custom work.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
  },
  {
    title: "Interior Design",
    text: "Concept, planning, 3D visuals, furniture layout & decor.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
  },
  {
    title: "Wall Décor",
    text: "Paneling, wallpaper, textures, murals & feature walls.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
  },
  {
    title: "Doors & Windows",
    text: "Installation, repair & replacement of all door types.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
  },
  {
   title: "AC & Ventilation",
  text: "Split AC installation, ducting, exhaust fans & service.",
  img: "https://images.unsplash.com/photo-1631545806609-3d3d3b7b5e9d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart Home",
    text: "Smart locks, cameras, automation & voice control.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800"
  },
  {
    title: "Exterior Renovation",
    text: "Facade, cladding, balcony, boundary wall & landscaping.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  },
  {
    title: "Furniture",
    text: "Custom wardrobes, beds, TV units & sofa polishing.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
  },
  {
    title: "Deep Cleaning",
    text: "Post-renovation cleaning, sanitisation & polishing.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
  },
  {
    title: "Maintenance",
    text: "Annual contracts, quick repairs & periodic inspection.",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
  },
  {
    title: "Turnkey Projects",
    text: "Complete renovation from design to handover.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
  },
];

const heroBadges = [
  { icon: "🏅", label: "Quality Work\nGuaranteed" },
  { icon: "👷", label: "Skilled Team\n& Professionals" },
  { icon: "⏱", label: "On-Time\nDelivery" },
  { icon: "💰", label: "Transparent\nPricing" },
];

const whyItems = [
  { icon: "🛡", label: "Trusted\nProfessionals" },
  { icon: "✔", label: "Premium\nQuality Materials" },
  { icon: "⏰", label: "On-Time\nProject Delivery" },
  { icon: "₹", label: "Competitive\nPricing" },
  { icon: "🎧", label: "Dedicated\nProject Support" },
];



function Logo() {
  return (
    <a href="#home" >
      <span className="logo__mark">🏠</span>
      <span className="logo__text">
        <strong>PainterGo</strong>
        <small>Complete Home Solutions</small>
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="page" id="home">
      {/* ---------- Header ---------- */}
     <SiteHeader/>

     

<section className="hero">
  <div className="hero__content">

    <div className="hero__eyebrow">
      <span className="hero__eyebrow-line"></span>
      COMPLETE HOME SOLUTIONS
    </div>

    <h1>
      Transform Your
      <span> Home Into</span>
      <span className="hero__highlight">Something Beautiful.</span>
    </h1>

    <p className="hero__description">
      From expert painting to complete home renovation,
      we bring quality craftsmanship, premium materials
      and beautiful designs together under one roof.
    </p>

    <div className="hero__actions">
      <a href="/site-visit" className="hero__btn hero__btn--primary">
        Get Free Site Visit <span>→</span>
      </a>

      <a href="#services" className="hero__btn hero__btn--secondary">
        Explore Services <span>↗</span>
      </a>
    </div>

    <div className="hero__divider"></div>

    <ul className="hero__badges">
      {heroBadges.map((b) => (
        <li key={b.label}>
          <span className="badge__icon">{b.icon}</span>
          <span className="badge__label">{b.label}</span>
        </li>
      ))}
    </ul>

  </div>

  <div className="hero__visual">

    <div className="hero__image"></div>

    <div className="hero__image-overlay"></div>

    <div className="hero__floating-card">
      <span className="floating-card__icon">✦</span>
      <div>
        <strong>Better Spaces.</strong>
        <p>Happier Homes.</p>
      </div>
    </div>

    <div className="hero__image-caption">
      <span>01 / 04</span>
      <span>DESIGNED FOR BETTER LIVING</span>
    </div>

  </div>
</section>



      {/* ---------- Services ---------- */}
      <section className="services" id="services">
        <span className="section__tag">Our Services</span>
        <h2>A to Z Home Renovation Services</h2>
        <p className="section__sub">
          Comprehensive renovation and interior contracting — from basic repairs to luxury makeovers.
        </p>

        <div className="grid">
          {services.map((s, i) => (
            <article className="card" key={s.title}>
              <div
                className="card__img"
                style={s.img ? { backgroundImage: `url(${s.img})` } : undefined}
              >
                <span className="card__num">{i + 1}</span>
              </div>
              <div className="card__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Why choose ---------- */}
      <section className="why">
        <h2>
          Why Choose <span>PainterGo?</span>
        </h2>
        <p className="why__sub">We make renovation simple, reliable and stress-free.</p>
        <ul className="why__list">
          {whyItems.map((w) => (
            <li key={w.label}>
              <span className="why__icon">{w.icon}</span>
              <span className="why__label">{w.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- CTA strip ---------- */}
      <section className="cta">
        <div className="cta__area">
          <span className="cta__pin">📍</span>
          <div>
            <strong>Service Area</strong>
            <p>Pune &amp; nearby areas</p>
          </div>
        </div>
          <div className="hero-buttons"><a className="button button-yellow" href="/site-visit">Get Free Site Visit</a></div>
        <div className="cta__tag">
          Your Dream Home
          <br />
          <em>Starts Here!</em>
        </div>
      </section>
    </div>
  );
}