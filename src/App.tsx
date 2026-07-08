/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, startTransition } from "react";
import { AnimatePresence, motion } from "motion/react";
import LandingPage from "./components/LandingPage";
import CategoryPage from "./components/CategoryPage";
import TopMenu from "./components/TopMenu";
import ContactPage from "./components/ContactPage";
import PlantCarePage from "./components/PlantCarePage";
import DeliveryPage from "./components/DeliveryPage";

export default function App() {
  const [activePage, setActivePage] = useState<
    "landing" | "category" | "contact" | "plantCare" | "delivery"
  >("landing");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

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
    <div className="min-h-screen bg-white text-neutral-950">
      <TopMenu
        onOpenContact={handleOpenContact}
        onOpenPlantCare={handleOpenPlantCare}
        onOpenDelivery={handleOpenDelivery}
        // onOpenAbout={handleOpenAbout}
      />
      <AnimatePresence mode="wait">
        {activePage === "landing" ? (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
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
          >
            <CategoryPage
              categoryId={selectedCategoryId}
              onBack={handleBackToLanding}
              onNavigateToCategory={handleNavigateToCategory}
            />
          </motion.div>
        ) : activePage === "plantCare" ? (
          <motion.div
            key="plant-care-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PlantCarePage onBack={handleBackToLanding} />
          </motion.div>
        ) : activePage === "delivery" ? (
          <motion.div
            key="delivery-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DeliveryPage onBack={handleBackToLanding} />
          </motion.div>
        ) : (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactPage onBack={handleBackToLanding} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
