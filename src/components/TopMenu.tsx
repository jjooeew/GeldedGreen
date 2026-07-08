import { useEffect, useState } from "react";

interface TopMenuProps {
  onOpenContact: () => void;
  onOpenPlantCare: () => void;
  onOpenDelivery: () => void;
  // onOpenAbout: () => void;
}

export default function TopMenu({ onOpenContact, onOpenPlantCare, onOpenDelivery }: TopMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-overlay"
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 bg-white text-neutral-900 px-3 py-2 rounded shadow-sm text-sm"
      >
        MENU ☰
      </button>

      {open && (
        <div
          id="menu-overlay"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex items-start justify-center p-6 bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="mt-16 bg-white rounded-md p-6 w-full max-w-sm shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              
              {/* <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  onOpenContact();
                }}
                className="text-lg font-medium text-neutral-900 block"
              >
                Shop
              </a> */}

              {/* <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  onOpenAbout();
                }}
                className="text-lg font-medium text-neutral-900 block"
              >
                About
              </a> */}

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  onOpenPlantCare();
                }}
                className="text-lg font-medium text-neutral-900 block"
              >
                Plant Care
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  onOpenDelivery();
                }}
                className="text-lg font-medium text-neutral-900 block"
              >
                Delivery & Collection
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  onOpenContact();
                }}
                className="text-lg font-medium text-neutral-900 block"
              >
                Contact
              </a>
            </nav>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
