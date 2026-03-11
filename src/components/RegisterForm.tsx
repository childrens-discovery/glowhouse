import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    location: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", organisation: "", role: "", location: "", comments: "" });
  };

  const inputClass =
    "w-full rounded-[10px] border border-[#E0D8CC] bg-white px-4 py-3 font-body text-base text-navy outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20";

  return (
    <section id="register" className="bg-cream px-4 py-20 md:py-28">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="font-display text-3xl uppercase text-blue md:text-4xl">
            Register Your Interest
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow" />
          <p className="font-body mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-navy/80">
            Be the first to know when G.L.O.W. Houses arrive in your area. Register below for
            updates on availability, training, and program news.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-[20px] bg-white p-6 shadow-lg sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label className="font-body mb-1.5 block text-sm font-medium text-navy">
                Name <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-body mb-1.5 block text-sm font-medium text-navy">
                Email Address <span className="text-coral">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-body mb-1.5 block text-sm font-medium text-navy">
                Organisation / Venue
              </label>
              <input
                type="text"
                placeholder="e.g., Botany Public Library"
                value={form.organisation}
                onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-body mb-1.5 block text-sm font-medium text-navy">
                Role <span className="text-coral">*</span>
              </label>
              <select
                required
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className={inputClass}
              >
                <option value="">Select your role…</option>
                <option>Teacher</option>
                <option>Librarian</option>
                <option>Community Group Leader</option>
                <option>Parent</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="font-body mb-1.5 block text-sm font-medium text-navy">
                Location — Suburb, State
              </label>
              <input
                type="text"
                placeholder="e.g., Botany, NSW"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-body mb-1.5 block text-sm font-medium text-navy">
                Comments or Questions
              </label>
              <textarea
                rows={4}
                placeholder="How do you plan to use the G.L.O.W. House? Any specific requirements or questions?"
                value={form.comments}
                onChange={(e) => setForm({ ...form, comments: e.target.value })}
                className={inputClass + " resize-none"}
              />
            </div>
          </div>

          <p className="font-body mt-4 text-xs italic text-navy/50">
            * Required fields
          </p>

          <button
            type="submit"
            className="font-display mt-6 w-full rounded-pill bg-coral py-3.5 text-sm uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Interest
          </button>

          <p className="font-body mt-4 text-center text-xs italic text-navy/50">
            Your information will only be used to contact you about the G.L.O.W. House program and
            related Children's Discovery initiatives.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
