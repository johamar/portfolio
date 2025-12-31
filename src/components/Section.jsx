export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-3 h-px w-full bg-black/10" />
      </div>
      {children}
    </section>
  );
}