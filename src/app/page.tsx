"use client";

import { FormEvent, useRef, useState } from "react";

const DOWNLOAD_FILE = "/downloads/ceoagent-latest.txt";
const DOWNLOAD_VERSION = "1.0.0";
const DOWNLOAD_SIZE = "Windows installer";
const CONTACT_EMAIL = "hello@ceoagent.com";
const HERO_VIDEO =
  "https://res.cloudinary.com/dc3qprub3/video/upload/v1787309655/ceo-agent_ioiy00.mp4";

const departments = [
  ["Manager", "Breaks initiatives into tasks and tracks them in Linear"],
  ["HR", "Onboarding checklists, policies, job descriptions"],
  ["Developer", "Reads and writes code and runs commands in its own sandbox"],
  ["Analysis", "Researches and produces written analytical reports"],
  ["Sales", "Outreach drafts, proposals, pipeline plans, and connected social actions"],
  ["Finance", "Budgets, expense summaries, financial write-ups"],
  ["SEO", "Competitor and keyword research with technical recommendations"],
  ["AEO", "Optimizes content to get cited by AI answer engines"],
  ["Emails", "Reads your inbox and drafts or sends email on your behalf"],
  ["PR", "Press releases, media pitches, and public announcements"],
  ["Calendar", "Schedules goals automatically, one-time or recurring"]
];

const integrations = [
  "Gmail",
  "LinkedIn",
  "Instagram",
  "WhatsApp",
  "Reddit",
  "Zernio",
  "Linear",
  "n8n",
  "Zapier",
  "OpenAI"
];

