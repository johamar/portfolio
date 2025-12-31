import { useMemo, useState } from "react";
import { content } from "../data/content";

export default function Footer() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name || "-"}\n\nMessage:\n${msg || "-"}\n`
    );
    return `mailto:${content.email}?subject=${subject}&body=${body}`;
  }, [name, msg]);

  return (
    <footer className="mt-40 border-t border-black/10">
      <div className="mx-auto max-w-5xl px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Links */}
        <div>
          <h3 className="font-semibold">Links</h3>
          <div className="mt-4 grid gap-2 text-sm">
            {content.links?.github && (
              <a className="underline text-black/70 hover:text-black" target="_blank" href={content.links.github}>
                GitHub
              </a>
            )}
            {content.links?.gitlab && (
              <a className="underline text-black/70 hover:text-black" target="_blank" href={content.links.gitlab}>
                GitLab
              </a>
            )}
            {content.links?.linkedin && (
              <a className="underline text-black/70 hover:text-black" target="_blank" href={content.links.linkedin}>
                LinkedIn
              </a>
            )}
            {content.links?.youtube && (
              <a className="underline text-black/70 hover:text-black" target="_blank" href={content.links.youtube}>
                YouTube
              </a>
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-3 text-sm text-black/70">
            Want to reach out? Send a quick message:
          </p>

          <div className="mt-4 grid gap-3">
            <input
              className="w-full rounded-xl border border-black/10 px-4 py-2 text-sm outline-none focus:border-black/30"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="w-full min-h-[110px] rounded-xl border border-black/10 px-4 py-2 text-sm outline-none focus:border-black/30"
              placeholder="Your message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 px-4 py-2 text-sm font-medium hover:border-black/30 transition"
            >
              Send via email
            </a>
          </div>
        </div>


        {/* Small print */}
        <div className="md:text-right">
          <h3 className="font-semibold">{content.name}</h3>
          <p className="mt-3 text-sm text-black/70">{content.location}</p>
          <p className="mt-6 text-xs text-black/50">
            © {new Date().getFullYear()} {content.name}
          </p>
        </div>
      </div>
    </footer>
  );
}