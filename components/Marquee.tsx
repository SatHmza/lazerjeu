"use client";

type Props = {
  items: string[];
  speed?: number; // seconds for one full loop
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
  separator?: string;
};

export default function Marquee({
  items,
  speed = 22,
  className = "",
  itemClassName = "",
  reverse = false,
  separator = "✦",
}: Props) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={`flex shrink-0 items-center gap-6 whitespace-nowrap ${itemClassName}`}>
            {item}
            <span aria-hidden className="text-laser-pink">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
