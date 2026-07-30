/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { startTransition, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LandingPage from "./components/LandingPage";
import CategoryPage from "./components/CategoryPage";
import TopMenu from "./components/TopMenu";
import ContactPage from "./components/ContactPage";
import PlantCarePage from "./components/PlantCarePage";
import DeliveryPage from "./components/DeliveryPage";

type PageId = "landing" | "category" | "contact" | "plantCare" | "delivery";

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("landing");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleSelectCategory = (categoryId: string) => {
    startTransition(() => {
      setSelectedCategoryId(categoryId);
      setActivePage("category");
    });
  };

  const handleBackToLanding = () => {
    startTransition(() => {
      setActivePage("landing");
      setSelectedCategoryId("");
    });
  };

  const handleNavigateToCategory = (categoryId: string) => {
    startTransition(() => {
      setSelectedCategoryId(categoryId);
      setActivePage("category");
    });
  };

  const handleOpenContact = () => {
    startTransition(() => setActivePage("contact"));
  };

  const handleOpenPlantCare = () => {
    startTransition(() => setActivePage("plantCare"));
  };

  const handleOpenDelivery = () => {
    startTransition(() => setActivePage("delivery"));
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white text-neutral-950">
      <TopMenu
        activePage={activePage}
        selectedCategoryId={selectedCategoryId}
        onOpenHome={handleBackToLanding}
        onOpenCategory={handleNavigateToCategory}
        onOpenContact={handleOpenContact}
        onOpenPlantCare={handleOpenPlantCare}
        onOpenDelivery={handleOpenDelivery}
      />

      <div className="min-h-0 flex-1">
        <AnimatePresence mode="wait">
          {activePage === "landing" ? (
            <motion.div
              key="landing-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <LandingPage onSelectCategory={handleSelectCategory} />
            </motion.div>
          ) : activePage === "category" ? (
            <motion.div
              key="category-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <CategoryPage categoryId={selectedCategoryId} />
            </motion.div>
          ) : activePage === "plantCare" ? (
            <motion.div
              key="plant-care-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full overflow-y-auto"
            >
              <PlantCarePage />
            </motion.div>
          ) : activePage === "delivery" ? (
            <motion.div
              key="delivery-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full overflow-y-auto"
            >
              <DeliveryPage />
            </motion.div>
          ) : (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full overflow-y-auto"
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
