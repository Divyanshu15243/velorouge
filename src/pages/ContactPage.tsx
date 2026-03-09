import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "16 Avenue De La Paix, 67000 Strasbourg, France" },
  { icon: Mail, label: "Email", value: "info@velorouge.fr" },
  { icon: Phone, label: "Téléphone", value: "+33 622 810716" },
  { icon: Clock, label: "Horaires", value: "Lun–Sam : 8h00 – 20h00" },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mkoqnnyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `VeloRouge Contact: ${formData.subject}`
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
            Parlons-<em className="text-primary">en.</em>
          </h1>
          <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
            Questions, circuits d'une journée, réservation de groupe, ou simplement envie de dire bonjour ? Nous serions ravis de vous entendre.
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
                Envoyez-nous un <em className="text-primary">message.</em>
              </h2>

              {submitted ? (
                <div className="p-8 border border-primary/30 bg-primary/5">
                  <h3 className="font-display text-2xl font-bold text-primary">Merci !</h3>
                  <p className="mt-2 text-muted-foreground">Nous vous répondrons dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prénom</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet</label>
                    <select
                      name="subject"
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    >
                      <option value="" disabled>Sélectionnez un sujet</option>
                      <option>Demande générale</option>
                      <option>Circuits d'une journée</option>
                      <option>Réservation de groupe</option>
                      <option>Entreprise</option>
                      <option>Presse & médias</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Dites-nous comment nous pouvons vous aider…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-10 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    ENVOYER LE MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-black mb-8">
                Trouvez-<em className="text-primary">nous.</em>
              </h2>
              <div className="space-y-6">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{c.label}</div>
                      <div className="text-base text-muted-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="mt-10 aspect-video border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.4567890123456!2d7.7521!3d48.5734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c84d9c9b9b9b%3A0x9b9b9b9b9b9b9b9b!2s16%20Avenue%20De%20La%20Paix%2C%2067000%20Strasbourg%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VeloRouge Location"
                ></iframe>
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
