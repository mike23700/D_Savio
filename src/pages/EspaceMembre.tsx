import { useState } from "react";
import { Link } from "react-router";
import { HOMELIES } from "@/data/content";

type Mode = "login" | "register";
type Tab = "profil" | "journal" | "homelies" | "achats" | "donations";

const FAKE_ORDERS = [
  { id: "CMD-001", date: "5 sept. 2026", items: "La prière - Un guide complet", total: "7 000 FCFA", statut: "Livré" },
  { id: "CMD-002", date: "20 août 2026", items: "Chapelet x2", total: "1 000 FCFA", statut: "Livré" },
];

const FAKE_DONATIONS = [
  { id: "DON-001", date: "14 sept. 2026", montant: "5 000 FCFA", type: "Quête dominicale" },
  { id: "DON-002", date: "1 sept. 2026", montant: "10 000 FCFA", type: "Don libre" },
  { id: "DON-003", date: "15 août 2026", montant: "3 000 FCFA", type: "Projet église" },
];

export default function EspaceMembre() {
  const [mode, setMode] = useState<Mode>("login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState<Tab>("profil");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ nom: "", prenom: "", email: "", password: "", confirm: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all";
  const inputStyle = { fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#1c2340" };
  const labelStyle = { fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", fontWeight: 600 as const, color: "#374151" };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "profil", label: "Mon profil", icon: "👤" },
    { id: "journal", label: "Journal paroissial", icon: "📰" },
    { id: "homelies", label: "Homélies favorites", icon: "🎙️" },
    { id: "achats", label: "Mes achats", icon: "🛒" },
    { id: "donations", label: "Mes donations", icon: "❤️" },
  ];

  if (loggedIn) {
    return (
      <>
        <div className="relative h-48 md:h-56 flex items-end overflow-hidden">
          <img src="https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=1400&h=400&fit=crop&auto=format" alt="Espace membre" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
          <div className="relative max-w-7xl mx-auto px-6 py-8 w-full flex items-end justify-between">
            <div>
              <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}>Espace membre</h1>
              <p style={{ fontFamily: "Montserrat, sans-serif", color: "#D4AF37", fontSize: "0.85rem", marginTop: 4, fontWeight: 700 }}>
                Bienvenue, {registerForm.prenom || "Fidèle"} {registerForm.nom || ""}
              </p>
            </div>
            <button onClick={() => { setLoggedIn(false); setMode("login"); setLoginForm({ email: "", password: "" }); }}
              style={{ border: "2px solid white", color: "white", fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", fontWeight: 700 }}
              className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
              Déconnexion
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", fontWeight: 700, background: tab === t.id ? "#0B3D91" : "white", color: tab === t.id ? "white" : "#374151", border: tab === t.id ? "1px solid #0B3D91" : "1px solid #e5e7eb" }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:opacity-90 transition-all">
                <span>{t.icon}</span> {t.label}
              </button>
            ))}
          </div>

          {tab === "profil" && (
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c2340", marginBottom: 24 }}>Mon profil</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  ["Nom", registerForm.nom || "Fidèle"],
                  ["Prénom", registerForm.prenom || "De la Paroisse"],
                  ["Email", registerForm.email || loginForm.email || "membre@paroisse.cm"],
                  ["Statut", "Membre actif"],
                  ["Paroisse", "Saint Dominique Savio"],
                  ["Doyenné", "Wouri I"],
                ].map(([label, value]) => (
                  <div key={label} style={{ background: "#F5F7FA", borderRadius: 12, padding: "12px 16px" }}>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", color: "#9ca3af", fontWeight: 700, letterSpacing: "0.05em" }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#1c2340", marginTop: 4 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "journal" && (
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c2340", marginBottom: 8 }}>Journal paroissial</h2>
              <div style={{ background: "#E8F2FF", borderRadius: 12, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#6b7280" }}>Abonnement actif</div>
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#0B3D91" }}>Mensuel – Électronique</div>
                </div>
                <span style={{ background: "#27ae60", color: "white", borderRadius: 20, padding: "4px 12px", fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700 }}>Actif</span>
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#1c2340", marginBottom: 12 }}>Derniers numéros</h3>
              {[
                { num: "N°38 – 15 sept. 2026", theme: "Fête de la Croix Glorieuse" },
                { num: "N°37 – 8 sept. 2026", theme: "Nativité de la Vierge Marie" },
                { num: "N°36 – 1 sept. 2026", theme: "22e dimanche du Temps ordinaire" },
              ].map((issue) => (
                <div key={issue.num} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.83rem", fontWeight: 600, color: "#1c2340" }}>{issue.num}</div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "#6b7280" }}>{issue.theme}</div>
                  </div>
                  <button onClick={() => alert("Téléchargement du numéro...")}
                    style={{ border: "2px solid #0B3D91", color: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.72rem" }}
                    className="px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
                    📄 PDF
                  </button>
                </div>
              ))}
            </div>
          )}

          {tab === "homelies" && (
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c2340", marginBottom: 24 }}>Homélies favorites</h2>
              <div className="space-y-4">
                {HOMELIES.slice(0, 2).map((h) => (
                  <div key={h.id} className="flex gap-4 items-start p-4 rounded-xl border border-gray-100 hover:border-yellow-200 transition-all">
                    <img src={h.img} alt={h.title} className="w-20 h-14 object-cover rounded-lg" />
                    <div>
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#D4AF37", letterSpacing: "0.08em" }}>{h.date}</div>
                      <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1c2340", marginBottom: 4, lineHeight: 1.3 }}>{h.title}</h3>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "#6b7280" }}>{h.readings} · {h.duration}</p>
                      <Link to="/homelies" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#0B3D91", fontWeight: 700 }}>Écouter →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "achats" && (
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c2340", marginBottom: 24 }}>Mes achats</h2>
              <div className="space-y-3">
                {FAKE_ORDERS.map((order) => (
                  <div key={order.id} className="p-4 rounded-xl border border-gray-100 hover:border-yellow-200 transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#D4AF37" }}>{order.id}</div>
                        <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#1c2340", marginTop: 2 }}>{order.items}</div>
                        <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "#6b7280" }}>{order.date}</div>
                      </div>
                      <div className="text-right">
                        <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "#0B3D91" }}>{order.total}</div>
                        <span style={{ background: "#dcfce7", color: "#15803d", borderRadius: 20, padding: "2px 8px", fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", fontWeight: 700 }}>{order.statut}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "donations" && (
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c2340", marginBottom: 24 }}>Mes donations</h2>
              <div className="space-y-3 mb-6">
                {FAKE_DONATIONS.map((don) => (
                  <div key={don.id} className="p-4 rounded-xl border border-gray-100 hover:border-yellow-200 transition-all flex items-center justify-between">
                    <div>
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "#1c2340" }}>{don.type}</div>
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "#6b7280" }}>{don.date}</div>
                    </div>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#0B3D91" }}>{don.montant}</span>
                  </div>
                ))}
              </div>
              <Link to="/don"
                style={{ background: "#D4AF37", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                ❤️ Faire un nouveau don
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1687459730891-47dfa3217811?w=1400&h=500&fit=crop&auto=format" alt="Espace membre" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,45,107,0.92) 0%, rgba(8,45,107,0.35) 60%, transparent 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>Accueil</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#D4AF37" }}>Espace membre</span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>Espace membre</h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 6 }}>Votre espace personnel paroissial</p>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-full">
            {(["login", "register"] as const).map(m => (
              <button key={m} onClick={() => setMode(m)}
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", fontWeight: 700, background: mode === m ? "white" : "transparent", color: mode === m ? "#0B3D91" : "#6b7280", boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,0.1)" : "none" }}
                className="flex-1 py-2.5 rounded-full transition-all">
                {m === "login" ? "Connexion" : "S'inscrire"}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {mode === "login" ? (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label style={labelStyle} className="block mb-1.5">Email *</label>
                  <input required type="email" value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} placeholder="votre@email.com" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle} className="block mb-1.5">Mot de passe *</label>
                  <input required type="password" value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="••••••••" className={inputClass} style={inputStyle} />
                </div>
                <button type="submit"
                  style={{ background: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}
                  className="w-full text-white py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                  Se connecter →
                </button>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#6b7280", textAlign: "center" }}>
                  Pas encore membre ?{" "}
                  <button onClick={() => setMode("register")} style={{ color: "#0B3D91", fontWeight: 700 }}>S'inscrire</button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle} className="block mb-1.5">Nom *</label>
                    <input required value={registerForm.nom} onChange={e => setRegisterForm({ ...registerForm, nom: e.target.value })} placeholder="Nom" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle} className="block mb-1.5">Prénom *</label>
                    <input required value={registerForm.prenom} onChange={e => setRegisterForm({ ...registerForm, prenom: e.target.value })} placeholder="Prénom" className={inputClass} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} className="block mb-1.5">Email *</label>
                  <input required type="email" value={registerForm.email} onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })} placeholder="votre@email.com" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle} className="block mb-1.5">Mot de passe *</label>
                  <input required type="password" value={registerForm.password} onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })} placeholder="••••••••" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle} className="block mb-1.5">Confirmation *</label>
                  <input required type="password" value={registerForm.confirm} onChange={e => setRegisterForm({ ...registerForm, confirm: e.target.value })} placeholder="••••••••" className={inputClass} style={inputStyle} />
                </div>
                <button type="submit"
                  style={{ background: "#0B3D91", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}
                  className="w-full text-white py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                  Créer mon compte →
                </button>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#6b7280", textAlign: "center" }}>
                  Déjà membre ?{" "}
                  <button onClick={() => setMode("login")} style={{ color: "#0B3D91", fontWeight: 700 }}>Se connecter</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
