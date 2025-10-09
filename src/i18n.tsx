// Ubicación: src/i18n.tsx
import i18n, { type Resource, type ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ✅ Cargar locales desde features **y** layout
const localeModules = import.meta.glob(
  "./{features,layout}/**/locales/*.json",
  { eager: true, import: "default" }
) as Record<string, unknown>;

// resources: { [lang]: { [namespace]: object } }
const resources: Resource = { es: {}, en: {} };

// ✅ Aceptar rutas que empiecen con features/ o layout/
//    y usar el nombre de carpeta como namespace (p.ej. "navbar")
const LOCALE_RE = /(?:features|layout)\/([^/]+)\/locales\/(en|es)\.json$/;

for (const [path, mod] of Object.entries(localeModules)) {
  const m = path.replaceAll("\\", "/").match(LOCALE_RE); // windows-safe
  if (!m) continue;
  const [, ns, lang] = m as unknown as [string, string, "en" | "es"];
  const langBucket = resources[lang] as ResourceLanguage;
  langBucket[ns] = mod as Record<string, unknown>;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "querystring", "navigator"],
      caches: ["localStorage"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "i18nextLng",
    },
    react: { useSuspense: false },
  });

// sincronizar <html lang="...">
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng || "es");
});
document.documentElement.setAttribute("lang", i18n.resolvedLanguage || "es");

export default i18n;
