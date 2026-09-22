import { useState } from "react";
import { Link } from "react-router";

type Statut = "En cours" | "Terminé";

interface Projet {
  id: number;
  titre: string;
  desc: string;
  statut: Statut;
  objectif: number;
  collecte: number;
  img: string;
  details: string;
}

const PROJETS: Projet[] = [
  {
    id: 1,
    titre: "Rénovation de l'église principale",
    desc: "Travaux de rénovation de la toiture, des vitraux et de la façade de notre église.",
    statut: "En cours",
    objectif: 15000000,
    collecte: 9200000,
    img: "https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=600&h=400&fit=crop&auto=format",
    details: "Ce projet vise à restaurer notre église afin d'assurer sa pérennité pour les générations futures. Les travaux concernent principalement la toiture, les vitraux et la façade extérieure. La rénovation permettra également d'améliorer l'acoustique de l'église pour les célébrations liturgiques.",
  },
  {
    id: 2,
    titre: "Construction de salles de catéchèse",
    desc: "Construction de 4 nouvelles salles pour accueillir les enfants de catéchèse dans de meilleures conditions.",
    statut: "En cours",
    objectif: 8000000,
    collecte: 3500000,
    img: "https://images.unsplash.com/photo-1774685398923-ba001b371579?w=600&h=400&fit=crop&auto=format",
    details: "Le nombre croissant d'enfants inscrits à la catéchèse nécessite la construction de nouvelles salles. Ce projet prévoit 4 salles polyvalentes équipées, pouvant accueillir 30 enfants chacune. Les salles seront également utilisées pour les réunions de mouvements et les formations.",
  },
  {
    id: 3,
    titre: "Forage d'eau",
    desc: "Installation d'un forage pour approvisionner la paroisse et les familles environnantes en eau potable.",
    statut: "Terminé",
    objectif: 5000000,
    collecte: 5000000,
    img: "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=600&h=400&fit=crop&auto=format",
    details: "Le projet de forage a été réalisé avec succès. La paroisse dispose maintenant d'une source d'eau potable accessible à tous, bénéficiant à l'ensemble de la communauté paroissiale et aux familles environnantes. Ce projet a été financé grâce à la générosité de nos paroissiens.",
  },
  {
    id: 4,
    titre: "Salle multifonctionnelle",
    desc: "Construction d'une grande salle pour les réunions, fêtes paroissiales et activités communautaires.",
    statut: "En cours",
    objectif: 20000000,
    collecte: 4800000,
    img: "https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=600&h=400&fit=crop&auto=format",
    details: "Cette salle multifonctionnelle accueillera les grandes réunions paroissiales, les fêtes communautaires, les formations et les activités culturelles. D'une capacité de 500 personnes, elle sera équipée d'une cuisine, de sanitaires et d'un système audiovisuel moderne.",
  },
  {
    id: 5,
    titre: "Grotte Mariale",
    desc: "Rénovation et embellissement de la grotte mariale pour la prière et les pèlerinages.",
    statut: "Terminé",
    objectif: 3000000,
    collecte: 3000000,
    img: "https://images.unsplash.com/photo-1631648859463-a42e6ce6d1e4?w=600&h=400&fit=crop&auto=format",
    details: "La grotte mariale a été entièrement rénovée : nouvelle toiture, éclairage, aménagement paysager et chemin d'accès. Ce lieu de prière est désormais accessible à tous et accueille régulièrement des célébrations mariales et des groupes de prière.",
  },
];

function formatMontant(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default function Projets() {
  const [filter, setFilter] = useState<"Tous" | Statut>("Tous");
  const [selected, setSelected] = useState<Projet | null>(null);

  const filtered = PROJETS.filter(p => filter === "Tous" || p.statut === filter);

  return (
    <>
      <div className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1573591013318-b942d6ea1092?w=1400&h=500&fit=crop&auto=format" alt="Projets" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Accueil</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <Link to="/vie-paroissiale" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Vie Paroissiale</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#D4AF37" }}>Projets</span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>Projets paroissiaux</h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 6 }}>Construire ensemble l'avenir de notre paroisse</p>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {(["Tous", "En cours", "Terminé"] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", fontWeight: 700, background: filter === f ? "#0B3D91" : "#F5F7FA", color: filter === f ? "white" : "#374151", border: `1px solid ${filter === f ? "#0B3D91" : "#e5e7eb"}` }}
                className="px-5 py-2.5 rounded-full hover:opacity-90 transition-all">{f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((projet) => {
              const pct = Math.min(100, Math.round((projet.collecte / projet.objectif) * 100));
              return (
                <div key={projet.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all cursor-pointer" onClick={() => setSelected(projet)}>
                  <div className="relative h-44 overflow-hidden">
                    <img src={projet.img} alt={projet.titre} className="w-full h-full object-cover" />
                    <span style={{ position: "absolute", top: 12, right: 12, background: projet.statut === "Terminé" ? "#27ae60" : "#D4AF37", borderRadius: 20, padding: "4px 12px", fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "white" }}>
                      {projet.statut}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#1c2340", marginBottom: 6, lineHeight: 1.3 }}>{projet.titre}</h3>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.6, marginBottom: 16 }}>{projet.desc}</p>

                    <div className="mb-2 flex justify-between">
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#6b7280" }}>Collecte</span>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#0B3D91" }}>{pct}%</span>
                    </div>
                    <div style={{ background: "#e5e7eb", borderRadius: 20, height: 8, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: projet.statut === "Terminé" ? "#27ae60" : "#0B3D91", borderRadius: 20, transition: "width 0.5s ease" }} />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", color: "#6b7280" }}>{formatMontant(projet.collecte)}</span>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", color: "#9ca3af" }}>/ {formatMontant(projet.objectif)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-52 overflow-hidden rounded-t-2xl">
              <img src={selected.img} alt={selected.titre} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.9) 0%, transparent 50%)" }} />
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all">✕</button>
              <span style={{ position: "absolute", top: 12, left: 12, background: selected.statut === "Terminé" ? "#27ae60" : "#D4AF37", borderRadius: 20, padding: "4px 12px", fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "white" }}>
                {selected.statut}
              </span>
            </div>
            <div className="p-6">
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c2340", marginBottom: 12 }}>{selected.titre}</h2>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.8, marginBottom: 20 }}>{selected.details}</p>
              <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6b7280" }}>Objectif</span>
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#1c2340" }}>{formatMontant(selected.objectif)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6b7280" }}>Collecté</span>
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#0B3D91" }}>{formatMontant(selected.collecte)}</span>
                </div>
                <div style={{ background: "#e5e7eb", borderRadius: 20, height: 10, overflow: "hidden", marginTop: 8 }}>
                  <div style={{ width: `${Math.min(100, Math.round((selected.collecte / selected.objectif) * 100))}%`, height: "100%", background: selected.statut === "Terminé" ? "#27ae60" : "#0B3D91", borderRadius: 20 }} />
                </div>
              </div>
              <div className="flex gap-3">
                <Link to="/don"
                  style={{ background: "#D4AF37", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.83rem", flex: 1, textAlign: "center" }}
                  className="text-white py-3 rounded-xl hover:opacity-90 transition-opacity block">
                  ❤️ Soutenir ce projet
                </Link>
                <button
                  onClick={() => alert("Téléchargement du rapport PDF...")}
                  style={{ border: "2px solid #0B3D91", color: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.83rem" }}
                  className="px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                  📄 PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
