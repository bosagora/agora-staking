// Libary imports
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
// Component imports
import { Text } from './Text';

const Container = styled(Text as any)`
  background: #ffdeb32e;
  border: 1px solid burlywood;
  padding: 30px;
  border-radius: 4px;
`;

export interface ClientDiversityWarningProps {
  children: React.ReactNode;
  className?: string;
}

export const ClientDiversityWarning = (props: ClientDiversityWarningProps) => {
  const { children, className } = props;
  return (
    <Container className={className}>
      {!!children && <p>{children}</p>}
      <p>
        <FormattedMessage
          defaultMessage="Client diversity is extremely important for the network health of AGORA:
            A bug in a client with a share of over 33% can cause AGORA to go offline. If the client has
            a supermajority (>66%), a bug could cause the chain to incorrectly split, potentially leading to
            slashing."
        />
      </p>
      <p>
        <FormattedMessage defaultMessage="If at all possible, consider running another client at this time to help protect yourself and the network." />
      </p>
    </Container>
  );
};
