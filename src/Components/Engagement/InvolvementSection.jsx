"use client";
import React from 'react';
import Link from 'next/link';

// Simple data array for cards (easier future extension)
const involvementCards = [
  {
    key: 'volunteer',
    title: 'Volunteer',
    text: 'Offer time and energy in seasonal tasks, creative support or on-site help. Flexible and purpose-driven.',
    href: '/book-your-stay/volunteer-form',
    cta: 'Become a Volunteer',
    icon: 'fa-handshake-angle'
  },
  {
    key: 'collaborator',
    title: 'Collaborator',
    text: 'Partner in land stewardship, education, art or legacy projects. Co-create enduring value with us.',
    href: '/book-your-stay/collaborator-form',
    cta: 'Collaborate',
    icon: 'fa-people-arrows'
  },
  {
    key: 'ambassador',
    title: 'Ambassador',
    text: 'Represent House of Andalus in events, communities and platforms; share its living heritage and story.',
    href: '/book-your-stay/ambassador-form',
    cta: 'Become an Ambassador',
    icon: 'fa-bullhorn'
  }
];

const InvolvementSection = () => {
  return (
    <section className="involvement-section">
      <div className="container">
        <div className="intro-wrap text-center">
          <h2 className="sec-title">Get Involved</h2>
          <p className="sec-text lead-text">House of Andalus grows through hearts that serve, build and represent. Choose the path that matches how you would like to support the vision.</p>
        </div>
        <div className="cards-grid">
          {involvementCards.map(card => (
            <div key={card.key} className="involve-card">
              <div className="icon-circle" aria-hidden="true">
                <i className={`fa-solid ${card.icon}`}></i>
              </div>
              <h5 className="involve-title">{card.title}</h5>
              <p className="involve-text">{card.text}</p>
              <Link href={card.href} className="th-btn style1 involve-btn">{card.cta}</Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .involvement-section { position:relative; padding:70px 0 80px; }
        /* Replace green radial wash with theme color tint */
        .involvement-section::before { content:""; position:absolute; inset:0; background:radial-gradient(circle at 30% 20%, rgba(189,105,56,0.18) 0%, #ffffff 60%); opacity:0.9; }
        .container { position:relative; }
        .intro-wrap { max-width:760px; margin:0 auto 48px; }
        .lead-text { font-size:15px; line-height:1.6; }
        .cards-grid { display:grid; gap:34px; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); }
        .involve-card { background:#ffffff; border:1px solid rgba(189,105,56,0.28); border-radius:22px; padding:30px 26px 34px; display:flex; flex-direction:column; position:relative; box-shadow:0 10px 28px -10px rgba(189,105,56,0.18); transition:.28s ease; align-items:center; text-align:center; }
        .involve-card::after { content:""; position:absolute; inset:0; border-radius:22px; pointer-events:none; border:2px solid transparent; transition:.3s ease; }
        .involve-card:hover { box-shadow:0 14px 36px -10px rgba(189,105,56,0.28); transform:translateY(-4px); }
        .involve-card:hover::after { border-color:var(--theme-color); }
        .icon-circle { width:60px; height:60px; background:rgba(189,105,56,0.16); color:var(--theme-color); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:26px; margin-bottom:18px; box-shadow:0 4px 10px -4px rgba(189,105,56,0.32); }
        .involve-title { font-size:20px; margin-bottom:12px; font-weight:600; color:var(--theme-color); letter-spacing:.02em; }
        .involve-text { flex-grow:1; font-size:14px; line-height:1.55; color:var(--primary-color); text-align:center; }
        .involve-btn { margin-top:20px; font-size:12.5px; letter-spacing:.08em; text-transform:uppercase; min-height:46px; display:inline-flex; align-items:center; gap:8px; }
        .involve-btn::after { content:'→'; font-size:14px; transform:translateY(-1px); }
        @media (max-width: 767px){ .involvement-section { padding:54px 0 60px; } .involve-card { padding:26px 22px 30px; } .icon-circle { width:54px; height:54px; font-size:22px; } }
        @media (prefers-reduced-motion: reduce){ .involve-card, .involve-card::after { transition:none; } }
      `}</style>
    </section>
  );
};

export default InvolvementSection;
