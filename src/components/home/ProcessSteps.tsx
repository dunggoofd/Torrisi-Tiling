import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, HardHat, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Quote",
    description: "Contact us for a no-obligation quote. We'll discuss your project requirements and provide transparent pricing.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Planning",
    description: "We create a detailed project plan including materials, timeline, and any preparation work required.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Preparation",
    description: "Site is prepared, surfaces are cleaned and primed, and waterproofing membranes are applied where needed.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Installation",
    description: "Expert tile installation with precision cutting, proper adhesive application, and seamless grouting.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Sign-off",
    description: "Final inspection, clean-up, and handover with warranty documentation for your records.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            How We Work
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From initial consultation to final sign-off, we keep you informed every step of the way.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent via-accent/50 to-transparent lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center gap-6 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div
                    className={`card-elevated inline-block p-6 ${
                      index % 2 === 1 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`mb-4 flex items-center gap-3 ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                        <step.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-2xl font-bold text-accent/30">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="max-w-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 hidden lg:flex">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-lg">
                    <div className="h-2 w-2 rounded-full bg-accent-foreground" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
