import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import { Link } from '../../components/Link';
import { PageTemplate } from '../../components/PageTemplate';
import { supportedLanguages } from '../../intl';
import { colors } from '../../styles/styledComponentsTheme';

const LangContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const LangItem = styled(Link)`
  text-decoration: none;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;
  width: 240px;
  list-style: none;
  border-radius: 2px;
  border: 1px solid #000000;
  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background-color: ${colors.purple.darkest};
    color: ${colors.white};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const LangTitle = styled.div`
  font-size: 24px;
`;

const Lang = styled.div`
  font-size: 20px;
  margin-top: 1rem;
`;

export const Languages = () => {
  const { formatMessage } = useIntl();
  const langs = [
    {
      code: 'ar',
      title: formatMessage({ defaultMessage: 'Arabic' }),
      language: 'العربية',
    },
    {
      code: 'bg',
      title: formatMessage({ defaultMessage: 'Bulgarian' }),
      language: 'Български',
    },
    {
      code: 'cs',
      title: formatMessage({ defaultMessage: 'Czech' }),
      language: 'čeština',
    },
    {
      code: 'de',
      title: formatMessage({ defaultMessage: 'German' }),
      language: 'Deutsch',
    },
    {
      code: 'el',
      title: formatMessage({ defaultMessage: 'Greek' }),
      language: 'Ελληνικά',
    },
    {
      code: 'en',
      title: formatMessage({ defaultMessage: 'English' }),
      language: 'English',
    },
    {
      code: 'es',
      title: formatMessage({ defaultMessage: 'Spanish' }),
      language: 'Español',
    },
    {
      code: 'fr',
      title: formatMessage({ defaultMessage: 'French' }),
      language: 'Français',
    },
    {
      code: 'hu',
      title: formatMessage({ defaultMessage: 'Hungarian' }),
      language: 'Magyar',
    },
    {
      code: 'id',
      title: formatMessage({ defaultMessage: 'Indonesian' }),
      language: 'Bahasa Indonesia',
    },
    {
      code: 'it',
      title: formatMessage({ defaultMessage: 'Italian' }),
      language: 'Italiano',
    },
    {
      code: 'ja',
      title: formatMessage({ defaultMessage: 'Japanese' }),
      language: '日本語',
    },
    {
      code: 'ko',
      title: formatMessage({ defaultMessage: 'Korean' }),
      language: '한국어',
    },
    {
      code: 'pl',
      title: formatMessage({ defaultMessage: 'Polish' }),
      language: 'Polskie',
    },
    {
      code: 'pt-br',
      title: formatMessage({ defaultMessage: 'Portuguese (Brazilian)' }),
      language: 'Português',
    },
    {
      code: 'ro',
      title: formatMessage({ defaultMessage: 'Romanian' }),
      language: 'Română',
    },
    {
      code: 'ru',
      title: formatMessage({ defaultMessage: 'Russian' }),
      language: 'Pусский',
    },
    {
      code: 'sl',
      title: formatMessage({ defaultMessage: 'Slovenian' }),
      language: 'Slovenščina',
    },
    {
      code: 'tr',
      title: formatMessage({ defaultMessage: 'Turkish' }),
      language: 'Türkçe',
    },
    {
      code: 'zh',
      title: formatMessage({ defaultMessage: 'Chinese (simplified)' }),
      language: '简体中文',
    },
    {
      code: 'zh-tw',
      title: formatMessage({ defaultMessage: 'Chinese (traditional)' }),
      language: '繁體中文',
    },
  ]
    .filter(lang => supportedLanguages.includes(lang.code))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageTemplate
      title={formatMessage({ defaultMessage: 'Language support' })}
      header={formatMessage({ defaultMessage: 'Choose a language' })}
    >
      <LangContainer>
        {langs.map((lang, idx) => {
          return (
            <LangItem key={String(idx)} to={`/${lang.code}`}>
              <ContentContainer>
                <LangTitle>{lang.language}</LangTitle>
                <Lang>{lang.title}</Lang>
              </ContentContainer>
            </LangItem>
          );
        })}
      </LangContainer>
    </PageTemplate>
  );
};
