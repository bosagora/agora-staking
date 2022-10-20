import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  SectionTitle,
  ValidatorClientPageStyles,
} from '../ValidatorClientComponents';
import { PageTemplate } from '../../../components/PageTemplate';
import { Text } from '../../../components/Text';
import { Link } from '../../../components/Link';
import { Code } from '../../../components/Code';
import { Heading } from '../../../components/Heading';
import { ClientMergeNotification } from '../../../components/ClientMergeNotification';

// eslint-disable-next-line no-unused-vars
export const GethDetails = () => (
  <>
    <SectionTitle level={2} className="mb5">
      Agora-el
    </SectionTitle>
    <Text className="mt10">
      <FormattedMessage defaultMessage="The implementation of the Agora protocol." />
    </Text>
    <SectionTitle level={2} className="mb5">
      <FormattedMessage defaultMessage="Language information" />
    </SectionTitle>
    <Text className="mt10">
      <FormattedMessage defaultMessage="Agora-el is written in Go, fully open source and licensed under the GNU LGPL v3." />
    </Text>
    <section>
      <SectionTitle level={2} className="mb5">
        <FormattedMessage defaultMessage="Installation" />
      </SectionTitle>
      <Text>
        <FormattedMessage defaultMessage="The Agora-el documentation explains how to download and install the client." />
      </Text>
      <Link
        primary
        to="https://docs.bosagora.org/validator-start/install-an-agora-node/agora-el"
        className="mt10"
      >
        <FormattedMessage defaultMessage="Agora-el installation documentation" />
      </Link>
    </section>
    <section>
      <SectionTitle level={2} className="mb5">
        <FormattedMessage defaultMessage="Setup" />
      </SectionTitle>
      <Text className="mb20 mt10">
        <FormattedMessage defaultMessage="Make sure you do the following to get your execution client working properly." />
      </Text>
      <Heading level={3} className="mt20">
        <FormattedMessage defaultMessage="JSON RPC endpoint" />
      </Heading>
      <Text className="mt10">
        <FormattedMessage
          defaultMessage="Use {http} to connect your consensus node to the JSON RPC
          endpoint. This will enable the JSON RPC services on the default 8545
          port."
          values={{
            http: <Code className="mt20">--http</Code>,
          }}
          description="{http} shows '--http' terminal command"
        />
      </Text>
      <Link primary to="https://docs.bosagora.org/agora-chain-info">
        <FormattedMessage defaultMessage="--http documentation" />
      </Link>
    </section>
  </>
);

export const Geth = () => {
  const { formatMessage } = useIntl();
  return (
    <PageTemplate
      title={formatMessage(
        { defaultMessage: 'Execution Clients: {clientName}' },
        { clientName: 'Agora-el' }
      )}
    >
      <ValidatorClientPageStyles>
        <ClientMergeNotification client="Agora-el" />
        <GethDetails />
        <section>
          <SectionTitle level={2} className="mb5">
            <FormattedMessage defaultMessage="Documentation" />
          </SectionTitle>
          <Link primary to="https://github.com/bosagora/agora-el">
            <FormattedMessage defaultMessage="Documentation on running Agora-el" />
          </Link>
        </section>
      </ValidatorClientPageStyles>
    </PageTemplate>
  );
};
