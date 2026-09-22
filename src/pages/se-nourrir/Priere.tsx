import { Link } from "react-router";

export default function Priere() {
  return (
    <>
      <div className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1573591012925-76dd1f406bd1?w=1400&h=500&fit=crop&auto=format" alt="Prière et Méditation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Accueil</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <Link to="/se-nourrir" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Se Nourrir</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#D4AF37" }}>Prière & Méditation</span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>Prière & Méditation</h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 6 }}>Nourrir sa foi par la prière quotidienne</p>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.15em" }} className="mb-2">VIE SPIRITUELLE</div>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1c2340", marginBottom: 32 }}>Temps de prière à la paroisse</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "🕯️", title: "Adoration eucharistique", time: "Lun–Ven après la messe de 06h30 jusqu'à 18h30", desc: "Temps silencieux de contemplation devant le Saint-Sacrement exposé." },
              { icon: "📿", title: "Chapelet", time: "Chaque soir à 18h00", desc: "Prière mariale en commun, suivie du partage sur l'Évangile du jour." },
              { icon: "🕊️", title: "Adoration nocturne", time: "Chaque lundi et 1er vendredi du mois", desc: "Nuit de prière, louange et intercession pour la paroisse et le monde." },
              { icon: "🙏", title: "Groupes de prière", time: "Selon le calendrier", desc: "Différents groupes de prière se réunissent régulièrement dans la paroisse." },
              { icon: "📖", title: "Lectio Divina", time: "Mercredi matin", desc: "Lecture méditée de la Parole de Dieu, selon la méthode de la Lectio Divina." },
              { icon: "✝️", title: "Chemin de croix", time: "Vendredi en Carême", desc: "Prière du chemin de croix chaque vendredi pendant le temps de Carême." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all">
                <span style={{ fontSize: "2rem", display: "block", marginBottom: 12 }}>{item.icon}</span>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#1c2340", marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#0B3D91", marginBottom: 8 }}>{item.time}</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#0B3D91" }} className="rounded-2xl p-8">
            <blockquote style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontStyle: "italic", color: "white", lineHeight: 1.7, textAlign: "center" }}>
              "Veillez et priez, afin de ne pas entrer en tentation. L'esprit est ardent, mais la chair est faible."
            </blockquote>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", textAlign: "center", marginTop: 12 }}>— Matthieu 26,41</p>
          </div>
        </div>
      </section>
    </>
  );
}
