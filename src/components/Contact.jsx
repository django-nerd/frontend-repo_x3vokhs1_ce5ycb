import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Mock submission for the sandbox; replace with your backend endpoint when ready
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="mb-8 text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black">
            <Mail size={18} />
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Let’s talk</h2>
          <p className="mt-2 text-white/70">Interested in working together? Send a quick note and I’ll reply within 24h.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
          </div>
          <textarea
            required
            placeholder="Project, role, or a quick hello"
            rows={5}
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2.5 text-black font-medium disabled:opacity-60"
          >
            {status === 'success' ? (
              'Sent — talk soon!'
            ) : (
              <>
                <Send size={16} />
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
