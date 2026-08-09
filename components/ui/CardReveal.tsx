import type { CSSProperties, ReactNode } from "react";

type CardRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "article" | "li" | "div" | "details";
  style?: CSSProperties;
};

type CardRevealPartProps = {
  children: ReactNode;
  className?: string;
  variant?: "icon" | "content";
  as?: "div" | "h3" | "p" | "span" | "summary";
};

type CardRevealListProps = {
  children: ReactNode;
  className?: string;
  as?: "ul" | "tbody";
};

type CardRevealListItemProps = {
  children: ReactNode;
  className?: string;
  as?: "li" | "tr";
};

export function CardReveal({
  children,
  className,
  as = "article",
  style,
}: CardRevealProps) {
  const Tag = as;

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}

export function CardRevealPart({
  children,
  className,
  as = "div",
}: CardRevealPartProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function CardRevealList({
  children,
  className,
  as = "ul",
}: CardRevealListProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function CardRevealListItem({
  children,
  className,
  as = "li",
}: CardRevealListItemProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
