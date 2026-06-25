/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form ID (the hashid in https://formspree.io/f/<id>). */
  readonly VITE_FORMSPREE_FORM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
