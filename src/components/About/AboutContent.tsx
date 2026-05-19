import { useLang } from "../../context/LanguageContext.tsx";
import { AboutMe } from "./AboutMe/AboutMe.tsx";
import { Hobbies } from "./Hobbies/Hobbies.tsx";

type Props = {
  section: string;
};

export function AboutContent({ section }: Props) {
    const { t } = useLang();
  
  switch (section) {
    case t.aboutme.personalInfo:
      return <AboutMe />;

    case t.aboutme.professionalInfo:
      return <p>This is professional info.</p>;

    case t.aboutme.hobbies:
      return <Hobbies />;

    default:
      return null;
  }
}
