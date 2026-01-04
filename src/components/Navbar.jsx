import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const items = [
  { id: "about", key: "nav.about" },
  { id: "projects", key: "nav.projects" },
  { id: "experience", key: "nav.experience" },
  { id: "skills", key: "nav.skills" },
  { id: "hobbies", key: "nav.hobbies" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const lang = i18n.resolvedLanguage || i18n.language || "";
  const isNb = lang.startsWith("nb");

  const toggleLanguage = () => {
    i18n.changeLanguage(isNb ? "en" : "nb");
    setOpen(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-semibold tracking-tight">
          {t("brand.portfolio")}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <div className="flex gap-4">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className="text-black/70 hover:text-black transition"
              >
                {t(it.key)}
              </a>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="rounded-full border border-black/10 px-3 py-1 text-black/70 hover:text-black transition"
            aria-label={t("nav.toggleLanguage")}
          >
            {isNb ? "English" : "Norsk"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={t("nav.toggleMenu") || "Toggle menu"}
            className="rounded-full border border-black/10 p-2 text-black/70 hover:text-black transition"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className="block text-black/80 py-2"
              >
                {t(it.key)}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="mt-2 self-start rounded-full border border-black/10 px-3 py-1 text-black/70 hover:text-black transition"
              aria-label={t("nav.toggleLanguage")}
            >
              {isNb ? "English" : "Norsk"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}