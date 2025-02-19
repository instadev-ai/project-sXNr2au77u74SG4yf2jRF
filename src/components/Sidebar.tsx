import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sections = [
  {
    title: "Getting Started",
    items: ["Introduction", "Installation", "Quick Start"],
  },
  {
    title: "Core Concepts",
    items: ["Architecture", "Components", "State Management"],
  },
  {
    title: "API Reference",
    items: ["Endpoints", "Authentication", "Error Handling"],
  },
]

export default function Sidebar() {
  return (
    <ScrollArea className="h-full py-6 pl-8 pr-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Developer Tools</h2>
        </div>
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="font-medium text-muted-foreground">
                {section.title}
              </h3>
              <div className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="justify-start px-2"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}