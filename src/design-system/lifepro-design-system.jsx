import React, { useState } from "react";
import { ArrowRight, Search, User, ShoppingCart, Menu, X, Star, Check, Play, Heart, Truck, Shield, RotateCcw } from "lucide-react";


// ============================================================
// LIFEPRO — DESIGN SYSTEM CANVAS
// Edit tokens in TOKENS object — everything cascades.
// ============================================================

const TOKENS = {
  color: {
    primary: "#F15A29",
    primaryHover: "#D94818",
    primaryPressed: "#B83A12",
    ink: "#1A1A1A",
    peach: "#FFE5D6",
    peri: "#C8D0E0",
    n0: "#FFFFFF",
    n50: "#F7F8FA",
    n100: "#EEF1F5",
    n200: "#D9DEE5",
    n400: "#8A93A1",
    n600: "#4A5160",
    n900: "#111418",
    success: "#2BA66B",
    error: "#D93025",
    warning: "#F4B400",
    info: "#2F6FED",
    star: "#F4B400",
  },
  radius: { sm: 6, md: 10, lg: 16, xl: 24, pill: 999 },
  shadow: {
    xs: "0 1px 2px rgba(17,20,24,0.06)",
    sm: "0 2px 6px rgba(17,20,24,0.08)",
    card: "0 4px 14px rgba(17,20,24,0.08)",
    cardHover: "0 10px 28px rgba(17,20,24,0.12)",
    modal: "0 24px 60px rgba(17,20,24,0.22)",
  },
  font: {
    display: "'area-normal', sans-serif",
    body: "'area-normal', sans-serif",
  },
};

const C = TOKENS.color;

// ---------- Shared atoms ----------
const Section = ({ title, desc, children, id }) => (
  <section id={id} style={{ padding: "48px 32px", borderBottom: `1px solid ${C.n200}` }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: TOKENS.font.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, marginBottom: 8 }}>{id}</div>
        <h2 style={{ fontFamily: TOKENS.font.display, fontSize: 32, fontWeight: 700, color: C.n900, margin: 0, lineHeight: 1.15 }}>{title}</h2>
        {desc && <p style={{ fontFamily: TOKENS.font.body, fontSize: 15, color: C.n600, marginTop: 8 }}>{desc}</p>}
      </div>
      {children}
    </div>
  </section>
);

const Btn = ({ variant = "primary", size = "md", children, icon }) => {
  const sizes = {
    lg: { p: "16px 28px", fs: 16, h: 52 },
    md: { p: "12px 22px", fs: 14, h: 44 },
    sm: { p: "8px 16px", fs: 13, h: 36 },
  }[size];
  const variants = {
    primary: { bg: C.primary, color: "#fff", border: "none" },
    secondary: { bg: "transparent", color: C.ink, border: `1.5px solid ${C.ink}` },
    ghost: { bg: "transparent", color: C.ink, border: "none" },
  }[variant];
  return (
    <button style={{
      padding: sizes.p, fontSize: sizes.fs, height: sizes.h,
      fontFamily: TOKENS.font.body, fontWeight: 600, letterSpacing: "0.04em",
      textTransform: "uppercase", borderRadius: TOKENS.radius.pill,
      display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer",
      transition: "all 150ms", ...variants,
    }}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
};

const ArrowCircle = ({ size = 36 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: C.primary, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
    <ArrowRight size={size * 0.45} />
  </div>
);

// ---------- 1. COLOR PALETTE ----------
const Swatch = ({ name, value, hex }) => (
  <div style={{ background: "#fff", borderRadius: TOKENS.radius.md, overflow: "hidden", border: `1px solid ${C.n200}` }}>
    <div style={{ background: hex, height: 80, borderBottom: `1px solid ${C.n200}` }} />
    <div style={{ padding: 12 }}>
      <div style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 600, color: C.n900 }}>{name}</div>
      <div style={{ fontFamily: "monospace", fontSize: 12, color: C.n400, marginTop: 4 }}>{hex}</div>
      <div style={{ fontFamily: "monospace", fontSize: 11, color: C.n400 }}>{value}</div>
    </div>
  </div>
);

