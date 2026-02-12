import { use } from "react";
import { useLang } from "../../context/LanguageContext.tsx";


type Props = {
  selected: string;
  onSelect: (section: string) => void;
};

export function AboutTree({ selected, onSelect }: Props) {
  const { t } = useLang();
  
  const items = [
    t.aboutme.personalInfo, 
    t.aboutme.professionalInfo, 
    t.aboutme.hobbies, 
    t.aboutme.contacts
  ];

  return (
    <div className="tree">
      <div className="tree__header">about-me</div>

      <ul className="tree__list">
        {items.map((item) => (
          <li
            key={item}
            className={selected === item ? "active" : ""}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
