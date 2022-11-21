import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import { routesEnum } from '../Routes';
import { Link } from './Link';

import { Button } from './Button';

import { colors } from '../styles/styledComponentsTheme';

const Rhino = styled.span`
  font-size: 20px;
`;

const RainbowBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background-color: ${colors.blue.darkest};
`;

const FooterStyles = styled.div`
  color: ${colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkStyled = styled.div`
  color: ${p => p.theme.blue.agoraLight};
`;

const ButtonLink = styled(Link)`
  width: fit-content;
  padding: 0;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <RainbowBackground>
      <FooterStyles>
        <div className="col">
          <Heading level={4} color={colors.white}>
            <FormattedMessage defaultMessage="Agora Staking" />
          </Heading>
          <LinkStyled>
            <Link to={routesEnum.acknowledgementPage}>
              <FormattedMessage defaultMessage="Deposit" />
            </Link>
            <Link to={routesEnum.checklistPage}>
              <FormattedMessage defaultMessage="Checklist" />
            </Link>
            <Link to={routesEnum.FaqPage}>
              <FormattedMessage defaultMessage="FAQ" />
            </Link>
            <Link to={routesEnum.termsOfServicePage}>
              <FormattedMessage defaultMessage="Terms of Service" />
            </Link>
          </LinkStyled>
        </div>

        {!despotWorkflowRoutes.includes(pathname as routesEnum) && (
          <ButtonContainer className="m-auto">
            <ButtonLink
              to={routesEnum.acknowledgementPage}
              className="cta-button"
            >
              <Button
                fullWidth
                width={400}
                label={
                  <FormattedMessage
                    defaultMessage="Become a validator {emoji}"
                    values={{
                      emoji: (
                        <Rhino>
                          <span role="img">️</span>
                        </Rhino>
                      ),
                    }}
                  />
                }
              />
            </ButtonLink>
          </ButtonContainer>
        )}
        <div className="col extra-links">
          <Heading level={4} color={colors.white}>
            <FormattedMessage defaultMessage="More on staking" />
          </Heading>
          <LinkStyled>
            <Link to={routesEnum.phishingPage}>
              <FormattedMessage defaultMessage="Avoid phishing" />
            </Link>
            <Link to="https://bosagora.io/wp-content/uploads/2022/05/BOSAGORA_Whitepaper_EN_2103_3.pdf">
              <FormattedMessage defaultMessage="White Paper (EN)" />
            </Link>
            <Link to="https://bosagora.io/wp-content/uploads/2022/05/BOSAGORA_Whitepaper_CH_2103_3.pdf">
              <FormattedMessage defaultMessage="White Paper (CH)" />
            </Link>
            <Link to="https://t.me/bosagora_eng">
              <FormattedMessage defaultMessage="Community" />
            </Link>
            <Link to="https://medium.com/bosagora">
              <FormattedMessage defaultMessage="Blog" />
            </Link>
          </LinkStyled>
        </div>
      </FooterStyles>
    </RainbowBackground>
  );
};