const Palette = () => (
  <Section id="01 · Colors" title="Color Palette" desc="All tokens available as Figma variables and CSS custom properties.">
    {[
      { label: "Brand", items: [["Primary", "color/brand/primary", C.primary], ["Primary Hover", "color/brand/primary-hover", C.primaryHover], ["Primary Pressed", "color/brand/primary-pressed", C.primaryPressed], ["Ink", "color/brand/secondary", C.ink]] },
      { label: "Accent", items: [["Peach", "color/brand/accent", C.peach], ["Periwinkle", "color/brand/accent-alt", C.peri]] },
      { label: "Neutral", items: [["White", "color/neutral/0", C.n0], ["N-50", "color/neutral/50", C.n50], ["N-100", "color/neutral/100", C.n100], ["N-200", "color/neutral/200", C.n200], ["N-400", "color/neutral/400", C.n400], ["N-600", "color/neutral/600", C.n600], ["N-900", "color/neutral/900", C.n900]] },
      { label: "Semantic", items: [["Success", "color/semantic/success", C.success], ["Error", "color/semantic/error", C.error], ["Warning", "color/semantic/warning", C.warning], ["Info", "color/semantic/info", C.info]] },
    ].map((g) => (
      <div key={g.label} style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 600, color: C.n600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>{g.label}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 12 }}>
          {g.items.map(([n, v, h]) => <Swatch key={n} name={n} value={v} hex={h} />)}
        </div>
      </div>
    ))}
  </Section>
);

// ---------- 2. TYPOGRAPHY ----------
const TypeRow = ({ label, token, style, sample }) => (
  <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, padding: "20px 0", borderBottom: `1px solid ${C.n100}`, alignItems: "baseline" }}>
    <div>
      <div style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 600, color: C.n900 }}>{label}</div>
      <div style={{ fontFamily: "monospace", fontSize: 11, color: C.n400, marginTop: 2 }}>{token}</div>
    </div>
    <div style={style}>{sample}</div>
  </div>
);

const Typography = () => (
  <Section id="02 · Typography" title="Type Scale" desc="area-normal across the full system — display, headings, body, and UI.">
    <div>
      <TypeRow label="Display XL" token="type/display/xl" style={{ fontFamily: TOKENS.font.display, fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, color: C.n900 }} sample="Power Your Body" />
      <TypeRow label="H1 / Heading" token="type/heading/h1" style={{ fontFamily: TOKENS.font.display, fontSize: 48, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, color: C.n900 }} sample="Personalized Wellness" />
      <TypeRow label="H2" token="type/heading/h2" style={{ fontFamily: TOKENS.font.display, fontSize: 36, fontWeight: 700, lineHeight: 1.15, color: C.n900 }} sample="Find Your Way Back to Strong" />
      <TypeRow label="H3" token="type/heading/h3" style={{ fontFamily: TOKENS.font.display, fontSize: 28, fontWeight: 600, lineHeight: 1.2, color: C.n900 }} sample="Good Vibes Only" />
      <TypeRow label="H4" token="type/heading/h4" style={{ fontFamily: TOKENS.font.display, fontSize: 22, fontWeight: 600, color: C.n900 }} sample="Waver Vibration Plate" />
      <TypeRow label="Eyebrow" token="type/heading/eyebrow" style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary }} sample="SHOP BESTSELLERS" />
      <TypeRow label="Body L" token="type/body/lg" style={{ fontFamily: TOKENS.font.body, fontSize: 18, lineHeight: 1.55, color: C.n600 }} sample="Unlock your body with intended-to-use recovery tools." />
      <TypeRow label="Body M" token="type/body/md" style={{ fontFamily: TOKENS.font.body, fontSize: 16, lineHeight: 1.5, color: C.n600 }} sample="Recover smarter with vibration therapy and targeted relief." />
      <TypeRow label="Body S" token="type/body/sm" style={{ fontFamily: TOKENS.font.body, fontSize: 14, color: C.n600 }} sample="Trusted by 2.5M+ customers worldwide." />
      <TypeRow label="Caption" token="type/body/caption" style={{ fontFamily: TOKENS.font.body, fontSize: 12, fontWeight: 500, color: C.n400 }} sample="FREE SHIPPING ON ORDERS OVER $75" />
    </div>
  </Section>
);

