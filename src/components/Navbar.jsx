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

  const isNb = (i18n.resolvedLanguage || i18n.language || "").startsWith("nb");

  const toggleLanguage = () => {
    i18n.changeLanguage(isNb ? "en" : "nb");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-semibold tracking-tight">
          {t("brand.portfolio")}
        </a>

        <div className="flex items-center gap-5 text-sm">
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
      </nav>
    </header>
  );
}