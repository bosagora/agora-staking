import en from './compiled/en.json';
import ko from './compiled/ko.json';
import tr from './compiled/tr.json';

export const messages: { [key: string]: any } = {
  en,
  ko,
  tr,
};

export enum AppLanguage {
  English = 'en',
  Korean = 'ko',
  Turkish = 'tr',
}

export const supportedLanguages: String[] = Object.values(AppLanguage);
