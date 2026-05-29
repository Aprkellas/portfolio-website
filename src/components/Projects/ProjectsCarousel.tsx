import { useState, useRef, useEffect, useCallback } from "react";
import { ProjectCard, ProjectData } from "./ProjectCard.tsx";

const GITHUB_USERNAME = "Aprkellas";

// Add or remove repo names here to control which projects are shown.
// These should match the exact repository names on your GitHub profile.
const PINNED_REPOS = [
  "portfolio-website",
  "snake",
  "GearComparison",
  "fuel-finder",
  "SolarSystemExplorer",
  "SleepAnalysis",
];

const LOADING_PLACEHOLDERS: ProjectData[] = Array.from({ length: PINNED_REPOS.length }, () => ({
  title: "Loading...",
  description: "Fetching project from GitHub...",
  tags: [],
  placeholder: true,
}));

function useGitHubProjects(): ProjectData[] {
  const [projects, setProjects] = useState<ProjectData[]>(LOADING_PLACEHOLDERS);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      PINNED_REPOS.map((repo) =>
        fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`, {
          headers: { Accept: "application/vnd.github+json" },
        }).then((res) => {
          if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
          return res.json();
        })
      )
    )
      .then((repos: any[]) => {
        if (cancelled) return;
        const mapped: ProjectData[] = repos.map((r) => ({
          title: r.name,
          description: r.description ?? "No description provided.",
          tags: r.topics?.length ? r.topics : r.language ? [r.language] : [],
          githubUrl: r.html_url,
          liveUrl: r.homepage || undefined,
        }));
        setProjects(mapped);
      })
      .catch(() => {
        if (!cancelled) setProjects(LOADING_PLACEHOLDERS);
      });
    return () => { cancelled = true; };
  }, []);

  return projects;
}

// How many cards visible at once (responsive)
function useVisible() {
  const [visible, setVisible] = useState(() =>
    window.matchMedia("(max-width: 600px)").matches ? 1 : 3
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const handler = (e: MediaQueryListEvent) => setVisible(e.matches ? 1 : 3);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return visible;
}

export function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const VISIBLE = useVisible();
  const projects = useGitHubProjects();

  const maxIndex = Math.max(0, projects.length - VISIBLE);

  // Reset index when VISIBLE changes
  useEffect(() => {
    setIndex(0);
  }, [VISIBLE]);

  // Scroll the wrapper so the correct card is snapped into view
  const scrollToIndex = useCallback((i: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const track = wrapper.firstElementChild as HTMLElement;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (!card) return;
    wrapper.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const prev = () => {
    const next = Math.max(0, index - 1);
    setIndex(next);
    scrollToIndex(next);
  };

  const next = () => {
    const nextI = Math.min(maxIndex, index + 1);
    setIndex(nextI);
    scrollToIndex(nextI);
  };

  // Keep index in sync when user swipes manually
  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const track = wrapper.firstElementChild as HTMLElement;
    if (!track) return;
    const firstCard = track.children[0] as HTMLElement;
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth;
    const gap = 24;
    const newIndex = Math.round(wrapper.scrollLeft / (cardWidth + gap));
    setIndex(Math.min(maxIndex, Math.max(0, newIndex)));
  }, [maxIndex]);

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

      <div className="carousel__track-wrapper" ref={wrapperRef} onScroll={handleScroll}>
        <div className="carousel__track">
          {projects.map((project, i) => (
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
            onClick={() => { setIndex(i); scrollToIndex(i); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