const faqs = [
  ["Do I need every integration?", "No. Connect only the tools you already use from Settings."],
  ["Where does my data live?", "The app runs on your Windows machine, with credentials entered locally."],
  ["What if an agent is not sure?", "It asks, reports back, or waits for confirmation instead of guessing."],
  ["Can I run a department directly?", "Yes. You can work through the CEO agent or go straight to a specialist."],
  ["What does it cost to run?", "You bring your own API keys, so usage and cost stay under your control."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openContact() {
    setMenuOpen(false);
    dialogRef.current?.showModal();
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`CEO Agent OS inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setContactStatus("Opening your email app...");
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="CEO Agent OS home">
            <img className="brand-logo" src="/Logo.png" alt="" width="28" height="28" />
            <span>CEO Agent OS</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#how" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#departments" onClick={() => setMenuOpen(false)}>
              Departments
            </a>
            <a href="#download" onClick={() => setMenuOpen(false)}>
              Download
            </a>
            <button className="link-button" type="button" onClick={openContact}>
              Contact
            </button>
          </div>
        </nav>
      </header>

      <div className="product-bar" aria-label="Product actions">
        <strong>CEO Agent OS</strong>
        <div>
          <a href="#how">Explore</a>
          <a className="mini-buy" href={DOWNLOAD_FILE} download>
            Download
          </a>
        </div>
      </div>

      <main id="home">
        <section className="hero hero-video" aria-labelledby="hero-title">
          <video className="hero-bg" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <h1 id="hero-title" className="sr-only">CEO Agent OS</h1>
        </section>

        <section className="text-feature reveal" aria-labelledby="problem-title">
          <p className="section-kicker">The problem</p>
          <h2 id="problem-title" className="gradient-text">
            Running lean means wearing every department’s hat.
          </h2>
          <p>
            HR, sales outreach, finance, SEO, PR, inbox follow-up, and scheduling all
            compete for the same attention. Generic chatbots advise. CEO Agent OS produces.
          </p>
        </section>

        <section id="how" className="large-card reveal" aria-labelledby="how-title">
          <div className="section-heading">
            <p className="section-kicker">How it works</p>
            <h2 id="how-title">One goal fans out to specialist execution.</h2>
          </div>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>Give the CEO a goal</h3>
              <p>Use plain English, like “draft our Q3 hiring plan.”</p>
            </article>
            <article>
              <span>02</span>
              <h3>It routes the work</h3>
              <p>The CEO decides which departments should handle the goal.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Agents create output</h3>
              <p>Specialists research, draft, prepare files, schedule, and report back.</p>
            </article>
            <article>
              <span>04</span>
              <h3>You watch it live</h3>
              <p>A streaming log shows every meaningful action as it happens.</p>
            </article>
          </div>
        </section>

        <section id="departments" className="rail-section reveal" aria-labelledby="departments-title">
          <p className="section-kicker">Meet the departments</p>
          <h2 id="departments-title">Specialists for the work behind the company.</h2>
          <div className="department-rail">
            {departments.map(([name, description]) => (
              <article key={name}>
                <span>{name.slice(0, 2)}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="spotlight reveal" aria-labelledby="output-title">
          <p className="section-kicker">Real output</p>
          <h2 id="output-title" className="gradient-text">
            Files, drafts, posts, automations. Saved where you can use them.
          </h2>
          <div className="artifact-stack" aria-label="Example output artifacts">
            <div><span>DOCX</span><strong>Hiring plan</strong></div>
            <div><span>XLSX</span><strong>Expense summary</strong></div>
            <div><span>PPTX</span><strong>Investor update</strong></div>
            <div><span>POST</span><strong>LinkedIn announcement</strong></div>
          </div>
          <p>
            Everything any agent produces is available in the Files view, so output is
            browsable and reusable instead of buried in a transcript.
          </p>
        </section>

        <section className="text-feature reveal" aria-labelledby="integrations-title">
          <p className="section-kicker">Connects to your tools</p>
          <h2 id="integrations-title">Optional integrations. No code required.</h2>
          <div className="integration-cloud" aria-label="Supported integrations">
            {integrations.map((integration) => (
              <span key={integration}>{integration}</span>
            ))}
          </div>
          <p>
            Connect only what you use from Settings: inbox, social channels, task tracking,
            automations, and image generation.
          </p>
        </section>

        <section className="three-up reveal" aria-labelledby="features-title">
          <p className="section-kicker">Features and use</p>
          <h2 id="features-title">Built to run on your machine, your way.</h2>
          <div>
            <article>
              <h3>Automation and scheduling</h3>
              <p>Set recurring goals like “every Monday, summarize last week’s inbox.”</p>
            </article>
            <article>
              <h3>Local-first control</h3>
              <p>A real installable Windows application with credentials entered locally.</p>
            </article>
            <article>
              <h3>Draft-first trust</h3>
              <p>Emails and social posts wait for confirmation unless explicitly told to send.</p>
            </article>
          </div>
        </section>

        <section className="large-card reveal" aria-labelledby="start-title">
          <div className="section-heading">
            <p className="section-kicker">Getting started</p>
            <h2 id="start-title">Download. Connect what you use. Give the first goal.</h2>
          </div>
          <ol className="start-list">
            <li>Download the Windows installer and open CEO Agent OS.</li>
            <li>Add only the API keys and integrations you need in Settings.</li>
            <li>Give the CEO agent a goal and watch each department work live.</li>
          </ol>
        </section>

        <section id="download" className="download-section reveal" aria-labelledby="download-title">
          <div>
            <p className="section-kicker">Download</p>
            <h2 id="download-title">Get the latest CEO Agent OS release.</h2>
            <p>
              The installer is bundled with this static site, so users can download it
              directly from Render without a database or backend.
            </p>
          </div>
          <div className="download-panel">
            <div className="release-head">
              <div>
                <span className="version-label">Latest version</span>
                <h3>CEO Agent OS for Windows</h3>
              </div>
              <span className="version-badge">v{DOWNLOAD_VERSION}</span>
            </div>
            <p>{DOWNLOAD_SIZE}</p>
            <a className="primary-button full" href={DOWNLOAD_FILE} download>
              Download for Windows
            </a>
            <div className="release-note">
              <strong>Release notes</strong>
              <p>Replace the bundled placeholder with the final installer before production.</p>
            </div>
          </div>
        </section>

        <section className="faq-section reveal" aria-labelledby="faq-title">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-title">Common questions.</h2>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta reveal" aria-labelledby="final-title">
          <p className="section-kicker">CEO Agent OS</p>
          <h2 id="final-title">Give the company a goal. Get the work back.</h2>
          <div className="hero-actions center-actions">
            <a className="primary-button" href={DOWNLOAD_FILE} download>
              Download for Windows
            </a>
            <button className="secondary-button" type="button" onClick={openContact}>
              Request access
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home" aria-label="CEO Agent OS home">
          <img className="brand-logo" src="/Logo.png" alt="" width="28" height="28" />
          <span>CEO Agent OS</span>
        </a>
        <div className="footer-links">
          <a href="#how">How it works</a>
          <a href="#departments">Departments</a>
          <a href="#download">Download</a>
          <button className="link-button" type="button" onClick={openContact}>
            Contact
          </button>
        </div>
      </footer>

      <dialog ref={dialogRef} className="modal">
        <form className="modal-card contact-form" onSubmit={submitContact}>
          <button
            className="close-button"
            type="button"
            aria-label="Close contact form"
            onClick={() => dialogRef.current?.close()}
          >
            x
          </button>
          <p className="section-kicker">Contact</p>
          <h2>Request access.</h2>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button className="primary-button full" type="submit">
            Send message
          </button>
          <p className="form-status" role="status">
            {contactStatus}
          </p>
        </form>
      </dialog>
    </>
  );
}
