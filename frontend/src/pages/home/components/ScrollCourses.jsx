import React, { useEffect, useRef } from "react";
import { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { ArrowUpRight, Clock3, BadgeCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import {dsa,ai,webd} from "../../../assets/images"

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const FEATURES = [
  { Icon: Clock3, label: "6+ Months" },
  { Icon: BadgeCheck, label: "Certified" },
  { Icon: Headphones, label: "24/7 Support" },
];

/* ─────────────────────────────────────────────
   IMAGE with reliable lazy-load reveal
───────────────────────────────────────────── */
function CourseImage({ src, alt, accent, glow }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const show = () => {
      img.style.opacity = "1";
    };

    if (img.complete && img.naturalWidth > 0) {
      show();
      return;
    }

    img.addEventListener("load", show, { once: true });
    return () => img.removeEventListener("load", show);
  }, [src]);

  return (
    <div className="sc-img-card">
      <div
        className="sc-img-overlay"
        style={{ background: `linear-gradient(140deg, ${glow} 0%, transparent 55%)` }}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        data-scroll
        data-scroll-speed="-0.6"
        className="sc-img"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SINGLE COURSE SECTION
───────────────────────────────────────────── */
function CourseSection({ c }) {
  return (
    <section
      data-scroll-section
      className="sc-section"
      style={{ borderTop: `1px solid ${c.borderTop}` }}
    >
      <div aria-hidden className="sc-blob" style={{ background: c.glow }} />
      <span aria-hidden className="sc-ghost-num">{c.num}</span>

      <div
        className="sc-grid course-reveal"
        data-scroll
        data-scroll-class="in-view"
        data-scroll-offset="12%,12%"
        data-scroll-repeat="true"
      >
        <div className="sc-left">
          <div className="sc-meta-row">
            <span className="sc-index">{c.num} / 03</span>
            <span
              className="sc-tag"
              style={{ color: c.accent, background: c.glow, border: `1px solid ${c.accent}28` }}
            >
              {c.tag}
            </span>
          </div>

          <p className="sc-subject" style={{ color: c.accent }}>{c.subject}</p>

          <div className="sc-title-wrap">
            <h2 className="sc-title">{c.title[0]}</h2>
            <h2 className="sc-title sc-title-dim">{c.title[1]}</h2>
          </div>

          <div className="sc-rule" style={{ background: c.accent }} />
          <p className="sc-desc">{c.desc}</p>

          <div className="sc-features">
            {FEATURES.map(({ Icon, label }) => (
              <div
                key={label}
                className="sc-pill"
                style={{ border: `1px solid ${c.accent}22`, background: c.glow }}
              >
                <Icon size={13} color={c.accent} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="sc-price-row">
            <span className="sc-price" style={{ color: c.accent }}>{c.price}</span>
            <div className="sc-price-meta">
              <span className="sc-slashed">{c.slashed}</span>
              <span className="sc-gst">+ GST applicable</span>
            </div>
          </div>

          {/* CTA - Now directly uses the `link` property */}
          <Link to={c.link} className="sc-cta">
            <span className="sc-cta-label" style={{ background: c.accent }}>
              Explore Course
            </span>
            <span
              className="sc-cta-arrow"
              style={{ background: c.glow, border: `1px solid ${c.accent}30`, color: c.accent }}
            >
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        <div className="sc-right">
          <div className="sc-badge" style={{ background: c.accent }}>{c.num}</div>
          <CourseImage
            src={c.image}
            alt={c.title.join(" ")}
            accent={c.accent}
            glow={c.glow}
          />
          <div className="sc-save-badge">
            <p className="sc-save-label">You Save</p>
            <p className="sc-save-value" style={{ color: c.accent }}>50% OFF</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const COLORS = [
  { accent: "#4ADE80", glow: "rgba(74,222,128,0.055)", borderTop: "rgba(74,222,128,0.25)" },
  { accent: "#FB923C", glow: "rgba(251,146,60,0.055)", borderTop: "rgba(251,146,60,0.25)" },
  { accent: "#60A5FA", glow: "rgba(96,165,250,0.055)", borderTop: "rgba(96,165,250,0.25)" },
  { accent: "#A78BFA", glow: "rgba(167,139,250,0.055)", borderTop: "rgba(167,139,250,0.25)" },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const ScrollCourses = () => {
  const scrollRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const locoRef = useRef(null);

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(result => {
         const mapped = (result.data || []).map((c, i) => {
           const color = COLORS[i % COLORS.length];
           const titles = c.title.split("+").map(t => t.trim());
           return {
             _id: c._id,
             num: String(i + 1).padStart(2, '0'),
             link: `/course/${c.slug}`,
             tag: c.tags && c.tags.length > 0 ? c.tags[0] : "New Course",
             subject: c.title,
             title: titles.length > 1 ? titles : [titles[0], "Course"],
             desc: c.description,
             image: c.image || "https://dummyimage.com/400x250/111/fff",
             price: `₹${(c.price / 100).toLocaleString()}`,
             slashed: `₹${(c.originalPrice / 100).toLocaleString()}`,
             ...color
           }
         });
         setCourses(mapped);
      });
  }, []);

  useEffect(() => {
    const id = "sc-font-dm-serif";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (!scrollRef.current || courses.length === 0) return;
    
    // Tiny delay to ensure DOM is ready for locomotive scroll
    const timer = setTimeout(() => {
      locoRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.85,
        lerp: 0.1,
        class: "is-inview",
        smartphone: { smooth: false },
        tablet: { smooth: false },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (locoRef.current) locoRef.current.destroy();
    };
  }, [courses]);

  return (
    <>
      <style>{`
        /* ───────────── BASE ───────────── */
        [data-scroll-container] { background: #070707; }

        .sc-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #070707;
        }

        /* ───────────── GRID ───────────── */
        .sc-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          padding: 90px 48px;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 64px;
          align-items: center;
        }

        /* ───────────── AMBIENT BLOB ───────────── */
        .sc-blob {
          position: absolute;
          width: 55vw; height: 55vw;
          border-radius: 50%;
          filter: blur(110px);
          top: 50%; left: 42%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        /* ───────────── GHOST NUM ───────────── */
        .sc-ghost-num {
          position: absolute;
          right: -3vw; bottom: -4vw;
          font-family: 'DM Serif Display', serif;
          font-size: clamp(180px, 28vw, 480px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(255,255,255,0.016);
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }

        /* ───────────── REVEAL ANIMATION ───────────── */
        .course-reveal {
          opacity: 0;
          transform: translateY(44px);
          transition:
            opacity  0.95s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .course-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* ───────────── LEFT COLUMN ───────────── */
        .sc-left { display: flex; flex-direction: column; }

        .sc-meta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .sc-index {
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }
        .sc-tag {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 4px 13px;
          border-radius: 40px;
        }

        .sc-subject {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .sc-title-wrap { margin-bottom: 0; }
        .sc-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 5.2vw, 84px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.025em;
          color: #fff;
          margin: 0;
        }
        .sc-title-dim { color: rgba(255,255,255,0.2); }

        .sc-rule {
          width: 44px; height: 2px;
          margin: 22px 0;
          flex-shrink: 0;
        }

        .sc-desc {
          color: rgba(255,255,255,0.48);
          font-size: 15px;
          line-height: 1.8;
          max-width: 490px;
          margin-bottom: 28px;
        }

        .sc-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }
        .sc-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.72);
        }

        /* price */
        .sc-price-row {
          display: flex;
          align-items: flex-end;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .sc-price {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(44px, 6vw, 82px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.025em;
        }
        .sc-price-meta {
          display: flex;
          flex-direction: column;
          margin-bottom: 6px;
          gap: 3px;
        }
        .sc-slashed {
          font-size: 17px;
          color: rgba(255,255,255,0.24);
          text-decoration: line-through;
        }
        .sc-gst {
          font-size: 10px;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* CTA */
        .sc-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          width: fit-content;
          text-decoration: none;
        }
        .sc-cta-label {
          padding: 14px 32px;
          border-radius: 50px;
          color: #080808;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .sc-cta:hover .sc-cta-label { opacity: 0.85; transform: translateX(-2px); }
        .sc-cta-arrow {
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          flex-shrink: 0;
        }
        .sc-cta:hover .sc-cta-arrow { transform: rotate(45deg); }

        /* ───────────── RIGHT COLUMN ───────────── */
        .sc-right {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .sc-badge {
          position: absolute;
          top: -18px; left: -18px;
          z-index: 10;
          width: 50px; height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #070707;
        }

        /* ───────────── IMAGE ───────────── */
        .sc-img-card {
          width: 100%;
          max-width: 560px;
          aspect-ratio: 4 / 5;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .sc-img-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .sc-img {
          width: 100%;
          height: 115%;
          object-fit: cover;
          display: block;
          opacity: 0;
          will-change: transform;
          transition: opacity 0.7s ease;
        }

        /* save badge */
        .sc-save-badge {
          position: absolute;
          bottom: -18px; left: -18px;
          z-index: 10;
          padding: 14px 20px;
          border-radius: 18px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .sc-save-label {
          font-size: 10px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .sc-save-value {
          font-size: 22px;
          font-weight: 800;
          line-height: 1;
        }

        /* ───────────── HEADER ───────────── */
        .sc-header {
          padding: 120px 48px 70px;
          max-width: 1380px;
          margin: 0 auto;
        }
        .sc-header-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 22px;
        }
        .sc-header-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(60px, 10vw, 150px);
          font-weight: 900;
          color: #fff;
          line-height: 0.9;
          letter-spacing: -0.035em;
          margin: 0;
        }
        .sc-header-dim { color: rgba(255,255,255,0.16); }

        /* ═══════════════════════════════════════
           TABLET  ≤ 900px
        ═══════════════════════════════════════ */
        @media (max-width: 900px) {
          .sc-section { min-height: auto; }

          .sc-grid {
            grid-template-columns: 1fr;
            padding: 60px 24px 72px;
            gap: 36px;
          }

          .sc-right { order: -1; }

          .sc-img-card {
            max-width: 100%;
            aspect-ratio: 16 / 9;
          }

          .sc-img {
            height: 100% !important;
            opacity: 0;
          }

          .sc-badge {
            top: 12px;
            left: 12px;
          }
          .sc-save-badge {
            bottom: 12px;
            left: 12px;
          }

          .sc-blob { width: 80vw; height: 80vw; }
          .sc-header { padding: 80px 24px 48px; }
        }

        /* ═══════════════════════════════════════
           MOBILE  ≤ 480px
        ═══════════════════════════════════════ */
        @media (max-width: 480px) {
          .sc-grid { padding: 48px 20px 64px; gap: 28px; }

          .sc-title { font-size: 36px; }
          .sc-price { font-size: 44px; }

          .sc-meta-row { margin-bottom: 20px; }
          .sc-rule { margin: 16px 0; }
          .sc-desc {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 22px;
          }
          .sc-features { margin-bottom: 26px; gap: 8px; }
          .sc-pill { padding: 7px 13px; font-size: 12px; }
          .sc-price-row { margin-bottom: 26px; gap: 12px; }
          .sc-slashed { font-size: 15px; }

          .sc-cta { width: 100%; justify-content: space-between; }
          .sc-cta-label {
            flex: 1;
            text-align: center;
            padding: 15px 20px;
          }

          .sc-img-card { aspect-ratio: 4 / 3; border-radius: 20px; }

          .sc-badge { width: 40px; height: 40px; font-size: 11px; }
          .sc-save-badge { padding: 10px 14px; border-radius: 14px; }
          .sc-save-value { font-size: 18px; }

          .sc-header { padding: 64px 20px 36px; }
          .sc-ghost-num { display: none; }
        }
      `}</style>

      <div data-scroll-container ref={scrollRef} style={{ background: "#070707" }}>

        {/* ── PAGE HEADER ── */}
        <section data-scroll-section>
          <div className="sc-header">
            <p className="sc-header-eyebrow">Our Programs</p>
            <h1 className="sc-header-title">
              Choose
              <br />
              <span className="sc-header-dim">Your Path.</span>
            </h1>
          </div>
        </section>

        {/* ── COURSE SECTIONS ── */}
        {courses.map((c) => (
          <CourseSection key={c._id} c={c} />
        ))}

        <section data-scroll-section style={{ height: 80, background: "#070707" }} />
      </div>
    </>
  );
};

export default ScrollCourses;