// ---------- 3. SPACING & RADIUS ----------
const Foundations = () => (
  <Section id="03 · Foundations" title="Spacing, Radius & Shadow">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
      <div>
        <h4 style={{ fontFamily: TOKENS.font.display, fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Spacing (4px base)</h4>
        {[4, 8, 12, 16, 24, 32, 48, 64, 80].map((v) => (
          <div key={v} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 60, fontFamily: "monospace", fontSize: 12, color: C.n600 }}>space/{v / 4}</div>
            <div style={{ width: v, height: 16, background: C.primary, borderRadius: 2 }} />
            <div style={{ fontSize: 12, color: C.n400 }}>{v}px</div>
          </div>
        ))}
      </div>
      <div>
        <h4 style={{ fontFamily: TOKENS.font.display, fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Radius</h4>
        {Object.entries(TOKENS.radius).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 56, height: 56, background: C.peach, borderRadius: v, border: `1px solid ${C.n200}` }} />
            <div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: C.n900 }}>radius/{k}</div>
              <div style={{ fontSize: 11, color: C.n400 }}>{v}px</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4 style={{ fontFamily: TOKENS.font.display, fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Shadow</h4>
        {Object.entries(TOKENS.shadow).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 56, height: 56, background: "#fff", borderRadius: TOKENS.radius.md, boxShadow: v }} />
            <div style={{ fontFamily: "monospace", fontSize: 12, color: C.n900 }}>shadow/{k}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// ---------- 4. BUTTONS ----------
const Buttons = () => (
  <Section id="04 · Buttons" title="Button Component" desc="Button/{Variant}/{Size}/{State}">
    <div style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <Btn variant="primary" size="lg" icon>Shop the Sauna Sale</Btn>
        <Btn variant="primary" size="md" icon>Shop Now</Btn>
        <Btn variant="primary" size="sm">Add to Cart</Btn>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <Btn variant="secondary" size="lg">Learn More</Btn>
        <Btn variant="secondary" size="md">View Details</Btn>
        <Btn variant="ghost" size="md">Cancel</Btn>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <ArrowCircle size={44} />
        <ArrowCircle size={36} />
        <ArrowCircle size={28} />
        <span style={{ fontSize: 13, color: C.n400, fontFamily: "monospace" }}>Icon/Arrow-Circle/Orange</span>
      </div>
    </div>
  </Section>
);

// ---------- 5. PRODUCT CARD ----------
const ProductCard = ({ title, price, old, rating = 4.5, reviews = 312, badge, accent = C.n100 }) => {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: "#fff", borderRadius: TOKENS.radius.lg, overflow: "hidden", boxShadow: hover ? TOKENS.shadow.cardHover : TOKENS.shadow.xs, transition: "all 200ms", transform: hover ? "translateY(-4px)" : "none", border: `1px solid ${C.n200}` }}>
      <div style={{ position: "relative", aspectRatio: "1", background: accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {badge && <span style={{ position: "absolute", top: 12, left: 12, background: C.primary, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: TOKENS.radius.pill, textTransform: "uppercase", letterSpacing: "0.05em" }}>{badge}</span>}
        <div style={{ position: "absolute", top: 12, right: 12 }}><ArrowCircle size={36} /></div>
        <div style={{ width: "60%", height: "60%", background: `radial-gradient(circle, ${C.n200} 0%, ${accent} 70%)`, borderRadius: TOKENS.radius.lg }} />
      </div>
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: C.n600 }}>
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={13} fill={i <= Math.round(rating) ? C.star : "none"} color={C.star} strokeWidth={1.5} />)}
          <span style={{ marginLeft: 4 }}>({reviews})</span>
        </div>
        <div style={{ fontFamily: TOKENS.font.body, fontSize: 14, fontWeight: 600, color: C.n900, lineHeight: 1.35, minHeight: 38 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: TOKENS.font.display, fontSize: 18, fontWeight: 700, color: C.n900 }}>${price}</span>
          {old && <span style={{ fontSize: 13, color: C.n400, textDecoration: "line-through" }}>${old}</span>}
        </div>
        <Btn variant="primary" size="sm">Shop Now</Btn>
      </div>
    </div>
  );
};

