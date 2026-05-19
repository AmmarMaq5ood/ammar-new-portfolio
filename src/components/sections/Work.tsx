"use client";

import { portfolio } from "@/data/portfolio";
import { isRichProject } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "./ProjectShowcase";
import { ProjectTile } from "./ProjectTile";

export function Work() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40"
    >
      <div className="space-y-32 md:space-y-48">
        {portfolio.categories.map((category, ci) => {
          const rich = category.projects.some(isRichProject);

          return (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <SectionHeading
                index={ci}
                eyebrow={`Showcase ${String(ci + 1).padStart(2, "0")}`}
                title={category.title}
                description={category.description}
              />

              {rich ? (
                <div className="space-y-10">
                  {category.projects.map((project, pi) => (
                    <ProjectShowcase
                      key={project.id}
                      project={project}
                      template={category.uiTemplate}
                      index={pi}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {category.projects.map((project, pi) => (
                    <ProjectTile
                      key={project.id}
                      project={project}
                      template={category.uiTemplate}
                      delay={(pi % 2) * 0.08}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
