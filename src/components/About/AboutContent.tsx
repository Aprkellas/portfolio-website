import { useLang } from "../../context/LanguageContext.tsx";
import {AboutMe} from "./AboutMe/AboutMe.tsx";

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
      return <p>These are hobbies.</p>;

    case t.aboutme.contacts:
      return <p>These are contact details.</p>;

    default:
      return null;
  }
}
