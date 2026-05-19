import { AboutMe } from "./AboutMe/AboutMe.tsx";
import { Hobbies } from "./Hobbies/Hobbies.tsx";
import { Professional } from "./Professional/Professional.tsx";

type SectionKey = "personalInfo" | "professionalInfo" | "hobbies";

type Props = {
  section: SectionKey;
};

export function AboutContent({ section }: Props) {
  switch (section) {
    case "personalInfo":
      return <AboutMe />;

    case "professionalInfo":
      return <Professional />;

    case "hobbies":
      return <Hobbies />;

    default:
      return null;
  }
}
