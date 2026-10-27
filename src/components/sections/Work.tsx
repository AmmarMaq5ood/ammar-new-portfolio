"use client";

import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectRow } from "./ProjectRow";
import { CaseStudy } from "./CaseStudy";
import { IntegrationCard } from "./IntegrationCard";

const countLabel = {
  cases: "systems",
  cards: "integrations",
  ledger: "projects",
} as const;

export function Work() {
  return (
    <div id="work">
      {portfolio.categories.map((category, ci) => {
        const dark = category.layout === "cards";
        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 px-4 py-20 md:px-8 md:py-28 ${
              dark ? "bg-black text-white" : "border-t border-line"
            }`}
          >
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                label={`Stage ${String(ci + 1).padStart(2, "0")}`}
                title={category.title}
                muted={category.muted}
                description={category.description}
                count={`${String(category.projects.length).padStart(2, "0")} ${
                  countLabel[category.layout]
                }`}
                dark={dark}
              />

              {category.layout === "cases" && (
                <div className="space-y-6">
                  {category.projects.map((project, pi) => (
                    <CaseStudy
                      key={project.id}
                      project={project}
                      code={category.code}
                      index={pi}
                    />
                  ))}
                </div>
              )}

              {category.layout === "cards" && (
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {category.projects.map((project, pi) => (
                    <li key={project.id} className="h-full">
                      <IntegrationCard
                        project={project}
                        code={category.code}
                        index={pi}
                        dark={dark}
                      />
                    </li>
                  ))}
                </ul>
              )}

              {category.layout === "ledger" && (
                <ul className="border-t border-line">
                  {category.projects.map((project, pi) => (
                    <li key={project.id}>
                      <ProjectRow
                        project={project}
                        code={category.code}
                        index={pi}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
