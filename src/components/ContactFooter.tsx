import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const inputBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.19)',
  borderRadius: '2px',
  background: 'rgba(255,255,255,0.04)',
  color: 'rgba(255,255,255,0.82)',
};

const labelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.36)',
  fontSize: '10px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  display: 'block',
  marginBottom: '8px',
};

const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.currentTarget.style.borderColor = 'rgba(184,154,79,0.50)';
  e.currentTarget.style.outline = 'none';
};
const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.19)';
};

export const ContactFooter = () => {
  const [formData, setFormData] = useState({ ime: "", prezime: "", email: "", poruka: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Upit od ${formData.ime} ${formData.prezime}`;
    const body = `Ime: ${formData.ime}\nPrezime: ${formData.prezime}\nEmail: ${formData.email}\n\nPoruka:\n${formData.poruka}`;
    window.location.href = `mailto:info@uciliste-suprastudium.hr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer id="kontakt" className="relative py-24 bg-[#0E0E0E] text-white overflow-hidden">
      {/* Top gold divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(184,154,79,0.22), transparent)' }}
      />

      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] font-normal mb-5" style={{ color: '#B89A4F' }}>
              Kontakt
            </p>
            <h2 className="font-playfair font-semibold text-[1.75rem] leading-[1.25] mb-6" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Informacije i prijave.
            </h2>
            <p className="text-[14px] leading-[1.75] font-normal" style={{ color: 'rgba(255,255,255,0.54)', maxWidth: '52ch' }}>
              Za informacije o edukaciji, prijavi i raspoloživim terminima kontaktirajte nas direktno.
            </p>
          </motion.div>

          {/* 2-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">

            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              <div className="pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-[10px] uppercase tracking-[0.22em] mb-2 font-normal" style={{ color: '#B89A4F' }}>
                  Telefon
                </p>
                <p className="text-[15px] font-normal" style={{ color: 'rgba(255,255,255,0.84)' }}>
                  +385 95 85 58 953
                </p>
                <p className="text-[11.5px] mt-1 font-normal" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  WhatsApp · Viber
                </p>
              </div>

              <div className="py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-[10px] uppercase tracking-[0.22em] mb-2 font-normal" style={{ color: '#B89A4F' }}>
                  Email
                </p>
                <p className="text-[15px] font-normal" style={{ color: 'rgba(255,255,255,0.84)' }}>
                  info@uciliste-suprastudium.hr
                </p>
              </div>

              <div className="pt-6">
                <p className="text-[13px] leading-[1.75] font-normal" style={{ color: 'rgba(255,255,255,0.46)' }}>
                  Odgovaramo radnim danom,<br />
                  najčešće unutar 24 sata.
                </p>
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Ime</label>
                    <input
                      type="text"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                      required
                      className="w-full px-4 py-3 text-[14px] placeholder-white/20 transition-colors duration-200"
                      style={inputBase}
                      placeholder="Ime"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Prezime</label>
                    <input
                      type="text"
                      name="prezime"
                      value={formData.prezime}
                      onChange={handleChange}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                      required
                      className="w-full px-4 py-3 text-[14px] placeholder-white/20 transition-colors duration-200"
                      style={inputBase}
                      placeholder="Prezime"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                    required
                    className="w-full px-4 py-3 text-[14px] placeholder-white/20 transition-colors duration-200"
                    style={inputBase}
                    placeholder="email@adresa.hr"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Poruka</label>
                  <textarea
                    rows={5}
                    name="poruka"
                    value={formData.poruka}
                    onChange={handleChange}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                    required
                    className="w-full px-4 py-3 text-[14px] placeholder-white/20 transition-colors duration-200 resize-none"
                    style={inputBase}
                    placeholder="Poruka"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-[10.5px] uppercase tracking-[0.12em] font-normal py-3.5 transition-colors duration-300"
                  style={{ border: '1px solid rgba(184,154,79,0.58)', color: 'rgba(255,255,255,0.72)', background: 'transparent', cursor: 'pointer', borderRadius: '2px' }}
                  onMouseEnter={e => { const b = e.currentTarget; b.style.background = '#B89A4F'; b.style.borderColor = '#B89A4F'; b.style.color = '#fff'; }}
                  onMouseLeave={e => { const b = e.currentTarget; b.style.background = 'transparent'; b.style.borderColor = 'rgba(184,154,79,0.58)'; b.style.color = 'rgba(255,255,255,0.72)'; }}
                >
                  Pošalji poruku
                </button>
              </form>
            </motion.div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Social icons */}
            <div className="flex items-center gap-7">
              {[
                { href: 'https://www.facebook.com/profile.php?id=100078666409012', Icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/suprastudium/', Icon: Instagram, label: 'Instagram' },
                { href: 'https://www.youtube.com/@anteantic7905', Icon: Youtube, label: 'YouTube' },
                { href: '#', Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.52)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#B89A4F'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.52)'; }}
                >
                  <Icon className="w-[15px] h-[15px]" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-[11px] font-normal" style={{ color: 'rgba(255,255,255,0.36)' }}>
                © 2026 Supra Studium
              </p>
              <p className="text-[11px] font-normal mt-0.5" style={{ color: 'rgba(255,255,255,0.26)' }}>
                Učilište za manualne terapije i edukacije
              </p>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};
