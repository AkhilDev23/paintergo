
import React from "react";
import SiteHeader from "./SiteHeader"; 
import "./AboutPainterGo.css";
const DEFAULTS = {
  name: "Sunil Kumar",
  tagline:
    "Mumbai-based, client-first and straightforward. You deal directly with me, from the first call to the final result.",
  photo: "/Images/Sunil.jpeg",
  phone: "9594845483",
  whatsapp: "919594845483",
  email: "sk51568434692@gmail.com",
  location: "Jogeshwari East, Mumbai",
  about: [
    "We are based in Jogeshwari East, Mumbai, and we keep our work personal. Every client speaks to the person who actually does the job.",
    "We listen first, explain your options in plain language, and agree on price and timeline before we start. Then we deliver what we promised.",
  ],
  values: [
    { title: "Honest", text: "Clear pricing and realistic timelines, with no surprises later." },
    { title: "Responsive", text: "Call or write and you get a real reply, not a script." },
    { title: "Reliable", text: "We finish properly and stand behind our work." },
  ],
  steps: [
    { title: "Talk", text: "Tell us what you need on a call or message." },
    { title: "Agree", text: "We confirm scope, price and timeline in writing." },
    { title: "Deliver", text: "We complete the work and check it with you." },
  ],
};
 
const workImages = [
  {
    src: "/Images/image.png",
    alt: "Professional painting work",
  },
  {
    src: "/Images/image1.png",
    alt: "Electrical installation",
  },
  {
    src: "/Images/image2.png",
    alt: "Interior renovation work",
  },
  {
    src: "/Images/image3.png",
    alt: "Interior finishing",
  },
];

const steps = [
  { number: "1", title: "Understand", subtitle: "Your Needs" },
  { number: "2", title: "Clear Scope", subtitle: "of Work" },
  { number: "3", title: "Team", subtitle: "Coordination" },
  { number: "4", title: "Quality", subtitle: "Delivery" },
];

export default function AboutPainterGo(props) {
  const d = { ...DEFAULTS, ...props };
  return (
     
    <section className="pg-about">
    
      <SiteHeader />
      

      {/* ===== NEW: Hero / photo section ===== */}
      <div className="pg-hero">
      
        <div className="pg-hero-text">
          <h1 className="pg-hero-name">{d.name}</h1>
          <p className="pg-hero-tagline">{d.tagline}</p>
          <div className="pg-hero-btns">
            <a className="pg-hero-btn pg-hero-btn-primary" href={`tel:${d.phone}`}>
              Call now
            </a>
            <a
              className="pg-hero-btn"
              href={`https://wa.me/${d.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pg-hero-frame">
          <img src={d.photo} alt={`Portrait of ${d.name}`} />
        </div>
      </div>
      {/* ===== END: Hero / photo section ===== */}
      
      


      <div className="pg-intro">
        <div className="pg-who">
          <h2>Who We Are</h2>
          <p>
            We transform homes and commercial spaces across
            Mumbai through organised planning, skilled teams
            and quality-focused execution.
          </p>
        </div>

        <div className="pg-location">
          <span className="pg-pin">📍</span>
          <div>
            <strong>Jogeshwari East</strong>
            <p>Mumbai</p>
            <small>Residential · Commercial</small>
          </div>
        </div>
      </div>
<h2>Our Team</h2>
      <div className="pg-gallery">
        {workImages.map((image) => (
          <div className="pg-gallery-item" key={image.alt}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="pg-process">
        <h2>How We Work</h2>

        <div className="pg-steps">
          {steps.map((step) => (
            <div className="pg-step" key={step.number}>
              <span className="pg-step-number">{step.number}</span>
              <strong>{step.title}</strong>
              <small>{step.subtitle}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="pg-values">
        <article className="pg-value pg-mission">
          <h3><span>◎</span> OUR MISSION</h3>
          <p>
            Dependable painting, renovation and interior
            execution through clear planning, honest
            communication and quality workmanship.
          </p>
        </article>

        <article className="pg-value pg-vision">
          <h3><span>◉</span> OUR VISION</h3>
          <p>
            To become a trusted property services brand
            for homes and commercial projects across
            Mumbai and beyond.
          </p>
        </article>
      </div>

      <div className="pg-decoration" aria-hidden="true">
        <span className="pg-shape pg-hex hex-one" />
        <span className="pg-shape pg-hex hex-two" />
        <span className="pg-shape pg-hex hex-three" />
        <span className="pg-shape pg-hex hex-four" />
        <span className="pg-shape pg-hex hex-five" />
        <span className="pg-shape pg-hex hex-six" />
        <span className="pg-shape pg-hex hex-seven" />
        <span className="pg-bottom-orange" />
        <span className="pg-bottom-dark" />
      </div>
    </section>
  );
}