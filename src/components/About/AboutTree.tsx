type Props = {
  selected: string;
  onSelect: (section: string) => void;
};

export function AboutTree({ selected, onSelect }: Props) {
  const items = [
    "personal-info",
    "professional-info",
    "hobbies",
    "contacts",
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
