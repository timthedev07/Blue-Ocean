type Translation = Record<string, string | string[] | Record<string, string>>;

export const getTranslation = <T extends Translation>(
  locale: string | undefined,
  en: T,
  es: T,
  zh: T
) => {
  switch (locale) {
    case "es-ES":
      return es;
    case "zh-CN":
      return zh;
    default:
      return en;
  }
};

export const getSingleTranslation = (
  locale: string | undefined,
  en: string,
  es: string,
  zh: string
) => {
  switch (locale) {
    case "es-ES":
      return es;
    case "zh-CN":
      return zh;
    default:
      return en;
  }
};

interface TranslationsObj {
  en: string;
  es: string;
  zh: string;
}
export const getSingleTranslationObj = (
  locale: string | undefined,
  translations: TranslationsObj
) => {
  switch (locale) {
    case "es-ES":
      return translations.es;
    case "zh-CN":
      return translations.zh;
    default:
      return translations.en;
  }
};
