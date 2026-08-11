"use client";

import type { Project } from "@/lib/types";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";
import { Reveal } from "@/components/ui/Reveal";

interface AutomationCaseProps {
  project: Project;
  code: string;
  index: number;
}

/** Case block for automation systems — text on the left, honest schematic on the right. */
export function AutomationCase({ project, code, index }: AutomationCaseProps) {
  const features = project.keyFeatures ?? [];

  return (
    <Reveal>
      <article className="grid gap-8 rounded-xl border border-line bg-surface p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-12">
        <div>
          <p className="font-mono text-xs text-muted">
            {code}·{String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display mt-2 text-2xl leading-tight font-bold text-balance md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-violet">
            {project.tagline}
          </p>

          {features.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full border border-violet bg-violet/25"
                  />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded border border-line bg-paper px-2 py-1 font-mono text-[10px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-line bg-paper p-4 md:p-5">
          <FlowDiagram projectId={project.id} />
        </div>
      </article>
    </Reveal>
  );
}
