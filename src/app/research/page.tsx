import { Notion } from "@/components/os/Notion";
import ResearchMarkdown from "@/app/markdown/ResearchMarkdown.md";

export default function Research() {
  return (
    <Notion>
      <div className="mx-auto w-2/3">
        <ResearchMarkdown />
      </div>
    </Notion>
  );
}
