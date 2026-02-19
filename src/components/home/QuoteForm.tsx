import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

// Simplified form per reference: name, email, phone, message

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type QuoteFormVariant = "default" | "hero";

export function QuoteForm({ variant = "default" }: { variant?: QuoteFormVariant }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    // In production, integrate with Formspree, EmailJS, or webhook
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    const content = (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-2xl rounded-2xl bg-secondary p-8 text-center md:p-12"
      >
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="mb-3 text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="mb-6 text-muted-foreground">
          We've received your quote request and will be in touch within 24 hours. If your enquiry is urgent, please call us directly.
        </p>
        <a href="tel:0405508730" className="inline-flex items-center gap-2 font-semibold text-accent">
          Call 0405 508 730
        </a>
      </motion.div>
    );

    if (variant === "hero") return content;
    return (
      <section id="quote" className="section-padding">
        <div className="section-container">{content}</div>
      </section>
    );
  }

  const formEl = (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8"
    >
      <h3 className="mb-6 text-2xl font-bold">Get your Free Quote Today!</h3>
      <div className="grid gap-4">
        {/* Name */}
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
              errors.name ? "border-destructive" : "border-input"
            }`}
            placeholder="Your Name"
          />
          {errors.name && (
            <span className="mt-1 text-sm text-destructive">{errors.name}</span>
          )}
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
              errors.email ? "border-destructive" : "border-input"
            }`}
            placeholder="Email Address"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-destructive">{errors.email}</span>
          )}
        </div>
        {/* Phone */}
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
              errors.phone ? "border-destructive" : "border-input"
            }`}
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="mt-1 text-sm text-destructive">{errors.phone}</span>
          )}
        </div>
        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="Describe your project..."
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center py-4 text-lg disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Get Free Quote
            </>
          )}
        </button>
      </div>
    </motion.form>
  );

  if (variant === "hero") {
    return <div className="mx-auto w-full max-w-xl">{formEl}</div>;
  }

  return (
    <section id="quote" className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Get Started
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Request a Free Quote
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
            </p>
          </motion.div>
          {formEl}
        </div>
      </div>
    </section>
  );
}