const ProductCards = () => (
  <Section id="05 · Product Card" title="Card/Product/Grid" desc="Hover to see lift + shadow elevation.">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
      <ProductCard title="AbsorbAid Pro Light Therapy Belt" price="299.99" old="349.99" rating={5} reviews={482} badge="Sale" accent="#FFE5D6" />
      <ProductCard title="Waver Vibration Plate" price="199.99" rating={4} reviews={1203} badge="Best" accent="#EEF1F5" />
      <ProductCard title="NiguaWrap Infrared Sauna Blanket" price="499.99" old="599.99" rating={5} reviews={328} badge="New" accent="#C8D0E0" />
      <ProductCard title="Waver Mini Vibration Plate" price="149.99" rating={4} reviews={756} accent="#FFE5D6" />
    </div>
  </Section>
);

// ---------- 6. NAV ----------
const NavBar = () => (
  <Section id="06 · Navigation" title="Navigation Bar" desc="Nav/Desktop + Announcement bar + Mobile drawer.">
    <div style={{ borderRadius: TOKENS.radius.lg, overflow: "hidden", border: `1px solid ${C.n200}` }}>
      <div style={{ background: C.n900, color: "#fff", textAlign: "center", padding: "10px 16px", fontSize: 13, fontFamily: TOKENS.font.body, fontWeight: 500, position: "relative" }}>
        Sauna Sale: Extra 10% Off at Checkout · Use Code SAUNASALE
        <X size={16} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", cursor: "pointer" }} />
      </div>
      <div style={{ background: "#fff", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: C.primary, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Play size={16} fill="#fff" color="#fff" />
          </div>
          <span style={{ fontFamily: TOKENS.font.display, fontSize: 20, fontWeight: 700, color: C.n900 }}>lifepro</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: TOKENS.font.body, fontSize: 14, fontWeight: 500, color: C.n900 }}>
          {["Vibration", "Light Therapy", "Sauna", "Fitness", "Recovery", "Community"].map((l) => <a key={l} style={{ cursor: "pointer" }}>{l}</a>)}
        </div>
        <div style={{ display: "flex", gap: 18, alignItems: "center", color: C.n900 }}>
          <Search size={18} />
          <User size={18} />
          <div style={{ position: "relative" }}>
            <ShoppingCart size={18} />
            <span style={{ position: "absolute", top: -6, right: -8, background: C.primary, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 999, padding: "1px 5px" }}>2</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// ---------- 7. HERO ----------
const Hero = () => (
  <Section id="07 · Hero" title="Hero / Variant A — Lifestyle Split">
    <div style={{ borderRadius: TOKENS.radius.lg, overflow: "hidden", border: `1px solid ${C.n200}`, position: "relative", height: 480, background: `linear-gradient(135deg, ${C.peach} 0%, ${C.n100} 60%, ${C.peri} 100%)` }}>
      <div style={{ position: "absolute", top: 48, left: 48, width: 440, background: "#fff", padding: 32, borderRadius: TOKENS.radius.xl, boxShadow: TOKENS.shadow.card }}>
        <div style={{ fontFamily: TOKENS.font.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, marginBottom: 12 }}>Sauna Sale</div>
        <h1 style={{ fontFamily: TOKENS.font.display, fontSize: 40, fontWeight: 700, lineHeight: 1.1, color: C.n900, margin: 0, letterSpacing: "-0.02em" }}>Sauna Rituals from America's #1 Vibration Plate Brand</h1>
        <p style={{ fontFamily: TOKENS.font.body, fontSize: 15, color: C.n600, marginTop: 16, lineHeight: 1.5 }}>Unlock your body with intended-to-use recovery tools built for everyday health and recovery.</p>
        <div style={{ marginTop: 24 }}><Btn variant="primary" size="lg" icon>Shop the Sauna Sale</Btn></div>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12, padding: 10, background: C.n50, borderRadius: TOKENS.radius.md }}>
          <div style={{ width: 44, height: 44, background: C.n200, borderRadius: TOKENS.radius.sm }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: C.n400, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Experience</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.n900 }}>RejuvaWrap Bundle</div>
          </div>
          <ArrowCircle size={32} />
        </div>
      </div>
      <div style={{ position: "absolute", right: 48, bottom: 48, color: C.n400, fontFamily: "monospace", fontSize: 12 }}>[ lifestyle image — woman relaxing on sauna blanket ]</div>
    </div>
  </Section>
);

