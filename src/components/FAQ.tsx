import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ = () => {
  const { t } = useLanguage();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#081229] mb-4">
            {f.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">{f.title2}</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg">{f.subtitle}</p>
        </motion.div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {f.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
              >
                <button
                  id={`faq-question-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? 'text-[#6851FF]' : 'text-[#081229] group-hover:text-[#6851FF]'}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${isOpen ? 'bg-[#6851FF] border-[#6851FF] text-white' : 'bg-white border-slate-300 text-slate-400 group-hover:border-[#6851FF] group-hover:text-[#6851FF]'}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 md:pb-6 text-slate-500 leading-relaxed text-sm md:text-base pr-10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm">
            {f.stillQuestion}{' '}
            <a href="mailto:hello@vants.xyz" className="text-[#6851FF] font-medium hover:underline underline-offset-4">
              {f.talkToUs}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
