import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "./Sidebar"
import MainContent from "./MainContent"

export default function Documentation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="hidden md:block">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="ml-auto flex items-center space-x-4">
            {/* Add additional header items here */}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="hidden lg:block">
          <ScrollArea className="h-[calc(100vh-3.5rem)] w-[240px]">
            <Sidebar />
          </ScrollArea>
        </div>
        <main className="flex-1">
          <MainContent />
        </main>
      </div>
    </div>
  )
}