import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button>
          <Menu />
        </button>
      </SheetTrigger>

      <SheetContent side='left'>
        <div className='flex flex-col justify-center items-start gap-5'>
          <span>Menu</span>
          {/* {ROUTES.map((link) => {
            const isActive = link.url === pathname;
            const { icon: Icon } = link;
            return (
              <Link
                href={link.url}
                onClick={() => setOpen(false)}
                key={link.url}
                className={`flex text-black gap-4 items-center p-2 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white h-[48px] px-2 w-[245px] rounded-md "
                    : "hover:bg-primary hover:text-white h-[48px] px-2 w-[245px] rounded-md"
                }`}
              >
                {isActive ? <Icon fillColor='#fff' /> : <Icon />}
                {link.label}
              </Link>
            );
          })} */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
