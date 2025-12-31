const items = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "hobbies", label: "Hobbies" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-semibold tracking-tight">
          Portfolio
        </a>
        <div className="flex gap-4 text-sm">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="text-black/70 hover:text-black transition"
            >
              {it.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}