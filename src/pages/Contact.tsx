import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  businessName: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'business-websites';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessName: '',
    projectType: preselectedService,
    budgetRange: '$1,000 - $3,000',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const projectTypes = [
    { value: 'business-websites', label: 'Business Website' },
    { value: 'ecommerce-websites', label: 'E-commerce Website' },
    { value: 'portfolio-websites', label: 'Portfolio Website' },
    { value: 'landing-pages', label: 'Landing Page' },
    { value: 'web-applications', label: 'Custom Web Application' },
    { value: 'website-redesign', label: 'Website Redesign' },
    { value: 'website-maintenance', label: 'Website Maintenance' },
    { value: 'other', label: 'Other Custom Scope' },
  ];

  const budgetRanges = [
    '< $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000+',
    'Flexible / Undetermined',
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      errs.projectType = 'Please select your project type.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your project.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      businessName: '',
      projectType: 'business-websites',
      budgetRange: '$1,000 - $3,000',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kingdom-900/90 border border-gold/30 text-gold-300 text-xs font-mono tracking-widest uppercase mb-4"
        >
          <span>INITIATE ALLIANCE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight mb-6"
        >
          LET'S BUILD <br />
          <span className="bg-gradient-to-r from-gold-300 via-amber-400 to-gold-600 bg-clip-text text-transparent text-glow-gold">
            YOUR KINGDOM.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Tell us about your objectives, timeline, and vision. We will review your project scope and respond with a structured blueprint.
        </motion.p>
      </section>

      {/* Main Grid: Form & Direct Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-kingdom-900/90 to-kingdom-950 border border-steel-800 space-y-6">
              <h2 className="text-2xl font-serif font-bold text-white">
                Direct Channels
              </h2>
              <p className="text-sm text-steel-400 leading-relaxed font-light">
                Prefer direct messaging or immediate consultation? Reach out across any of our primary business channels below.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-kingdom-950/80 border border-steel-800 hover:border-gold/50 transition-all group"
                  aria-label={`Call VALARTHRONE WEBS at ${siteConfig.phone}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-kingdom-800/80 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-steel-400 block">Phone</span>
                    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-kingdom-950/80 border border-steel-800 hover:border-gold/50 transition-all group"
                  aria-label={`Chat with VALARTHRONE WEBS on WhatsApp at ${siteConfig.phone}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-steel-400 block">WhatsApp Business</span>
                    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      WhatsApp: {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.socialLinks.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-kingdom-950/80 border border-steel-800 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-kingdom-800/80 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-steel-400 block">Official Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {siteConfig.socialLinks.email}
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-kingdom-950/80 border border-steel-800 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-kingdom-800/80 border border-steel-700 flex items-center justify-center text-steel-300 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-steel-400 block">Code Repository</span>
                    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      github.com/valarthrone-webs
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-kingdom-950/80 border border-steel-800 hover:border-gold/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-700/50 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-steel-400 block">Professional Network</span>
                    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      linkedin.com/company/valarthrone-webs
                    </span>
                  </div>
                </a>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-xl bg-kingdom-950 border border-gold/20 flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-xs text-steel-300 font-light">
                  <strong className="text-gold font-medium">Prompt Response:</strong> All project inquiries receive a technical assessment within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-kingdom-900/90 to-kingdom-950 border border-steel-800 shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Project Consultation Request
              </h2>
              <p className="text-sm text-steel-400 mb-6 font-light">
                Fill out the specifications below to schedule your project scoping discussion.
              </p>

              <AnimatePresence mode="wait">
                {submittedData ? (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 sm:p-8 rounded-xl bg-kingdom-950 border border-gold/40 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold flex items-center justify-center mx-auto text-gold">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white">
                      Request Registered
                    </h3>

                    <p className="text-sm text-steel-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-gold">{submittedData.name}</strong>. Your project request for <span className="underline text-white">{submittedData.projectType}</span> has been captured.
                    </p>

                    <div className="p-4 rounded-lg bg-kingdom-900/90 border border-steel-800 text-left text-xs text-steel-400 space-y-1.5 font-mono">
                      <div><span className="text-gold">Email:</span> {submittedData.email}</div>
                      <div><span className="text-gold">Business:</span> {submittedData.businessName || 'N/A'}</div>
                      <div><span className="text-gold">Budget:</span> {submittedData.budgetRange}</div>
                    </div>

                    {/* Honest notice regarding backend delivery */}
                    <div className="p-3.5 rounded-lg bg-kingdom-900/50 border border-steel-800 text-xs text-steel-400 flex items-start gap-2 text-left">
                      <ShieldAlert className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Live Form Note:</strong> This frontend demonstrates form validation and client-side handling. To send live automated emails directly to your inbox, connect your preferred backend service (such as EmailJS, Resend, or a Flask backend API).
                      </span>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline-gold" size="sm" onClick={handleReset}>
                        Submit Another Request
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-steel-300 font-semibold block">
                          Your Name <span className="text-crimson-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Robert Baratheon"
                          className={`w-full px-4 py-3 rounded-lg bg-kingdom-950/80 border text-sm text-white placeholder-steel-600 focus:outline-none transition-colors ${
                            errors.name ? 'border-crimson-600 focus:border-crimson-500' : 'border-steel-750 focus:border-gold'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-crimson-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-steel-300 font-semibold block">
                          Email Address <span className="text-crimson-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 rounded-lg bg-kingdom-950/80 border text-sm text-white placeholder-steel-600 focus:outline-none transition-colors ${
                            errors.email ? 'border-crimson-600 focus:border-crimson-500' : 'border-steel-750 focus:border-gold'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-crimson-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-steel-300 font-semibold block">
                        Business Name <span className="text-steel-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Ironhold Enterprise Ltd."
                        className="w-full px-4 py-3 rounded-lg bg-kingdom-950/80 border border-steel-750 focus:border-gold text-sm text-white placeholder-steel-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Project Type & Budget Range Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-steel-300 font-semibold block">
                          Project Type <span className="text-crimson-500">*</span>
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-kingdom-950 border border-steel-750 focus:border-gold text-sm text-white focus:outline-none transition-colors"
                        >
                          {projectTypes.map((pt) => (
                            <option key={pt.value} value={pt.value}>
                              {pt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-steel-300 font-semibold block">
                          Estimated Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-kingdom-950 border border-steel-750 focus:border-gold text-sm text-white focus:outline-none transition-colors"
                        >
                          {budgetRanges.map((br) => (
                            <option key={br} value={br}>
                              {br}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-steel-300 font-semibold block">
                        Project Scope & Goals <span className="text-crimson-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe what you want to achieve, any key features, or reference websites you admire..."
                        className={`w-full px-4 py-3 rounded-lg bg-kingdom-950/80 border text-sm text-white placeholder-steel-600 focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-crimson-600 focus:border-crimson-500' : 'border-steel-750 focus:border-gold'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-crimson-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center shadow-royal-glow"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Securing Project Transmission...' : 'Send Project Request'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

