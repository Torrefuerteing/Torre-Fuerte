// Helper seguro para enviar eventos a Google Analytics 4 (gtag).
// Si GA aún no carga o el ID no está configurado, no rompe nada.
export function trackEvent(name, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }
  } catch (e) {
    // silencioso a propósito
  }
}
