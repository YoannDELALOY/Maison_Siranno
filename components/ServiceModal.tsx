import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceData } from './Services';
import { SectionId } from '../types';

interface ServiceModalProps {
  service: ServiceData | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [service]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-paper rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/40 animate-slide-up">

        {/* Header */}
        <div className="relative p-8 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gold hover:text-white transition-all"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-paper shadow-inner flex items-center justify-center text-gold border border-gold/20">
              {service.icon}
            </div>
            <div>
              <span className="text-xs font-medium text-gold uppercase tracking-widest">Expertise</span>
              <h2 className="font-serif text-2xl font-bold text-metallic-navy">{service.title}</h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">

          {/* Description complète */}
          <div>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              {service.fullDescription}
            </p>
          </div>

          {/* Bénéfices */}
          <div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-4">Ce que vous obtenez</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-safe-green mt-0.5 shrink-0" />
                  <span className="text-charcoal/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cas d'usage */}
          <div>
            <h3 className="font-serif text-lg font-bold text-charcoal mb-4">Qui est concerné ?</h3>
            <div className="flex flex-wrap gap-2">
              {service.useCases.map((uc, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white border border-gold/30 rounded-full text-sm text-charcoal font-medium"
                >
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-gray-100">
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={onClose}
              className="w-full btn-metallic-dark text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              Discuter de ce service <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
