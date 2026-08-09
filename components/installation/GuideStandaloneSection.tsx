import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  CheckCircle2,
  ClipboardList,
  KeyRound,
  ListOrdered,
  RefreshCw,
  Server,
  Shield,
} from "lucide-react";
import type { GuideBlock } from "@/lib/installation-guide-data";
import { formatGuideText } from "@/lib/installation-guide-data";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";

type GuideStandaloneSectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  blocks: GuideBlock[];
  variant: "checklist" | "steps" | "fields" | "ordered";
  icon: LucideIcon;
};

function renderText(text: string) {
  const parts = text.split(/(\{\{code\}\})/g);

  return parts.map((part, index) => {
    if (part === "{{code}}") {
      return (
        <span key={index} className="telvis-guide-code">
          {formatGuideText("{{code}}")}
        </span>
      );
    }

    return <span key={index}>{formatGuideText(part)}</span>;
  });
}

function getParagraphs(blocks: GuideBlock[]) {
  return blocks.filter((block): block is Extract<GuideBlock, { type: "p" }> => block.type === "p");
}

function getListBlock(blocks: GuideBlock[]) {
  return blocks.find(
    (block): block is Extract<GuideBlock, { type: "ul" | "ol" }> =>
      block.type === "ul" || block.type === "ol",
  );
}

function getSteps(blocks: GuideBlock[]) {
  const steps: { title: string; body: string }[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];

    if (block.type === "h3") {
      const next = blocks[index + 1];
      steps.push({
        title: block.text.replace(/^Step \d+:\s*/, ""),
        body: next?.type === "p" ? next.text : "",
      });

      if (next?.type === "p") {
        index += 1;
      }
    }
  }

  return steps;
}

function ChecklistBody({ blocks }: { blocks: GuideBlock[] }) {
  const paragraphs = getParagraphs(blocks);
  const list = getListBlock(blocks);
  const intro = paragraphs[0];
  const note = paragraphs[1];

  return (
    <>
      {intro ? <p className="telvis-guide-standalone-lead">{renderText(intro.text)}</p> : null}

      {list?.type === "ul" ? (
        <ul className="telvis-guide-check-grid">
          {list.items.map((item) => (
            <li key={item} className="telvis-guide-check-item">
              <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
              <span>{renderText(item)}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {note ? (
        <div className="telvis-guide-callout is-note">
          <Shield size={18} strokeWidth={2} aria-hidden="true" />
          <p>{renderText(note.text)}</p>
        </div>
      ) : null}
    </>
  );
}

function StepsBody({ blocks }: { blocks: GuideBlock[] }) {
  const steps = getSteps(blocks);

  return (
    <ol className="telvis-guide-step-list">
      {steps.map((step, index) => (
        <li key={step.title} className="telvis-guide-step-item">
          <span className="telvis-guide-step-number" aria-hidden="true">
            {index + 1}
          </span>
          <div className="telvis-guide-step-copy">
            <h3 className="telvis-guide-step-title">{step.title}</h3>
            <p>{renderText(step.body)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function FieldsBody({ blocks }: { blocks: GuideBlock[] }) {
  const paragraphs = getParagraphs(blocks);
  const list = getListBlock(blocks);
  const intro = paragraphs[0];
  const note = paragraphs[1];

  return (
    <>
      {intro ? <p className="telvis-guide-standalone-lead">{renderText(intro.text)}</p> : null}

      {list?.type === "ul" ? (
        <div className="telvis-guide-field-grid">
          {list.items.map((item) => {
            const [label, ...rest] = item.split(":");
            const value = rest.join(":").trim();

            return (
              <div key={item} className="telvis-guide-field-card">
                <span className="telvis-guide-field-label">{label}</span>
                <p>{renderText(value)}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {note ? (
        <div className="telvis-guide-callout is-tip">
          <KeyRound size={18} strokeWidth={2} aria-hidden="true" />
          <p>{renderText(note.text)}</p>
        </div>
      ) : null}
    </>
  );
}

function OrderedBody({ blocks }: { blocks: GuideBlock[] }) {
  const paragraphs = getParagraphs(blocks);
  const list = getListBlock(blocks);
  const intro = paragraphs[0];
  const note = paragraphs[1];

  return (
    <>
      {intro ? <p className="telvis-guide-standalone-lead">{renderText(intro.text)}</p> : null}

      {list?.type === "ol" ? (
        <ol className="telvis-guide-ordered-list">
          {list.items.map((item, index) => (
            <li key={item} className="telvis-guide-ordered-item">
              <span className="telvis-guide-ordered-index" aria-hidden="true">
                {index + 1}
              </span>
              <span>{renderText(item)}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {note ? (
        <div className="telvis-guide-callout is-note">
          <RefreshCw size={18} strokeWidth={2} aria-hidden="true" />
          <p>{renderText(note.text)}</p>
        </div>
      ) : null}
    </>
  );
}

export function GuideStandaloneSection({
  id,
  eyebrow,
  title,
  blocks,
  variant,
  icon: Icon,
}: GuideStandaloneSectionProps) {
  return (
    <section className="telvis-section telvis-guide-standalone" aria-labelledby={id}>
      <div className="telvis-section-inner">
        <CardReveal as="article" className="telvis-glass telvis-guide-standalone-card">
          <CardRevealPart>
            <header className="telvis-guide-standalone-head">
              <div className="telvis-guide-standalone-head-main">
                <span className="telvis-guide-standalone-eyebrow">{eyebrow}</span>
                <h2 id={id} className="telvis-guide-standalone-title">
                  {title}
                </h2>
              </div>
              <span className="telvis-guide-standalone-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
            </header>
          </CardRevealPart>

          <CardRevealPart className="telvis-guide-standalone-body">
            {variant === "checklist" ? <ChecklistBody blocks={blocks} /> : null}
            {variant === "steps" ? <StepsBody blocks={blocks} /> : null}
            {variant === "fields" ? <FieldsBody blocks={blocks} /> : null}
            {variant === "ordered" ? <OrderedBody blocks={blocks} /> : null}
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

export const guideStandaloneIcons = {
  before: ClipboardList,
  firestick: Server,
  xtream: KeyRound,
  epg: ListOrdered,
};
