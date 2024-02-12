export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
}
export interface I18NConfig {
    language: string,
    textDirection: string;
    dateFormatter?: Intl.DateTimeFormat;
}

export const getSite = () => {
    return {
        name: 'Estella',
        site: 'https://estella.vercel.app',
        base: '/',
        trailingSlash: true,
    } as SiteConfig;
};
const getI18N = () => {
    const value = {
        language: 'es',
        textDirection: 'ltr',
    };

    return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
    }),
    }) as I18NConfig;
};

export const SITE = getSite();
export const I18N = getI18N();