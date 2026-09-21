import { useState, type FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { Reveal, WordReveal } from './Reveal';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    if (!supabase) {
      setStatus('error');
      setErrorMsg('Contact form is not configured yet. Please email us directly at hello@devgrate.com.');
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    } else {
      setStatus('success');
      setForm(initialState);
    }
  };

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-b from-transparent via-teal-50/30 to-stone-50/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-teal-400/40" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Reveal variant="soft">
            <span className="text-sm font-semibold tracking-wider uppercase text-teal-600">
              Contact
            </span>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-light text-stone-800 mt-4 leading-[1.15]">
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-600 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                      Company <span className="text-stone-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update('company')}
                      className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      className="form-input w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 resize-none"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>

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
                  Prefer email? Reach us at hello@devgrate.com
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
