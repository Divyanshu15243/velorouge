import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: MapPin, label: t('contact.address'), value: "16 Avenue De La Paix, 67000 Strasbourg, France" },
    { icon: Mail, label: t('contact.email'), value: "info@velorouge.fr" },
    { icon: Phone, label: t('contact.phone'), value: "+33 622 810716" },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
  ];

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
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">{t('contact.tag')}</p>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
            {t('contact.title')}<em className="text-primary">{t('contact.titleHighlight')}</em>
          </h1>
          <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
            {t('contact.subtitle')}
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
                {t('contact.sendMessage')}<em className="text-primary">{t('contact.sendMessageHighlight')}</em>
              </h2>

              {submitted ? (
                <div className="p-8 border border-primary/30 bg-primary/5">
                  <h3 className="font-display text-2xl font-bold text-primary">{t('contact.thank')}</h3>
                  <p className="mt-2 text-muted-foreground">{t('contact.thankDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.firstName')}</label>
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
                      <label className="block text-sm font-medium mb-2">{t('contact.lastName')}</label>
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
                    <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
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
                    <label className="block text-sm font-medium mb-2">{t('contact.subject')}</label>
                    <select
                      name="subject"
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    >
                      <option value="" disabled>{t('contact.selectSubject')}</option>
                      <option>{t('contact.generalInquiry')}</option>
                      <option>{t('contact.dayTrips')}</option>
                      <option>{t('contact.groupBooking')}</option>
                      <option>{t('contact.company')}</option>
                      <option>{t('contact.pressMedia')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder={t('contact.tellUs')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-10 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    {t('contact.sendBtn')}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-black mb-8">
                {t('contact.findUs')}<em className="text-primary">{t('contact.findUsHighlight')}</em>
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
