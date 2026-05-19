"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "./ProjectShowcase";

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="space-y-32 md:space-y-48">
        {portfolio.categories.map((category, ci) => (
          <div key={category.id} id={category.id} className="scroll-mt-24">
            <SectionHeading
              index={ci}
              eyebrow={`Showcase ${String(ci + 1).padStart(2, "0")}`}
              title={category.title}
              description={category.description}
            />
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
          </div>
        ))}
      </div>
    </section>
  );
}
