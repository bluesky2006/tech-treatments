type Props = {
  items: string[];
  className?: string;
  itemClassName?: string;
};

export default function BulletList({ items, className = "", itemClassName = "" }: Props) {
  return (
    <ul className={`space-y-1 text-foreground ${className}`}>
      {items.map((text) => (
        <li key={text} className={`flex gap-3 ${itemClassName}`}>
          <span className="mt-2 h-2 w-2 rounded-full bg-teal-400/70" aria-hidden="true" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
