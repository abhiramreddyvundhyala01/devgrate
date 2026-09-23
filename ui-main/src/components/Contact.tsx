import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { Reveal, WordReveal } from './Reveal';

// ─── EmailJS Config ────────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials after setup
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';
// ──────────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  mobile: '',
  company: '',
  message: '',
};

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || !form.company.trim() || !form.message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(
        'Something went wrong sending your message. Please email us directly at info@devgrate.com'
      );
    }
  };

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-teal-50/30 to-stone-50/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-teal-400/40" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-teal-600">
              Contact
            </span>
          </Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
            <WordReveal text="Let's talk about" delay={100} />
            <br />
            <Reveal variant="soft" delay={500} as="span">
              <span className="gradient-text font-medium">your business</span>
            </Reveal>
          </h2>
          <Reveal variant="soft" delay={800}>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Tell us where it's slow, manual, or stuck. We'll tell you
              honestly if AI can fix it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/60 shadow-lg shadow-stone-200/40">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-stone-800 mb-3">
                    Thank you — message received
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed mb-6">
                    We appreciate you reaching out. We'll review your message and
                    get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-2">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={form.mobile}
                        onChange={update('mobile')}
                        className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                        placeholder="+91 98765 43210"
                        pattern="[+]?[0-9\s\-]{7,15}"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-2">
                        Company <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={update('company')}
                        className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={update('message')}
                      className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 resize-none"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>

                  {/* Hidden field to set the reply-to address */}
                  <input type="hidden" name="to_email" value="info@devgrate.com" />

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium text-base shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 font-light mt-3">
                    We reply within one business day. No spam, no sales pressure.
                  </p>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-center gap-2 text-stone-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-light">
                  Prefer email? Reach us at{' '}
                  <a
                    href="mailto:info@devgrate.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    info@devgrate.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
