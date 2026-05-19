import { useState, useRef } from "react";
import { ProjectCard, ProjectData } from "./ProjectCard.tsx";

const PLACEHOLDER_PROJECTS: ProjectData[] = [
  {
    title: "Project Coming Soon",
    description: "This project will be added from my GitHub shortly. Stay tuned!",
    tags: ["TBD"],
    placeholder: true,
  },
  {
    title: "Project Coming Soon",
    description: "This project will be added from my GitHub shortly. Stay tuned!",
    tags: ["TBD"],
    placeholder: true,
  },
  {
    title: "Project Coming Soon",
    description: "This project will be added from my GitHub shortly. Stay tuned!",
    tags: ["TBD"],
    placeholder: true,
  },
  {
    title: "Project Coming Soon",
    description: "This project will be added from my GitHub shortly. Stay tuned!",
    tags: ["TBD"],
    placeholder: true,
  },
  {
    title: "Project Coming Soon",
    description: "This project will be added from my GitHub shortly. Stay tuned!",
    tags: ["TBD"],
    placeholder: true,
  },
];

// How many cards visible at once (rough guide — CSS handles exact sizing)
const VISIBLE = 3;

export function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, PLACEHOLDER_PROJECTS.length - VISIBLE);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // Calculate offset: each card is (100% - gaps) / VISIBLE wide
  // We shift by one card width including gap per step
  const cardWidthPercent = 100 / VISIBLE;
  // gap between cards is 24px; approximate offset
  const offset = index * (cardWidthPercent / 100);

  return (
    <div className="carousel">
      <button
        className="carousel__btn"
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="carousel__track-wrapper">
        <div
          className="carousel__track"
          ref={trackRef}
          style={{
            transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + 8px)))`,
          }}
        >
          {PLACEHOLDER_PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>

      <button
        className="carousel__btn"
        onClick={next}
        disabled={index >= maxIndex}
        aria-label="Next"
      >
        ›
      </button>

      <div
        className="carousel__dots"
        style={{ position: "absolute", bottom: "-28px", left: "50%", transform: "translateX(-50%)" }}
      >
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === index ? " carousel__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
