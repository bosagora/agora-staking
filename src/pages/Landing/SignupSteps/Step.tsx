import React from 'react';
import styled from 'styled-components';
import { Heading } from '../../../components/Heading';
import { Text } from '../../../components/Text';

const Container = styled.div`
  max-width: 340px;
  margin: 32px 0px;
`;

const Emoji = styled.span`
  height: 100px;
`;

const EmojiBackground = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  padding: 0px 0px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-right: 30px;
`;

interface Props {
  emoji?: any;
  emojiAlt?: string;
  title: string;
  content: string;
  children?: any;
}

export const Step = ({
  emoji,
  emojiAlt,
  title,
  content,
  children,
}: Props): JSX.Element => {
  return (
    <Container>
      <EmojiBackground>
        <Emoji>
          <img src={emoji} alt={emojiAlt} />
        </Emoji>
      </EmojiBackground>
      <Body>
        <div>
          <Heading level="4" className="my10">
            {title}
          </Heading>
          <Text>{content}</Text>
        </div>
        {children}
      </Body>
    </Container>
  );
};
