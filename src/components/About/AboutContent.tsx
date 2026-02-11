import {AboutMe} from "./AboutMe.tsx";

type Props = {
  section: string;
};

export function AboutContent({ section }: Props) {
  switch (section) {
    case "personal-info":
      return <AboutMe />;

    case "professional-info":
      return <p>This is professional info.</p>;

    case "hobbies":
      return <p>These are hobbies.</p>;

    case "contacts":
      return <p>These are contact details.</p>;

    default:
      return null;
  }
}
