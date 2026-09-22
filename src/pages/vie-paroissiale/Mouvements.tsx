import { useState } from "react";
import { Link } from "react-router";

type Tab = "conseils" | "mouvements" | "chorales" | "cev";

export default function Mouvements() {
  const [tab, setTab] = useState<Tab>("conseils");

  const tabs: { id: Tab; label: string }[] = [
    { id: "conseils", label: "🏛️ Conseils" },
    { id: "mouvements", label: "✋ Mouvements" },
    { id: "chorales", label: "🎵 Chorales" },
    { id: "cev", label: "🏘️ CEV" },
  ];

  return (
    <>
      <div className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1535361251-cbe9d0d2357d?w=1400&h=500&fit=crop&auto=format" alt="Mouvements & Groupes" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Accueil</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <Link to="/vie-paroissiale" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Vie Paroissiale</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#D4AF37" }}>Mouvements & Groupes</span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>Mouvements & Groupes</h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 6 }}>La vie communautaire de notre paroisse</p>
        </div>
      </div>

      <section style={{ background: "#F5F7FA" }} className="px-4 py-6 sticky top-[73px] z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", fontWeight: 700, background: tab === t.id ? "#0B3D91" : "white", color: tab === t.id ? "white" : "#374151", border: tab === t.id ? "1px solid #0B3D91" : "1px solid #e5e7eb" }}
              className="px-5 py-2.5 rounded-full hover:opacity-90 transition-all">
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {tab === "conseils" && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">GOUVERNANCE</div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1c2340", marginBottom: 32 }}>Les Conseils paroissiaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🏛️",
                  title: "Conseil Pastoral",
                  desc: "Le Conseil Pastoral réunit le clergé et les représentants laïcs de la paroisse. Il examine les besoins d'évangélisation de la communauté et propose des orientations pour la vie paroissiale. Il est présidé par le curé.",
                  details: ["Réunit clergé et représentants laïcs", "Examine les besoins d'évangélisation", "Propose des orientations pastorales", "Présidé par le curé"],
                },
                {
                  icon: "💰",
                  title: "Conseil des Affaires Économiques",
                  desc: "Le Conseil des Affaires Économiques assure la gestion des biens et finances paroissiaux. Il est un signe de la mission de l'Église et garantit la transparence et la bonne gestion des ressources au service de la communauté.",
                  details: ["Gestion des biens paroissiaux", "Suivi des finances", "Transparence et bonne gestion", "Service de la mission de l'Église"],
                },
              ].map((conseil) => (
                <div key={conseil.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all">
                  <span style={{ fontSize: "2.5rem", display: "block", marginBottom: 16 }}>{conseil.icon}</span>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1c2340", marginBottom: 12 }}>{conseil.title}</h3>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.8, marginBottom: 20 }}>{conseil.desc}</p>
                  <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "12px 16px" }}>
                    {conseil.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 py-1.5">
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#D4AF37", flexShrink: 0 }} />
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#6b7280" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "mouvements" && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">ASSOCIATIONS</div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1c2340", marginBottom: 32 }}>Mouvements de la paroisse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "👨‍👩‍👧", title: "Mouvements adultes", desc: "Groupes pour les adultes de la paroisse souhaitant approfondir leur foi et s'engager au service de la communauté.", color: "#0B3D91" },
                { icon: "👦", title: "Mouvements jeunes", desc: "Groupes pour les jeunes de la paroisse : scouts, JEC, MJC et autres mouvements d'apostolat jeunesse.", color: "#D4AF37" },
                { icon: "✝️", title: "Groupes liturgiques", desc: "Au service de la liturgie paroissiale : servants de messe, lecteurs, chantres et autres ministres.", color: "#0B3D91" },
                { icon: "🌍", title: "Communautés du Grand Nord", desc: "Communauté originaire du Nord-Cameroun, unie dans la foi et la fraternité au sein de notre paroisse.", color: "#D4AF37" },
              ].map((m) => (
                <div key={m.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all flex gap-5">
                  <div style={{ width: 56, height: 56, background: m.color === "#0B3D91" ? "#E8F2FF" : "#FDF8E7", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                    {m.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#1c2340", marginBottom: 8 }}>{m.title}</h3>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "chorales" && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">MUSIQUE SACRÉE</div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1c2340", marginBottom: 32 }}>Les Chorales</h2>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: 16 }}>🎵</span>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1c2340", marginBottom: 12 }}>Le chant liturgique</h3>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.8 }}>
                La chorale paroissiale est un ensemble vocal dont les membres — les choristes — chantent collectivement les différentes parties musicales de la liturgie. Par leur service, ils embellissent les célébrations et aident l'assemblée à prier et louer Dieu.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: "🎼", title: "Chorale principale", desc: "Anime la messe de 11h00 et les grandes fêtes liturgiques." },
                { icon: "🎹", title: "Chorale des jeunes", desc: "Animent les messes dominicales du soir et les rassemblements jeunesse." },
                { icon: "🎸", title: "Schola gregorienne", desc: "Chant grégorien et musique sacrée classique pour les occasions spéciales." },
              ].map((c) => (
                <div key={c.title} className="bg-blue-50 rounded-xl p-5 border border-blue-100 text-center">
                  <span style={{ fontSize: "1.8rem", display: "block", marginBottom: 10 }}>{c.icon}</span>
                  <h4 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "#1c2340", marginBottom: 6, fontSize: "0.95rem" }}>{c.title}</h4>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#6b7280", lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-yellow-50 rounded-xl p-5 border border-yellow-100">
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#92400e", lineHeight: 1.7 }}>
                🎵 <strong>Rejoindre une chorale :</strong> Toute personne aimant le chant est la bienvenue. Les répétitions ont lieu en semaine. Renseignez-vous au secrétariat paroissial.
              </p>
            </div>
          </div>
        </section>
      )}

      {tab === "cev" && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">COMMUNAUTÉS</div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1c2340", marginBottom: 12 }}>Communautés Ecclésiales Vivantes (CEV)</h2>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
              Les CEV sont de petites communautés de quartier qui permettent aux fidèles de vivre leur foi ensemble au plus proche de leur lieu de vie. Elles forment la base vivante de notre paroisse.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                { icon: "🙏", title: "Prière communautaire", desc: "Chapelet, lecture de la Parole, partage en petits groupes." },
                { icon: "❤️", title: "Solidarité", desc: "Entraide entre membres, visite des malades et des personnes seules." },
                { icon: "📖", title: "Formation", desc: "Lecture et partage de la Parole de Dieu en contexte local." },
                { icon: "🌿", title: "Évangélisation", desc: "Témoignage et annonce de l'Évangile dans le quartier." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-yellow-200 hover:shadow-sm transition-all flex gap-4">
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "#1c2340", marginBottom: 4, fontSize: "0.95rem" }}>{item.title}</h4>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center">
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", color: "#374151", lineHeight: 1.7 }}>
                Pour rejoindre une CEV de votre quartier, inscrivez-vous au registre paroissial ou contactez le secrétariat.
              </p>
              <Link to="/vie-paroissiale/registre"
                style={{ background: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.83rem" }}
                className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full mt-4 hover:opacity-90 transition-opacity">
                S'inscrire au registre →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
