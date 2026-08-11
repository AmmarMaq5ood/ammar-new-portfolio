"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { isRichProject } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectRow } from "./ProjectRow";
import { AutomationCase } from "./AutomationCase";

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  // The pipeline rail draws itself as the reader moves through the stages.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.75"],
  });
  const drawn = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
    >
      {/* Pipeline rail — ties the three stages into one system */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-6 w-px bg-line md:left-10"
      />
      <motion.div
        aria-hidden
        style={{ scaleY: drawn }}
        className="absolute top-0 bottom-0 left-6 w-px origin-top bg-violet md:left-10"
      />

      <div className="space-y-24 md:space-y-36">
        {portfolio.categories.map((category, ci) => {
          const rich = category.projects.some(isRichProject);

          return (
            <div
              key={category.id}
              id={category.id}
              className="relative scroll-mt-28 pl-8 md:pl-14"
            >
              {/* Station node on the rail */}
              <span
                aria-hidden
                className="absolute top-1 left-0 h-[9px] w-[9px] -translate-x-1/2 rounded-full border-2 border-violet bg-paper"
              />

              <SectionHeading
                stage={ci + 1}
                count={category.projects.length}
                countLabel={rich ? "systems" : "projects"}
                title={category.title}
                description={category.description}
              />

              {rich ? (
                <div className="space-y-6">
                  {category.projects.map((project, pi) => (
                    <AutomationCase
                      key={project.id}
                      project={project}
                      code={category.code}
                      index={pi}
                    />
                  ))}
                </div>
              ) : (
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
          );
        })}
      </div>
    </section>
  );
}
