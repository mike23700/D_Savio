import { useState } from "react";
import { Link } from "react-router";

const NIVEAUX = [
  { nom: "Éveil à la foi", age: "5-6 ans", icon: "🌱", desc: "Introduction douce à la foi chrétienne pour les tout-petits. Découverte de Dieu à travers des histoires, des chants et des activités adaptées.", duree: "1 an" },
  { nom: "1ère Année", age: "7-8 ans", icon: "📖", desc: "Approfondissement de la foi, préparation à la première réconciliation et découverte des sacrements.", duree: "1 an" },
  { nom: "2e Année", age: "9-10 ans", icon: "✝️", desc: "Préparation à la première communion. Découverte de l'Eucharistie et de sa place dans la vie chrétienne.", duree: "1 an" },
  { nom: "3e Année", age: "11-12 ans", icon: "🕊️", desc: "Approfondissement de la vie chrétienne, préparation à la confirmation et engagement dans la communauté.", duree: "1 an" },
  { nom: "Préparation au Mariage", age: "Adultes", icon: "💍", desc: "Parcours complet pour les couples souhaitant se marier à l'Église. Sessions collectives et entretiens personnels.", duree: "6 mois" },
];

export default function Catechese() {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", telephone: "", niveau: "", age: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all";
  const inputStyle = { fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#1c2340" };
  const labelStyle = { fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", fontWeight: 600 as const, color: "#374151" };

  return (
    <>
      <div className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1774685398923-ba001b371579?w=1400&h=500&fit=crop&auto=format" alt="Catéchèse" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Accueil</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <Link to="/se-nourrir" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Se Nourrir</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#D4AF37" }}>Catéchèse</span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>Catéchèse</h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 6 }}>Formation dans la foi pour tous les âges</p>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">FORMATION</div>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1c2340", marginBottom: 8 }}>Niveaux de catéchèse</h2>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", color: "#6b7280", marginBottom: 32, lineHeight: 1.7 }}>
            Notre programme de catéchèse accompagne les enfants, les jeunes et les adultes dans leur cheminement de foi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {NIVEAUX.map((niveau) => (
              <div key={niveau.nom} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all">
                <span style={{ fontSize: "2rem", display: "block", marginBottom: 12 }}>{niveau.icon}</span>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.1em", marginBottom: 4 }}>{niveau.age.toUpperCase()}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#1c2340", marginBottom: 8 }}>{niveau.nom}</h3>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.7, marginBottom: 12 }}>{niveau.desc}</p>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#0B3D91", background: "#E8F2FF", padding: "2px 10px", borderRadius: 20 }}>
                  Durée : {niveau.duree}
                </span>
              </div>
            ))}
          </div>

          {/* Inscription */}
          <div className="max-w-2xl mx-auto">
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">INSCRIPTION 2026-2027</div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c2340", marginBottom: 24 }}>Inscriptions ouvertes</h2>

            {submitted ? (
              <div className="text-center py-10 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-5xl mb-4">✅</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1c2340" }}>Inscription enregistrée !</h3>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", color: "#6b7280", marginTop: 8 }}>
                  Nous vous contacterons pour confirmer l'inscription et vous communiquer le calendrier.
                </p>
                <button onClick={() => setSubmitted(false)}
                  style={{ background: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.83rem" }}
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full mt-6 hover:opacity-90 transition-opacity">
                  Nouvelle inscription
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Nom *</label>
                      <input required value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="Nom" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Prénom(s) *</label>
                      <input required value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })} placeholder="Prénom" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Email</label>
                      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Téléphone *</label>
                      <input required value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} placeholder="(+237) 6XX XXX XXX" className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle} className="block mb-1.5">Âge de l'enfant (ou "adulte") *</label>
                    <input required value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} placeholder="Ex: 8 ans, Adulte" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle} className="block mb-1.5">Niveau souhaité *</label>
                    <select required value={form.niveau} onChange={e => setForm({ ...form, niveau: e.target.value })} className={inputClass} style={inputStyle}>
                      <option value="">Sélectionner un niveau...</option>
                      {NIVEAUX.map(n => <option key={n.nom} value={n.nom}>{n.nom} ({n.age})</option>)}
                    </select>
                  </div>
                  <button type="submit"
                    style={{ background: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}
                    className="w-full text-white py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                    S'inscrire à la catéchèse ✝
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
