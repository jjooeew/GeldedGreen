import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import goldenmandela from "../assets/images/golden-mandela-no-bg-2.png";

interface PlantCarePageProps {
  onBack: () => void;
}

export default function PlantCarePage({ onBack }: PlantCarePageProps) {
  const succulentCare = [
    {
      label: "Light",
      desc: "Bright, indirect sunlight. A south or east-facing windowsill provides the perfect exposure."
    },
    {
      label: "Water",
      desc: "Allow soil to dry out completely between waterings. Soak thoroughly, then let drain fully. Never let standing water remain."
    },
    {
      label: "Position",
      desc: "Place in open spaces with gentle, natural airflow. Avoid humid rooms or dark, enclosed corners."
    },
    {
      label: "Temperature",
      desc: "Thrives in warm environments (15°C–28°C). Safeguard from drafts and winter frost."
    },
    {
      label: "Maintenance",
      desc: "Gently clear dry or withered leaves from the base of the plant. Repot in porous, well-draining grit every two years."
    },
    {
      label: "Common Mistake",
      desc: "Overwatering. Excessive moisture blocks root respiration and leads to soft, translucent leaves."
    }
  ];

  const bonsaiCare = [
    {
      label: "Light",
      desc: "Generous filtered light. Most species flourish with a few hours of soft, direct morning sun."
    },
    {
      label: "Water",
      desc: "Keep the soil consistently damp but never soggy. Water evenly as soon as the topsoil begins to feel dry to the touch."
    },
    {
      label: "Position",
      desc: "Keep well away from heating vents, radiators, and air conditioners to prevent the delicate root system from drying out."
    },
    {
      label: "Temperature",
      desc: "Prefers steady, moderate conditions (10°C–24°C). Protect from sudden, extreme temperature shifts."
    },
    {
      label: "Maintenance",
      desc: "Prune new shoots regularly during the growing season to maintain the tree's silhouette. Occasional gentle misting helps retain vitality."
    },
    {
      label: "Common Mistake",
      desc: "Allowing the root ball to dry out entirely. Bonsai vessels hold very little soil, meaning moisture reserves deplete rapidly."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-neutral-100 bg-white px-6 py-12 md:px-12 max-w-7xl mx-auto text-neutral-900">
      
      {/* Navigation Header */}
      <nav className="flex items-center justify-between border-b border-neutral-100 pb-6 mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer group"
          id="care-back-button"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>

        <span className="text-sm tracking-[0.25em] uppercase font-light text-neutral-900 cursor-pointer flex flex-col items-center" onClick={onBack}>
          <img src={goldenmandela} alt="Gelded Green logo" className="w-10 h-10 inline-block mr-1" />
          Gelded Green
        </span>

        {/* Empty placeholder to balance the layout precisely */}
        <div className="w-10 h-4 hidden sm:block"></div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mb-20">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl tracking-[0.25em] uppercase font-light text-neutral-900 mb-4"
            id="care-title"
          >
            Plant Care
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-neutral-400 font-sans font-light text-[11px] md:text-xs tracking-widest uppercase max-w-md mx-auto"
          >
            Simple guidance to help your living arrangements thrive.
          </motion.p> */}
        </div>

        {/* Care Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 max-w-5xl mx-auto">
          
          {/* Succulents Column */}
          <motion.section
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-lg md:text-xl tracking-widest uppercase font-light text-neutral-900 mb-8 border-b border-neutral-100 pb-3">
              Succulent Care
            </h2>
            <div className="divide-y divide-neutral-100">
              {succulentCare.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start py-6 gap-2 sm:gap-6">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-neutral-400 w-28 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <p className="text-xs md:text-[13px] text-neutral-600 font-sans font-light leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Bonsai Column */}
          <motion.section
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-serif text-lg md:text-xl tracking-widest uppercase font-light text-neutral-900 mb-8 border-b border-neutral-100 pb-3">
              Bonsai Care
            </h2>
            <div className="divide-y divide-neutral-100">
              {bonsaiCare.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start py-6 gap-2 sm:gap-6">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-neutral-400 w-28 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <p className="text-xs md:text-[13px] text-neutral-600 font-sans font-light leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 text-center"
        >
          {/* <p className="text-[10px] md:text-xs text-neutral-400 font-serif italic max-w-xl mx-auto leading-relaxed px-4">
            “Care needs can vary depending on the plant variety, season, and where the arrangement is kept.”
          </p> */}
        </motion.div>

      </main>

      {/* Footer */}
      {/* <footer className="pt-8 border-t border-neutral-100 text-center">
        <p className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase">
          Gelded Green • Selected Botanicals
        </p>
      </footer> */}

    </div>
  );
}
