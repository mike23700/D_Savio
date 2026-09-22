import { useState } from "react";
import { Link } from "react-router";

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 inline ml-1">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const GALLERY_IMGS = [
  { src: "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=600&h=400&fit=crop&auto=format", alt: "Communauté en prière", cat: "Célébrations" },
  { src: "https://images.unsplash.com/photo-1535361251-cbe9d0d2357d?w=600&h=400&fit=crop&auto=format", alt: "Rassemblement communautaire", cat: "Communauté" },
  { src: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=600&h=400&fit=crop&auto=format", alt: "Cierges en prière", cat: "Célébrations" },
  { src: "https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=600&h=400&fit=crop&auto=format", alt: "Autel de l'église", cat: "Église" },
  { src: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=600&h=400&fit=crop&auto=format", alt: "Prière en église", cat: "Célébrations" },
  { src: "https://images.unsplash.com/photo-1774685398923-ba001b371579?w=600&h=400&fit=crop&auto=format", alt: "Catéchèse", cat: "Catéchèse" },
  { src: "https://images.unsplash.com/photo-1763517789508-f23012039417?w=600&h=400&fit=crop&auto=format", alt: "Formation spirituelle", cat: "Formation" },
  { src: "https://images.unsplash.com/photo-1573591012925-76dd1f406bd1?w=600&h=400&fit=crop&auto=format", alt: "Adoration", cat: "Célébrations" },
];

const BOUTIQUE = [
  { nom: "Bible de Jérusalem", prix: "12 000 FCFA", img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=300&h=300&fit=crop&auto=format", desc: "Bible complète avec notes et commentaires" },
  { nom: "Chapelet en bois d'olivier", prix: "3 500 FCFA", img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=300&h=300&fit=crop&auto=format", desc: "Chapelet béni, fabriqué en Terre Sainte" },
  { nom: "Missel du dimanche 2026", prix: "5 000 FCFA", img: "https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=300&h=300&fit=crop&auto=format", desc: "Toutes les lectures et prières de l'année liturgique" },
  { nom: "Image Saint Dominique Savio", prix: "1 000 FCFA", img: "https://images.unsplash.com/photo-1763517789508-f23012039417?w=300&h=300&fit=crop&auto=format", desc: "Image bénite avec prière au patron de la paroisse" },
];

const CATS_GALLERY = ["Tous", "Célébrations", "Communauté", "Église", "Catéchèse", "Formation"];

export default function Mediatheque() {
  const [tab, setTab] = useState<"galerie" | "videos" | "boutique">("galerie");
  const [galleryFilter, setGalleryFilter] = useState("Tous");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tabs = [
    { id: "galerie", label: "🖼️ Galerie photos" },
    { id: "videos", label: "▶️ Vidéos" },
    { id: "boutique", label: "🛍️ Boutique" },
  ] as const;

  const filteredImgs = GALLERY_IMGS.filter(img => galleryFilter === "Tous" || img.cat === galleryFilter);

  return (
    <>
      <div className="relative h-64 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=1400&h=500&fit=crop&auto=format"
          alt="Médiathèque" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Accueil</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#D4AF37" }}>Médiathèque</span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>Médiathèque</h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 6 }}>
            Photos, vidéos et ressources de la paroisse
          </p>
        </div>
      </div>

      {/* Tabs */}
      <section style={{ background: "#F5F7FA" }} className="px-4 py-6 sticky top-[73px] z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", fontWeight: 700, background: tab === t.id ? "#0B3D91" : "white", color: tab === t.id ? "white" : "#374151", border: tab === t.id ? "1px solid #0B3D91" : "1px solid #e5e7eb" }}
              className="px-5 py-2.5 rounded-full hover:opacity-90 transition-all">{t.label}
            </button>
          ))}
        </div>
      </section>

      {/* Galerie */}
      {tab === "galerie" && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {CATS_GALLERY.map(cat => (
                <button key={cat} onClick={() => setGalleryFilter(cat)}
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.76rem", fontWeight: 700, background: galleryFilter === cat ? "#0B3D91" : "#F5F7FA", color: galleryFilter === cat ? "white" : "#374151", border: `1px solid ${galleryFilter === cat ? "#0B3D91" : "#e5e7eb"}` }}
                  className="px-4 py-2 rounded-full hover:opacity-90 transition-all">{cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredImgs.map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square"
                  onClick={() => setLightbox(img.src)}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                  </div>
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", fontWeight: 700, background: "rgba(8,45,107,0.85)", color: "#D4AF37", letterSpacing: "0.08em" }}
                    className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full">{img.cat.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
          {lightbox && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
              <img src={lightbox.replace("w=600&h=400", "w=1200&h=800")} alt="Vue agrandie" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
              <button className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300" onClick={() => setLightbox(null)}>✕</button>
            </div>
          )}
        </section>
      )}

      {/* Vidéos */}
      {tab === "videos" && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center py-20">
              <div className="text-6xl mb-5">▶️</div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c2340" }}>Chaîne YouTube</h3>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", color: "#6b7280", marginTop: 8, lineHeight: 1.7, maxWidth: 450, margin: "8px auto 0" }}>
                Retrouvez nos messes en direct, nos homélies et les temps forts de la paroisse sur notre chaîne YouTube.
              </p>
              <a href="#" target="_blank" rel="noreferrer"
                style={{ background: "#ff0000", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.88rem" }}
                className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full mt-8 hover:opacity-90 transition-opacity">
                ▶️ Voir la chaîne YouTube
              </a>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {["Messe dominicale – 14 sept. 2026", "Homélie de la Croix Glorieuse", "Catéchèse adultes – Session 1"].map((title, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl overflow-hidden cursor-pointer group">
                    <div className="relative h-36 bg-gray-200 flex items-center justify-center">
                      <img src={GALLERY_IMGS[i % GALLERY_IMGS.length].src} alt={title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontSize: "1.3rem", marginLeft: 3 }}>▶</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#1c2340", lineHeight: 1.4 }}>{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Boutique */}
      {tab === "boutique" && (
        <section id="boutique" className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">LIBRAIRIE PAROISSIALE</div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c2340" }}>Boutique</h2>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", color: "#6b7280", marginTop: 4 }}>
                Livres, objets religieux et articles disponibles au secrétariat.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {BOUTIQUE.map((p) => (
                <div key={p.nom} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-yellow-200 transition-all group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.img} alt={p.nom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "0.9rem", fontWeight: 700, color: "#1c2340", lineHeight: 1.3, marginBottom: 4 }}>{p.nom}</h3>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.74rem", color: "#6b7280", lineHeight: 1.6, marginBottom: 10 }}>{p.desc}</p>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "#0B3D91" }}>{p.prix}</div>
                    <button style={{ border: "2px solid #D4AF37", color: "#D4AF37", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.74rem" }}
                      className="w-full mt-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">
                      Commander au secrétariat
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center">
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#374151", lineHeight: 1.7 }}>
                📍 Nos articles sont disponibles au <strong>secrétariat paroissial</strong> du lundi au vendredi de 8h à 13h et de 15h30 à 18h30. Pour les commandes, contactez-nous.
              </p>
              <Link to="/contact"
                style={{ background: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.83rem" }}
                className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full mt-4 hover:opacity-90">
                Nous contacter <IconArrow />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
