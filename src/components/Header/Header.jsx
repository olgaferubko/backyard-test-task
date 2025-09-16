import { useEffect, useRef, useState } from "react";

export default function Header({
  nav = [
    { label: "Home",          href: "#" },
    { label: "About",         href: "#about" },
    { label: "How it works",  href: "#how" },
    { label: "Token design",  href: "#token" },
    { label: "YARD flywheel", href: "#flywheel" },
  ],
  activeHref = "#",
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);   
  const triggerRef = useRef(null);  


  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDown = (e) => {
      const p = panelRef.current;
      const t = triggerRef.current;
      if (p && p.contains(e.target)) return;   
      if (t && t.contains(e.target)) return;   
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  const isActive = (href) => href === activeHref;

  return (
    <header>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-[7px]">
            <img
              src="/logo.svg"
              alt="Backyard logo"
              draggable="false"
              className="w-[20px] h-[21px] md:w-[25px] md:h-[26px]"
            />
            <span className="text-[16px] font-normal text-[rgba(51,51,51,0.95)] text-center font-[Gilroy]">
              Backyard
            </span>
          </a>

        
          <nav aria-label="Primary" className="hidden md:flex items-center justify-center">
            <div
              className="
                flex items-center
                gap-[1px] p-[3px] w-[388px] h-[37px]
                rounded-full border border-[rgba(225,225,226,0.46)] bg-[#f2f3f5]
                xl:gap-[4px] xl:w-[461px] xl:h-[44px] xl:bg-[#f3f4f6]
              "
            >
              {nav.map((item) => {
                const base =
                  "inline-block rounded-full text-center " +
                  "font-['Konnect'] font-medium text-[#aeb0b1] " +
                  "h-[31px] leading-[31px] px-[9px] text-[11px] transition-colors duration-150 " +
                  "xl:h-[38px] xl:leading-[38px] xl:px-[11px] xl:text-[13px]";
                const active = isActive(item.href)
                  ? " bg-[#303030] text-[#fbfbfc] hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  : " bg-transparent hover:bg-[#e6e8eb] hover:text-[#303030] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10";
                return (
                  <a key={item.href} href={item.href} className={base + " " + active}>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>


          <div className="flex items-center gap-2">
            <a
              href="#connect"
              className="
                hidden md:inline-block
                rounded-full bg-[#303030] text-[#fbfbfc]
                font-['Konnect'] font-medium text-[11px] xl:text-[13px]
                h-[31px] leading-[31px] xl:h-[38px] xl:leading-[38px]
                px-[12px] xl:px-[14px]
                hover:bg-[#2a2a2a]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
              "
            >
              Connect
            </a>

        
            <div ref={triggerRef} className="relative md:hidden">
              <button
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="
                  inline-grid place-items-center
                  w-[40px] h-[40px] rounded-[11px]
                  bg-[#f6f7f8] border border-[rgba(222,222,227,0.45)]
                  hover:bg-[#eef0f2]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10
                "
              >
                <img
                  src={open ? "/cross.svg" : "/menu.svg"}
                  alt=""
                  className="w-[17px] h-[14px] select-none pointer-events-none"
                  draggable="false"
                />
              </button>

           
              {open && (
                <div
                  id="mobile-menu"
                  ref={panelRef}
                  className="
                    absolute right-0 top-full mt-[6px] z-50
                    w-[176px]
                    rounded-[19px] border border-[#e4e4e9]
                    bg-[#e8e9ed]
                    pl-[16px] pr-0 pt-[13px] pb-[15px]
                    shadow-md
                  "
                >
                  <nav className="flex flex-col gap-[7px]">
                    {nav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={
                          "font-['Konnect'] font-medium text-[14px] " +
                          (isActive(item.href) ? "text-[#303030]" : "text-[#7a7a7a]")
                        }
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <a
                    href="#connect"
                    onClick={() => setOpen(false)}
                    className="
                      mt-[12px] block
                      w-[148px] h-[40px] leading-[40px] text-center
                      rounded-full border border-[#ebebed] bg-[#303030]
                      font-['Konnect'] font-medium text-[13px] text-[#e8e9ed]
                      hover:bg-[#2a2a2a]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
                    "
                  >
                    Connect
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
