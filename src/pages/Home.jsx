import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { contentBase } from "../data/contentBase";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const projectsT = t("projects", { returnObjects: true });
  const workT = t("work", { returnObjects: true });
  const hobbiesT = t("hobbies", { returnObjects: true });

  // map translated projects -> base projects by key/order
  const projects = contentBase.projects.map((p, idx) => ({
    ...p,
    name: projectsT?.[idx]?.name ?? p.key,
    description: projectsT?.[idx]?.description ?? ""
  }));

  const work = workT ?? [];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6">
        <Section id="about" title={t("nav.about")}>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-semibold tracking-tight">{t("profile.name")}</h1>
              <p className="mt-2 text-black/70">{t("profile.title")}</p>
              <p className="mt-6 text-lg leading-relaxed text-black/70">{t("profile.summary")}</p>
            </div>

            <div className="rounded-2xl border border-black/10 p-6 h-fit">
              <p className="text-sm text-black/70">{t("labels.location")}</p>
              <p className="mt-1 font-medium">{t("profile.location")}</p>

              <p className="mt-4 text-sm text-black/70">{t("labels.email")}</p>
              <a className="mt-1 block underline text-black/80 hover:text-black" href={`mailto:${contentBase.email}`}>
                {contentBase.email}
              </a>
            </div>
          </div>
        </Section>

        <Section id="projects" title={t("nav.projects")}>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.key} project={p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title={t("nav.experience")}>
          <div className="grid gap-6">
            {work.map((w) => (
              <div key={w.role} className="rounded-2xl border border-black/10 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{w.role}</h3>
                  <span className="text-sm text-black/60">{w.period}</span>
                </div>
                <p className="mt-1 text-black/70">{w.company}</p>
                <ul className="mt-4 list-disc pl-5 text-black/70 space-y-1">
                  {w.points?.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title={t("nav.skills")}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold">{t("labels.skills")}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {contentBase.skills.map((s) => (
                  <span key={s} className="text-sm rounded-full border border-black/10 px-3 py-1 text-black/70">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold">{t("labels.technologies")}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {contentBase.technologies.map((tch) => (
                  <span key={tch} className="text-sm rounded-full border border-black/10 px-3 py-1 text-black/70">
                    {tch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="hobbies" title={t("nav.hobbies")}>
          <div className="flex flex-wrap gap-2">
            {hobbiesT.map((h) => (
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