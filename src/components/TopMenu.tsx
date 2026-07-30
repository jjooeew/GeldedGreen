import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CATEGORIES } from "../data";
import goldenMandela from "../assets/images/golden-mandela-no-bg-2-clipped.png";

type PageId = "landing" | "category" | "contact" | "plantCare" | "delivery";

interface TopMenuProps {
  activePage: PageId;
  selectedCategoryId: string;
  onOpenHome: () => void;
  onOpenCategory: (categoryId: string) => void;
  onOpenContact: () => void;
  onOpenPlantCare: () => void;
  onOpenDelivery: () => void;
}

export default function TopMenu({
  activePage,
  selectedCategoryId,
  onOpenHome,
  onOpenCategory,
  onOpenContact,
  onOpenPlantCare,
  onOpenDelivery,
}: TopMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activePage, selectedCategoryId]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navItemClass =
    "border-b py-1.5 text-[10px] font-medium uppercase tracking-[0.17em] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-4";

  const navigate = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  return (
    <header className="relative z-50 shrink-0 border-b border-neutral-100 bg-white px-4 pt-4 md:px-8 md:pt-10">
      <button
        type="button"
        onClick={() => navigate(onOpenHome)}
        aria-label="Go to the Gelded Green home page"
        className="mx-auto flex flex-col items-center rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-offset-4"
      >
        <img
          src={goldenMandela}
          alt=""
          className="h-14 w-14 object-contain md:h-16 md:w-16"
        />
        <span className="font-serif text-2xl font-light uppercase tracking-[0.12em] text-neutral-900 md:text-3xl">
          Gelded Green
        </span>
      </button>

      <button
        type="button"
        aria-expanded={mobileMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        className="mx-auto my-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 md:hidden"
      >
        {mobileMenuOpen ? (
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Menu className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {mobileMenuOpen ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`${mobileMenuOpen ? "grid" : "hidden"} mx-auto max-w-7xl grid-cols-2 gap-x-5 gap-y-1 pb-4 md:flex md:items-center md:justify-center md:gap-5 md:overflow-x-auto md:pb-3`}
      >
        {CATEGORIES.map((category) => {
          const isActive =
            activePage === "category" && selectedCategoryId === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => navigate(() => onOpenCategory(category.id))}
              aria-current={isActive ? "page" : undefined}
              className={`${navItemClass} ${
                isActive
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {category.name}
            </button>
          );
        })}

        <span
          className="mx-1 hidden h-3 w-px shrink-0 bg-neutral-200 md:block"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={() => navigate(onOpenDelivery)}
          aria-current={activePage === "delivery" ? "page" : undefined}
          className={`${navItemClass} ${
            activePage === "delivery"
              ? "border-neutral-900 text-neutral-900"
              : "border-transparent text-neutral-500 hover:text-neutral-900"
          }`}
        >
          Delivery
        </button>
        <button
          type="button"
          onClick={() => navigate(onOpenPlantCare)}
          aria-current={activePage === "plantCare" ? "page" : undefined}
          className={`${navItemClass} ${
            activePage === "plantCare"
              ? "border-neutral-900 text-neutral-900"
              : "border-transparent text-neutral-500 hover:text-neutral-900"
          }`}
        >
          Plant Care
        </button>
        <button
          type="button"
          onClick={() => navigate(onOpenContact)}
          aria-current={activePage === "contact" ? "page" : undefined}
          className={`${navItemClass} ${
            activePage === "contact"
              ? "border-neutral-900 text-neutral-900"
              : "border-transparent text-neutral-500 hover:text-neutral-900"
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
