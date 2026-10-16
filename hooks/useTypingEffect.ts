"use client";

import { useState, useEffect } from "react";

interface TypingEffectOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect(
  phrases: string[],
  options: TypingEffectOptions = {}
) {
  const {
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseDuration = 1800,
  } = options;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentPhrase) {
      // Finished typing current phrase, wait before starting delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && text === "") {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Currently typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setText((current) => {
          if (isDeleting) {
            return current.slice(0, -1);
          } else {
            return currentPhrase.slice(0, current.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return { text, isDeleting, currentPhrase: phrases[phraseIndex] };
}
