import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "12 Rue des Moulins, 67000 Strasbourg, France" },
  { icon: Mail, label: "Email", value: "hello@velorouge.fr" },
  { icon: Phone, label: "Phone", value: "+33 3 88 00 00 00" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 8:00 – 20:00" },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
            Let's <em className="text-primary">talk.</em>
          </h1>
          <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
            Questions, partnerships, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-black mb-8">
                Send us a <em className="text-primary">message.</em>
              </h2>

              {submitted ? (
                <div className="p-8 border border-primary/30 bg-primary/5">
                  <h3 className="font-display text-2xl font-bold text-primary">Thank you!</h3>
                  <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>Select a topic</option>
                      <option>General inquiry</option>
                      <option>Rides & bookings</option>
                      <option>Subscriptions</option>
                      <option>Partnership</option>
                      <option>Press & media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us how we can help…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-10 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-black mb-8">
                Find <em className="text-primary">us.</em>
              </h2>
              <div className="space-y-6">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{c.label}</div>
                      <div className="text-muted-foreground text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 aspect-video bg-muted border border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-semibold">Strasbourg, France</p>
                  <p className="text-xs">12 Rue des Moulins, 67000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
