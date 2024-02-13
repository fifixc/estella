import { SITE } from './config';
import { trim } from './others';

const BASE_PATHNAME = SITE.base || '/';

export const trimSlash = (s: string) => trim(trim(s, '/'));

export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((element) => trimSlash(element))
    .filter((element) => !!element)
    .join('/');
