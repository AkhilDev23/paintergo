
import "./Packages.css";
import SiteHeader from "./SiteHeader";

const tiers = ["basic", "standard", "premium", "luxury"];

const packages = [
  {
    key: "basic",
    name: "Basic",
    tagline: "Essential home makeover",
    price: "₹1,500",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop&q=85",
    text: "A practical solution for fresh painting, essential repairs and simple home improvements.",
    features: ["Essential painting", "Minor repairs", "Basic electrical work"],
  },
  {
    key: "standard",
    name: "Standard",
    tagline: "Best value for your home",
    price: "₹2,000",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=85",
    text: "A complete home makeover with quality materials, modern designs and functional upgrades.",
    features: ["Premium emulsion paint", "Modular kitchen", "Quality flooring"],
    popular: true,
  },
  {
    key: "premium",
    name: "Premium",
    tagline: "Elegant interiors & finishes",
    price: "₹2,500",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=85",
    text: "Beautiful designer interiors with premium materials, custom furniture and refined finishes.",
    features: ["Designer interiors", "False ceiling", "Custom wardrobes"],
  },
  {
    key: "luxury",
    name: "Luxury",
    tagline: "Exclusive luxury living",
    price: "₹3,000+",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=85",
    text: "Bespoke luxury spaces with exclusive materials, custom detailing and high-end finishes.",
    features: ["Luxury materials", "Custom furniture", "Smart home options"],
  },
];

const included = [
  ["Painting & Wall Finishing", "Standard Emulsion", "Premium Emulsion", "Luxury Paint", "Designer Finishes"],
  ["Wall Putty & Surface Prep", "Basic", "Full Surface", "Premium Finish", "Premium Finish"],
  ["Interior Design", "—", "Basic Layout", "3D Design", "Custom 3D Design"],
  ["Flooring & Tiling", "Repair Only", "Standard Tiles", "Premium Tiles", "Marble / Premium"],
  ["False Ceiling (POP/Gypsum)", "—", "Selected Areas", "Full Ceiling", "Designer Ceiling"],
  ["Electrical Work", "Basic Repairs", "Standard Wiring", "Premium Fittings", "Smart Wiring Options"],
  ["Plumbing Work", "Minor Repairs", "Standard Fittings", "Premium Fittings", "Luxury Fittings"],
  ["Modular Kitchen", "—", "Basic Modular", "Premium Modular", "Custom Luxury"],
  ["Wardrobes & Carpentry", "—", "Basic Storage", "Custom Wardrobes", "Luxury Custom Work"],
  ["Doors & Hardware", "Basic Repair", "Standard", "Premium", "Designer"],
  ["Bathroom Renovation", "Minor Repairs", "Standard Upgrade", "Premium Upgrade", "Luxury Upgrade"],
  ["Smart Home Features", "—", "—", "Selected Options", "Advanced Options"],
  ["Project Supervision", "Standard", "Dedicated", "Dedicated", "Premium Support"],
  ["Cleaning & Handover", "Basic Cleanup", "Standard Cleanup", "Detailed Cleanup", "Premium Handover"],
];

const costs = [
  ["1 BHK (500 sq.ft.)", "₹7.5 Lakh", "₹10 Lakh", "₹12.5 Lakh", "₹15 Lakh+"],
  ["2 BHK (900 sq.ft.)", "₹13.5 Lakh", "₹18 Lakh", "₹22.5 Lakh", "₹27 Lakh+"],
  ["3 BHK (1,300 sq.ft.)", "₹19.5 Lakh", "₹26 Lakh", "₹32.5 Lakh", "₹39 Lakh+"],
];

