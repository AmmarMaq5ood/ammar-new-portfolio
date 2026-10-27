"use client";

import type { Project, ProjectStatus } from "@/lib/types";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";
import { Reveal } from "@/components/ui/Reveal";
import { Asterisk } from "@/components/ui/Asterisk";
import { ScreenshotGallery } from "./ScreenshotGallery";

interface CaseStudyProps {
  project: Project;
  code: string;
  index: number;
}

const statusLabel: Record<ProjectStatus, string> = {
  live: "In production",
  pilot: "Pilot",
  personal: "Personal product",
  poc: "Proof of concept",
};

function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm bg-tile px-2 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-ink">
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          status === "live" ? "bg-accent" : "border border-ink/60"
        }`}
      />
      {statusLabel[status]}
    </span>
  );
}

/**
 * Full case block for the AI systems. Text on the left; on the right either a
 * screenshot gallery (when the project has images) or an honest schematic.
 * Projects with screenshots take the full width so the UI can be read.
 */
export function CaseStudy({ project, code, index }: CaseStudyProps) {
  const features = project.keyFeatures ?? [];
  const metrics = Object.entries(project.metrics ?? {});
  const hasImages = (project.images?.length ?? 0) > 0;

  const text = (
    <div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
          <Asterisk className="h-2.5 w-2.5 text-accent" />
          {code}·{String(index + 1).padStart(2, "0")}
        </p>
        {project.year && <p className="annotation">{project.year}</p>}
        {project.status && <StatusPill status={project.status} />}
      </div>

      <h3 className="headline mt-5 text-[2rem] text-balance md:text-[2.75rem]">
        {project.title}
      </h3>
      <p className="mt-3 max-w-2xl text-[15px] font-medium text-accent text-pretty md:text-base">
        {project.tagline}
      </p>
      {project.client && (
        <p className="mt-2 text-[12px] text-muted">
          For: <span className="text-ink">{project.client}</span>
        </p>
      )}

      {project.summary && (
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted text-pretty md:text-[15px]">
          {project.summary}
        </p>
      )}

      {features.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden className="mt-[2px] text-accent">
                ↗
              </span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {metrics.length > 0 && (
        <dl className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {metrics.map(([label, value]) => (
            <div key={label} className="rounded-sm bg-tile px-4 py-3.5">
              <dt className="text-[11px] text-muted">{label}</dt>
              <dd className="font-display mt-1.5 text-[15px] font-bold uppercase tracking-tight text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-7 flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="rounded-sm border border-line bg-paper px-2 py-1 text-[11px] font-medium text-ink"
          >
            {t}
          </span>
        ))}
      </div>

      {project.builtWith && project.builtWith.length > 0 && (
        <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          <Asterisk className="h-2.5 w-2.5" />
          Built with {project.builtWith.join(" + ")}
        </p>
      )}
    </div>
  );

  return (
    <Reveal>
      <article
        id={project.id}
        className={`scroll-mt-24 rounded-lg border border-line bg-surface p-6 md:p-10 ${
          hasImages
            ? "space-y-10"
            : "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-14"
        }`}
      >
        {text}

        {hasImages ? (
          <ScreenshotGallery images={project.images!} title={project.title} />
        ) : project.diagram ? (
          <div className="rounded-md border border-line bg-paper p-4 md:p-6">
            <FlowDiagram id={project.diagram} />
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}
