import type { GuideBlock } from "@/lib/installation-guide-data";
import { formatGuideText } from "@/lib/installation-guide-data";

type GuideContentProps = {
  blocks: GuideBlock[];
};

function renderInlineCode(text: string) {
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

export function GuideContent({ blocks }: GuideContentProps) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{renderInlineCode(block.text)}</p>;
        }

        if (block.type === "h3") {
          return (
            <h3 key={index} className="telvis-guide-subtitle">
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineCode(item)}</li>
              ))}
            </ul>
          );
        }

        return (
          <ol key={index}>
            {block.items.map((item) => (
              <li key={item}>{renderInlineCode(item)}</li>
            ))}
          </ol>
        );
      })}
    </>
  );
}
