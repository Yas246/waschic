export default function ServicesSection() {
  const services = [
    {
      icon: "local_shipping",
      title: "Livraison de Chantier",
      description: "Transport et livraison sécurisée de vos matériaux directement sur votre chantier.",
    },
    {
      icon: "support_agent",
      title: "Service Après-Vente",
      description: "Accompagnement continu et support technique après l'achat de vos produits.",
    },
    {
      icon: "engineering",
      title: "Conseil Technique",
      description: "Expertise personnalisée pour vous guider dans le choix des meilleurs matériaux.",
    },
    {
      icon: "apartment",
      title: "Bureau d'Études",
      description: "Analyse et conception de solutions techniques adaptées à vos projets.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-primary dark:text-slate-100">
            Nos <span className="text-accent">Services</span>
          </h2>
          <div className="h-1.5 w-32 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="size-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-accent text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-primary dark:text-slate-100 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
