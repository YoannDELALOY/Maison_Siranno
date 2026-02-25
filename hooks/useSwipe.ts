import { useRef } from 'react';

/**
 * Détecte un swipe horizontal tactile et appelle onNext / onPrev.
 * @param onNext  Fonction appelée quand l'utilisateur swipe vers la gauche (suivant)
 * @param onPrev  Fonction appelée quand l'utilisateur swipe vers la droite (précédent)
 * @param threshold Distance minimale en px pour déclencher le swipe (défaut : 50)
 */
export const useSwipe = (onNext: () => void, onPrev: () => void, threshold = 50) => {
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > threshold) {
      if (delta > 0) onNext();
      else onPrev();
    }
  };

  return { handleTouchStart, handleTouchEnd };
};
