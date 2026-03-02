import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import smartHelmet from "@/assets/smart-helmet.jpg";
import smartGps from "@/assets/gps.png";
import { Shield, MapPin, Bell, Smartphone, Lock, Eye, Zap, Wifi } from "lucide-react";

const safetyFeatures = [
  { icon: Shield, title: "Theft protection", desc: "Every VéloRouge e-bike is covered against theft. GPS-tracked 24/7 with instant alerts if moved without authorization." },
  { icon: Lock, title: "Smart lock", desc: "Lock and unlock your e-bike from your phone. No keys, no codes — just tap and go." },
  { icon: Bell, title: "Accident detection", desc: "Built-in sensors detect falls and impacts. Emergency contacts are notified automatically if you don't respond." },
  { icon: Eye, title: "Night visibility", desc: "Integrated LED lights with auto-brightness. Be seen from 200m+ in any condition." },
];

const smartFeatures = [
  { icon: MapPin, title: "Live GPS tracking", desc: "Know where your e-bike is at all times. Real-time location visible in the VéloRouge app." },
  { icon: Smartphone, title: "App control", desc: "Manage your e-bike, track rides, check maintenance status, and book routes — all from one app." },
  { icon: Zap, title: "Battery monitoring", desc: "For e-bike subscribers, monitor battery level and find the nearest charging point." },
  { icon: Wifi, title: "OTA updates", desc: "Your e-bike gets smarter over time. Firmware updates are pushed wirelessly, improving performance automatically." },
];

const SafeSmartPage = () => (
  <main>
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 bg-dark text-dark-foreground">
      <div className="container">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Safe & Smart</p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
          Ride safe.
          <br />
          Ride <em className="text-primary">smart.</em>
        </h1>
        <p className="mt-6 text-dark-foreground/60 max-w-lg text-lg">
          Every VéloRouge e-bike is equipped with cutting-edge safety and smart technology.
        </p>
      </div>
    </section>

    {/* Safety */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Safety is
              <br />
              not an <em className="text-primary">option.</em>
            </h2>
            <div className="mt-10 space-y-8">
              {safetyFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={smartHelmet} alt="Smart helmet" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* Smart */}
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden md:order-1">
            <img src={smartGps} alt="GPS navigation on bike" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="md:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              Smarter
              <br />
              with every <em className="text-primary">ride.</em>
            </h2>
            <div className="mt-10 space-y-8">
              {smartFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="text-base text-dark-foreground/60 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          The numbers speak <em className="text-primary">for themselves.</em>
        </h2>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "0", label: "Accidents in 2025" },
            { value: "99.8%", label: "Uptime reliability" },
            { value: "<2min", label: "Avg. response time" },
            { value: "24/7", label: "Live monitoring" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-black text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default SafeSmartPage;
