import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const apiKey = import.meta.env.VITE_BREVO_API_KEY as string;
    const listId = Number(import.meta.env.VITE_BREVO_LIST_ID) || 2;

    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [listId],
          updateEnabled: true,
        }),
      });

      if (res.ok || res.status === 204) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        // 400 with "Contact already exist" is still a success
        if (data?.code === "duplicate_parameter") {
          setStatus("success");
          setEmail("");
        } else {
          setErrorMsg(data?.message || "Something went wrong. Please try again.");
          setStatus("error");
        }
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t("newsletter.title")}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {t("newsletter.subtitle")}
          </p>

          {status === "success" ? (
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-white">
              {t("newsletter.success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                required
                disabled={status === "loading"}
                className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap disabled:opacity-60 inline-flex items-center justify-center gap-2"
              >
                {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                {t("newsletter.button")}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-white/90 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm mt-3 max-w-xl mx-auto">
              {errorMsg}
            </p>
          )}

          <p className="text-white/60 text-sm mt-4">
            {t("newsletter.privacy")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
