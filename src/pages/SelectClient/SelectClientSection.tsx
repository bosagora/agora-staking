import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import { FormattedMessage } from 'react-intl';
import { Link } from '../../components/Link';
import { Paper } from '../../components/Paper';
import { Heading } from '../../components/Heading';
import { ImageSelectionBox } from '../../components/ImageSelectionBox';
import { Alert } from '../../components/Alert';
import { Client } from './index';
import { ClientId } from '../../store/actions/clientActions';

const ClientOptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ClientDescriptionContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #fcfcfc;
  border: 1px solid #ececec;
  margin-top: 30px;
  padding: 1rem 2rem;
`;

type Props = {
  title?: string;
  clients: Array<Client>;
  currentClient: ClientId;
  setCurrentClient: (client: ClientId) => void;
  clientDetails: any;
  ethClientStep: string;
};

const SelectClientSection = ({
  title,
  clients,
  currentClient,
  setCurrentClient,
  clientDetails,
  ethClientStep,
}: Props): JSX.Element => (
  <Paper>
    <Heading level={3} size="small" className="mb20">
      {title}
    </Heading>
    {ethClientStep === 'execution' && (
      <div style={{ paddingBottom: '1rem' }}>
        <FormattedMessage
          defaultMessage="To process incoming validator deposits from the execution layer,
           you'll need to run an execution client (Agora-el) as well as your consensus
            client (Agora-cl). We recommend running your own client to keep the network
            as decentralized as possible."
        />
      </div>
    )}
    <Box className="flex flex-column space-between mt10">
      <ClientOptionContainer>
        {clients.map(({ clientId, name, imgUrl, language }) => {
          const inputId = `${clientId}-client`;
          const onClick = () => setCurrentClient(clientId);

          return (
            <ImageSelectionBox
              fullWidthImg
              key={inputId}
              src={imgUrl}
              isActive={currentClient === clientId}
              onClick={onClick}
              text={name}
              language={language}
            />
          );
        })}
      </ClientOptionContainer>
      <ClientDescriptionContainer>
        {clientDetails[currentClient]}
      </ClientDescriptionContainer>
      <Alert variant="warning" className="mt30 mb20">
        <Heading level={4} className="mb10">
          <FormattedMessage defaultMessage="Remember" />
        </Heading>
        <ul>
          <li>
            <FormattedMessage defaultMessage="After client installation, ensure you are fully synced before submitting your staking deposit. This can take several days." />{' '}
            <Link primary inline to="/checklist">
              <FormattedMessage defaultMessage="Validator checklist" />
            </Link>
          </li>
          <li>
            <FormattedMessage defaultMessage="All stakers must operate an execution client as well as a consensus client starting at the Merge. Make sure you're prepared." />{' '}
          </li>
        </ul>
      </Alert>
    </Box>
  </Paper>
);

export default SelectClientSection;
