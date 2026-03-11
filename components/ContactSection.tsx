"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const companyEmail = "waschietfils@gmail.com"; // Email de l'entreprise
    const subject = encodeURIComponent("Demande de devis");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );

    // Ouvre Gmail avec l'email de l'entreprise pré-rempli comme destinataire
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`,
      "_blank",
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-white dark:bg-background-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary dark:text-slate-100 mb-8">
            Parlons de votre{" "}
            <span className="text-accent underline decoration-4 underline-offset-8">
              Projet
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 font-light">
            Besoin d&apos;un accompagnement personnalisé ou d&apos;un devis
            technique ? Nos experts sont à votre disposition pour transformer
            vos plans en réalité durable.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-accent text-3xl">
                call
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">
                  Téléphone
                </h4>
                <p className="text-xl font-medium">+229 01 69 93 16 45</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-accent text-3xl">
                schedule
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">
                  Horaires
                </h4>
                <p className="text-xl font-medium">Lun - Ven: 08:00 - 18:00</p>
                <p className="text-slate-500 text-sm">Samedi: 09:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-background-light dark:bg-surface-dark p-10 rounded-2xl shadow-2xl border border-primary/10 relative"
          >
            <div className="absolute -top-10 -right-10 size-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Nom Complet
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-background-dark border-slate-200 dark:border-slate-800 rounded px-4 py-3 focus:ring-accent focus:border-accent"
                  placeholder="Jean Dupont"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Numéro de Téléphone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-background-dark border-slate-200 dark:border-slate-800 rounded px-4 py-3 focus:ring-accent focus:border-accent"
                  placeholder="+229 01 00 00 00 00"
                  type="tel"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Votre Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white dark:bg-background-dark border-slate-200 dark:border-slate-800 rounded px-4 py-3 focus:ring-accent focus:border-accent"
                placeholder="Dites-nous en plus sur vos besoins..."
                rows={4}
                required
              />
            </div>
            <button
              className="w-full bg-primary text-white py-5 rounded font-black uppercase tracking-widest hover:bg-accent transition-all"
              type="submit"
            >
              Demander un Devis Chic
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
