import en from './compiled/en.json';
import ko from './compiled/ko.json';

export const messages: { [key: string]: any } = {
  en,
  ko,
};

export enum AppLanguage {
  English = 'en',
  Korean = 'ko',
}

export const supportedLanguages: String[] = Object.values(AppLanguage);
