import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { content } from "../data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6">
        <Section id="about" title="About">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-semibold tracking-tight">{content.name}</h1>
              <p className="mt-2 text-black/70">{content.title}</p>
              <p className="mt-6 text-lg leading-relaxed text-black/70">{content.summary}</p>
            </div>
            <div className="rounded-2xl border border-black/10 p-6 h-fit">
              <p className="text-sm text-black/70">Location</p>
              <p className="mt-1 font-medium">{content.location}</p>

              <p className="mt-4 text-sm text-black/70">Email</p>
              <a className="mt-1 block underline text-black/80 hover:text-black" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {content.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work experience">
          <div className="grid gap-6">
            {content.work.map((w) => (
              <div key={w.role} className="rounded-2xl border border-black/10 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{w.role}</h3>
                  <span className="text-sm text-black/60">{w.period}</span>
                </div>
                <p className="mt-1 text-black/70">{w.company}</p>
                <ul className="mt-4 list-disc pl-5 text-black/70 space-y-1">
                  {w.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills & technologies">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.skills.map((s) => (
                  <span key={s} className="text-sm rounded-full border border-black/10 px-3 py-1 text-black/70">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.technologies.map((t) => (
                  <span key={t} className="text-sm rounded-full border border-black/10 px-3 py-1 text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="hobbies" title="Hobbies">
          <div className="flex flex-wrap gap-2">
            {content.hobbies.map((h) => (
              <span key={h} className="text-sm rounded-full border border-black/10 px-3 py-1 text-black/70">
                {h}
              </span>
            ))}
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}