// ---------- 8. BADGES / INPUTS / MISC ----------
const Atoms = () => (
  <Section id="08 · Atoms" title="Badges, Inputs, Ratings, Trust Icons">
    <div style={{ display: "grid", gap: 28 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.n600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>Badges</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <span style={{ background: C.primary, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: TOKENS.radius.pill, textTransform: "uppercase" }}>Sale</span>
          <span style={{ background: C.ink, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: TOKENS.radius.pill, textTransform: "uppercase" }}>New</span>
          <span style={{ background: C.peach, color: C.primaryPressed, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: TOKENS.radius.pill, textTransform: "uppercase" }}>Best Seller</span>
          <span style={{ background: C.success, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: TOKENS.radius.pill, textTransform: "uppercase" }}>In Stock</span>
          <span style={{ background: C.warning, color: C.n900, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: TOKENS.radius.pill, textTransform: "uppercase" }}>Low Stock</span>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.n600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>Inputs</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input placeholder="Email address" style={{ padding: "12px 18px", borderRadius: TOKENS.radius.pill, border: `1.5px solid ${C.n200}`, fontFamily: TOKENS.font.body, fontSize: 14, width: 260, outline: "none" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", border: `1.5px solid ${C.n200}`, borderRadius: TOKENS.radius.pill }}>
            <Search size={16} color={C.n400} />
            <input placeholder="Search products..." style={{ border: "none", outline: "none", fontFamily: TOKENS.font.body, fontSize: 14, width: 200 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", border: `1.5px solid ${C.n200}`, borderRadius: TOKENS.radius.pill, overflow: "hidden" }}>
            <button style={{ padding: "8px 14px", border: "none", background: "#fff", cursor: "pointer", fontSize: 16 }}>−</button>
            <span style={{ padding: "0 16px", fontFamily: TOKENS.font.body, fontSize: 14, fontWeight: 600 }}>1</span>
            <button style={{ padding: "8px 14px", border: "none", background: "#fff", cursor: "pointer", fontSize: 16 }}>+</button>
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.n600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>Trust Icons</div>
        <div style={{ display: "flex", gap: 32 }}>
          {[{ i: Truck, l: "Free Shipping" }, { i: Shield, l: "2yr Warranty" }, { i: RotateCcw, l: "60-Day Returns" }, { i: Check, l: "Trusted by 2.5M" }].map(({ i: Icon, l }) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.peach, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={C.primary} />
              </div>
              <span style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 600, color: C.n900 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

// ---------- 9. CATEGORY TILES ----------
const CategoryTiles = () => {
  const cats = [
    { l: "Vibration", c: C.info }, { l: "Wellness", c: C.success },
    { l: "Recovery", c: C.primary }, { l: "Fitness", c: C.n900 },
  ];
  return (
    <Section id="09 · Category Tiles" title="Card/Category/Pill">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {cats.map((cat) => (
          <div key={cat.l} style={{ position: "relative", aspectRatio: "16/9", borderRadius: TOKENS.radius.lg, overflow: "hidden", background: `linear-gradient(135deg, ${C.n100}, ${C.n200})` }}>
            <div style={{ position: "absolute", bottom: 20, left: 20, display: "flex", alignItems: "center", gap: 0, background: cat.c, borderRadius: TOKENS.radius.pill, padding: "6px 6px 6px 20px" }}>
              <span style={{ color: "#fff", fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginRight: 14 }}>{cat.l}</span>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowRight size={14} color={cat.c} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// ---------- 10. FOOTER ----------
const Footer = () => (
  <Section id="10 · Footer" title="Footer / Full">
    <div style={{ borderRadius: TOKENS.radius.lg, overflow: "hidden" }}>
      <div style={{ background: C.primary, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
        <div style={{ color: "#fff" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>Stay in the Loop</div>
          <div style={{ fontFamily: TOKENS.font.display, fontSize: 22, fontWeight: 700 }}>Sign Up for Exclusive Offers & Wellness Insights</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input placeholder="Email" style={{ padding: "12px 18px", borderRadius: TOKENS.radius.pill, border: "none", fontSize: 14, width: 240 }} />
          <Btn variant="secondary" size="md">Sign Up</Btn>
        </div>
      </div>
      <div style={{ background: C.n900, color: "#fff", padding: "48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, background: C.primary, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Play size={14} fill="#fff" color="#fff" />
              </div>
              <span style={{ fontFamily: TOKENS.font.display, fontSize: 20, fontWeight: 700 }}>lifepro</span>
            </div>
          </div>
          {[
            { h: "Offers & Savings", l: ["Promotions", "Modified Plates", "Loyalty", "Affiliates"] },
            { h: "Community & Learn", l: ["Wellness Circle", "Community", "Blog", "How We Ship"] },
            { h: "Support", l: ["Help Center", "Contact Us", "Warranty", "Returns"] },
            { h: "My Account", l: ["Sign In", "Manage", "Dashboard", "Wellness Circle"] },
          ].map((col) => (
            <div key={col.h}>
              <div style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>{col.h}</div>
              {col.l.map((i) => <div key={i} style={{ fontSize: 13, color: C.n400, marginBottom: 8, cursor: "pointer" }}>{i}</div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

// ---------- 11. PAGE PREVIEWS ----------
const PagePreview = ({ title, w = 320 }) => (
  <div style={{ background: "#fff", borderRadius: TOKENS.radius.md, border: `1px solid ${C.n200}`, overflow: "hidden", width: w }}>
    <div style={{ padding: "10px 14px", borderBottom: `1px solid ${C.n100}`, fontFamily: TOKENS.font.body, fontSize: 12, fontWeight: 600, color: C.n900 }}>{title}</div>
    <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 6, height: 420, overflow: "hidden" }}>
      <div style={{ height: 8, background: C.n900, borderRadius: 2 }} />
      <div style={{ height: 18, background: C.n100, borderRadius: 2 }} />
      <div style={{ height: 120, background: `linear-gradient(135deg, ${C.peach}, ${C.peri})`, borderRadius: 4 }} />
      <div style={{ height: 14, background: C.peri, borderRadius: 2 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 4 }}>
        {[1, 2, 3, 4].map((i) => <div key={i} style={{ aspectRatio: "3/4", background: C.n100, borderRadius: 4 }} />)}
      </div>
      <div style={{ height: 10, background: C.primary, borderRadius: 2, width: "40%", alignSelf: "center" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        {[1, 2].map((i) => <div key={i} style={{ aspectRatio: "16/9", background: C.n100, borderRadius: 4 }} />)}
      </div>
      <div style={{ height: 40, background: C.primary, borderRadius: 4, marginTop: "auto" }} />
      <div style={{ height: 60, background: C.n900, borderRadius: 4 }} />
    </div>
  </div>
);

const Pages = () => (
  <Section id="11 · Page Frames" title="Page Previews" desc="Each page exists as Desktop (1440) + Mobile (390) in Figma.">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
      {["01-Homepage", "02-Collection", "03-PDP", "04-Cart", "05-Checkout", "06-ThankYou", "07-About", "08-Contact", "09-404"].map((p) => <PagePreview key={p} title={p} />)}
    </div>
  </Section>
);

// ---------- APP ----------
export default function LifeproDesignSystem() {
  const sections = [
    { id: "01 · Colors", label: "Colors" },
    { id: "02 · Typography", label: "Typography" },
    { id: "03 · Foundations", label: "Foundations" },
    { id: "04 · Buttons", label: "Buttons" },
    { id: "05 · Product Card", label: "Product Card" },
    { id: "06 · Navigation", label: "Navigation" },
    { id: "07 · Hero", label: "Hero" },
    { id: "08 · Atoms", label: "Atoms" },
    { id: "09 · Category Tiles", label: "Categories" },
    { id: "10 · Footer", label: "Footer" },
    { id: "11 · Page Frames", label: "Pages" },
  ];

  return (
    <div style={{ fontFamily: TOKENS.font.body, background: C.n50, minHeight: "100vh", color: C.n900 }}>
      <style>{`
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Regular.woff") format("woff"); font-weight: 400; font-style: normal; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Regular Italic.woff") format("woff"); font-weight: 400; font-style: italic; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Medium.woff") format("woff"); font-weight: 500; font-style: normal; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Medium Italic.woff") format("woff"); font-weight: 500; font-style: italic; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal SemiBold.woff") format("woff"); font-weight: 600 700; font-style: normal; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal SemiBold Italic.woff") format("woff"); font-weight: 600 700; font-style: italic; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Extrablack.woff") format("woff"); font-weight: 800 900; font-style: normal; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Extrablack Italic.woff") format("woff"); font-weight: 800 900; font-style: italic; font-display: swap; }
        @font-face { font-family: "area-normal"; src: url("/fonts/Area Normal Thin Italic.woff") format("woff"); font-weight: 100 300; font-style: italic; font-display: swap; }
      `}</style>

      {/* Header bar */}
      <div style={{ background: C.n900, color: "#fff", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: C.primary, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Play size={16} fill="#fff" color="#fff" />
          </div>
          <div>
            <div style={{ fontFamily: TOKENS.font.display, fontSize: 18, fontWeight: 700 }}>Lifepro · Design System</div>
            <div style={{ fontSize: 11, color: C.n400, fontFamily: "monospace" }}>v1.0 · Figma-Ready Canvas</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{ fontSize: 12, color: C.n400, padding: "6px 10px", borderRadius: 6, textDecoration: "none", fontWeight: 500 }}>{s.label}</a>
          ))}
        </div>
      </div>

      {/* Hero intro */}
      <div style={{ padding: "64px 32px", background: `linear-gradient(135deg, ${C.peach} 0%, ${C.n0} 100%)`, borderBottom: `1px solid ${C.n200}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontFamily: TOKENS.font.body, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.primary, marginBottom: 12 }}>Shopify Design Package</div>
          <h1 style={{ fontFamily: TOKENS.font.display, fontSize: 56, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: C.n900, margin: 0, maxWidth: 900 }}>Lifepro — Complete Design System Canvas</h1>
          <p style={{ fontFamily: TOKENS.font.body, fontSize: 18, color: C.n600, marginTop: 20, maxWidth: 720, lineHeight: 1.55 }}>Every token, component, and page frame needed to recreate the Lifepro e-commerce experience in Figma. Edit <code style={{ background: C.n100, padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>TOKENS</code> at the top of the file — everything cascades.</p>
        </div>
      </div>

      <Palette />
      <Typography />
      <Foundations />
      <Buttons />
      <NavBar />
      <Hero />
      <ProductCards />
      <CategoryTiles />
      <Atoms />
      <Footer />
      <Pages />

      <div style={{ padding: "32px", textAlign: "center", color: C.n400, fontSize: 12, fontFamily: "monospace" }}>
        Lifepro Design System · Shopify Dawn-based · Tokens mirrored to Figma Variables
      </div>
    </div>
  );
}