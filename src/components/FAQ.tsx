import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What exactly is Vants?',
    answer:
      'Vants is a global financial app that lets you put your savings to work in high-yield accounts and use those same funds to pay your everyday bills in seconds. Your money earns returns until the exact moment you need to make a payment.',
  },
  {
    question: 'How do I pay a bill using my investments?',
    answer:
      "It's completely seamless. You just scan a Pix, SPEI, or CBU QR code. Vants automatically calculates the exact amount needed, converts it from your invested balance, and settles the payment in under 5 seconds. No manual withdrawals required.",
  },
  {
    question: "Do I lose access to my money when it's earning returns?",
    answer:
      'Not at all. Your money is always yours. Unlike traditional accounts that might lock your funds away for months, your balance in Vants is always available to spend or withdraw instantly, 24/7.',
  },
  {
    question: 'Is my money safe? Does Vants hold my funds?',
    answer:
      'We use automated bank-grade security to ensure your assets are protected. More importantly, you have total ownership of your money. Vants provides the technology to orchestrate your payments and earnings, but we never hold, lend, or lock your funds.',
  },
  {
    question: 'How do the returns compare to my regular bank?',
    answer:
      'Traditional banks often pay less than inflation on idle cash. Vants connects your account to global digital dollars and high-yield accounts, allowing your money to work harder and protect your purchasing power globally.',
  },
  {
    question: 'Are there any monthly fees?',
    answer:
      'No. Opening an account and earning returns is completely free. We only apply a small, fully transparent conversion rate at the exact moment you make a payment or transfer.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#081229] mb-4">
            Frequently asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">
              questions
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Everything you need to know before you get started.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <button
                  id={`faq-question-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base md:text-lg font-semibold transition-colors ${
                      isOpen ? 'text-[#6851FF]' : 'text-[#081229] group-hover:text-[#6851FF]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#6851FF] border-[#6851FF] text-white'
                        : 'bg-white border-slate-300 text-slate-400 group-hover:border-[#6851FF] group-hover:text-[#6851FF]'
                    }`}
                  >
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

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm">
            Still have questions?{' '}
            <a
              href="mailto:hello@vants.xyz"
              className="text-[#6851FF] font-medium hover:underline underline-offset-4"
            >
              Talk to us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
