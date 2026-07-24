'use client'; // Wajib kalau pakai App Router

import { useEffect } from 'react';

export default function ErudaTools() {
  useEffect(() => {
    // Hanya jalankan di browser
    if (typeof window !== 'undefined') {
      import('eruda').then((eruda) => {
        eruda.default.init();
      });
    }
  }, []);

  return null; // Komponen ini tidak merender UI HTML tambahan
}
