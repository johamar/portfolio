export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-black/10 overflow-hidden bg-white shadow-sm">
      <img
        src={project.image}
        alt={project.name}
        className="h-52 w-full object-cover object-top"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <div className="flex gap-3 text-sm">
            {project.links?.github && (
              <a className="underline text-black/70 hover:text-black" href={project.links.github} target="_blank">
                GitHub
              </a>
            )}
            {project.links?.demo && (
              <a className="underline text-black/70 hover:text-black" href={project.links.demo} target="_blank">
                Live
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-black/70 leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs rounded-full border border-black/10 px-3 py-1 text-black/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}