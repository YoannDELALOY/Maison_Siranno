import React, { useRef } from 'react';

/**
 * Détecte un swipe horizontal tactile et appelle onNext / onPrev.
 *
 * @param onNext    Callback déclenché quand l'utilisateur swipe vers la gauche (→ suivant)
 * @param onPrev    Callback déclenché quand l'utilisateur swipe vers la droite (→ précédent)
 * @param threshold Distance minimale en pixels pour valider le swipe (défaut : 50)
 * @returns         `handleTouchStart` et `handleTouchEnd` à passer aux props `onTouchStart`/`onTouchEnd`
 */
export const useSwipe = (onNext: () => void, onPrev: () => void, threshold = 50) => {
  /** Position X du doigt au moment du touchstart */
  const touchStartX = useRef<number>(0);

  /** Enregistre la position initiale du toucher */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  /**
   * Compare la position finale avec la position initiale.
   * Un delta positif (glissement vers la gauche) déclenche onNext,
   * un delta négatif (vers la droite) déclenche onPrev.
   */
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > threshold) {
      if (delta > 0) onNext();
      else onPrev();
    }
  };

  return { handleTouchStart, handleTouchEnd };
};