export default function Packages() {
  return (
    <div className="pk" id="home">

      <SiteHeader />

      {/* HERO */}
      <section className="pk-hero">
        <div className="pk-hero__content">
          <span className="tag">PainterGo Home Solutions</span>

          <h1>
            Transform Your Home
            <span> Within Your Budget.</span>
          </h1>

          <p>
            From essential home improvements to luxurious interiors,
            discover a renovation package designed around your lifestyle
            and budget.
          </p>

          <ul className="pk-hero__badges">
            <li>🏅 Quality<br />Materials</li>
            <li>👷 Skilled<br />Professionals</li>
            <li>⏱ On-Time<br />Delivery</li>
            <li>💰 Transparent<br />Pricing</li>
          </ul>

          <a href="/site-visit" className="button button-yellow">
            Get Free Site Visit →
          </a>
        </div>

        <div className="pk-hero__image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=90"
            alt="Modern luxury home interior by PainterGo"
          />
          <span className="stamp">
            Better Spaces,<br />Happier Homes
          </span>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="pk-cards" id="packages">
        <span className="tag tag--center">Our Renovation Plans</span>

        <h2>Choose Your Perfect Package</h2>

        <p className="sub">
          Complete home renovation solutions with material and professional
          workmanship included.
        </p>

        <div className="pk-grid">
          {packages.map((p) => (
            <article key={p.key} className={`pkg pkg--${p.key}`}>

              <div className="pkg__img">
                <img
                  src={p.img}
                  alt={`${p.name} home interior package`}
                  loading="lazy"
                />
                {p.popular && (
                  <span className="pkg__popular">MOST POPULAR</span>
                )}
              </div>

              <div className="pkg__head">
                <strong>{p.name.toUpperCase()}</strong>
                <small>{p.tagline}</small>
              </div>

              <div className="pkg__body">
                <p className="pkg__price">
                  {p.price}
                  <span> / sq.ft.</span>
                </p>

                <p className="pkg__text">{p.text}</p>

                <ul className="pkg__features">
                  {p.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a
                  className="pkg__btn"
                  href="/site-visit"
                >
                  Get This Package →
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="pk-note">
          *Prices are indicative starting estimates. Final pricing depends
          on site measurements, material selection and project requirements.
        </p>
      </section>

      {/* COMPARISON TABLE */}
      <section className="pk-included" id="comparison">

        <aside className="pk-included__side">
          <span className="tag">Package Comparison</span>

          <h3>What's Included in Each Package?</h3>

          <p>
            Compare services, materials and finishing options before
            choosing the right renovation plan for your home.
          </p>

          <span className="stamp stamp--small">
            Complete Solutions<br />Under One Roof
          </span>
        </aside>

        <div className="table-wrap">
          <table className="cmp">
            <thead>
              <tr>
                <th>Services / Work</th>
                {tiers.map((t) => (
                  <th key={t} className={`th--${t}`}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {included.map(([row, ...vals]) => (
                <tr key={row}>
                  <td>{row}</td>
                  {vals.map((v, i) => (
                    <td key={i} className={v === "—" ? "na" : ""}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ESTIMATED PROJECT COST */}
      <section className="pk-cost" id="cost">

        <aside className="pk-cost__side">
          <span className="pk-cost__icon">🏠</span>

          <div>
            <h3>Estimated Project Cost</h3>
            <small>Indicative Budget</small>
            <p>
              Approximate renovation budgets based on the selected
              package and carpet area.
            </p>
          </div>
        </aside>

        <div className="table-wrap">
          <table className="cmp cmp--cost">
            <thead>
              <tr>
                <th>Home Size / Carpet Area</th>
                {tiers.map((t) => (
                  <th key={t} className={`th--${t}`}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {costs.map(([row, ...vals]) => (
                <tr key={row}>
                  <td>{row}</td>
                  {vals.map((v, i) => (
                    <td key={i}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="pk-disclaimer">
        *The above estimates are illustrative calculations using the
        indicative per sq.ft. rates. Actual quotations may vary.
        Appliances, loose furniture, major structural changes and
        other excluded items will be quoted separately where applicable.
        Final scope and inclusions must be confirmed in the quotation.
      </p>

      {/* CTA */}
      <section className="pk-cta" id="contact">
        <div>
          <span className="tag">Let's Build Your Dream Home</span>

          <h2>Get Your Free Site Visit & Quotation</h2>

          <p>
            Tell us about your renovation plans. Our team will visit your
            site, understand your requirements and prepare a detailed estimate.
          </p>
        </div>

        <div className="pk-cta__actions">
          <a
            className="button button-yellow"
            href="/site-visit"
          >
            Get Free Site Visit →
          </a>

          <a
            className="btn btn--outline"
            href="https://wa.me/919594845483?text=Hello%20PainterGo%2C%20I%20want%20a%20home%20renovation%20quotation."
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
