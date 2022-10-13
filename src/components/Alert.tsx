import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from 'grommet';

const variantStyles = {
  primary: {
    backgroundColor: '#cce5ff',
    borderColor: '#b8daff',
  },
  warning: {
    backgroundColor: '#fffbe5',
    borderColor: '#fcdfa2',
  },
  secondary: {
    backgroundColor: '#fdfcfe',
    borderColor: '#d3d3d3',
  },
  info: {
    backgroundColor: '#e8f2ff',
    borderColor: '#b5cff1',
  },
  error: {
    backgroundColor: '#fafafa',
    borderColor: '#e8e8e8',
  },
  success: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  empty: {
    backgroundColor: undefined,
    borderColor: undefined,
  },
};

const HighlightStyles = styled.div`
  .alert-highlight {
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.04);
    margin-right: 3px;
    margin-left: 3px;
  }
`;

export const Alert = (
  props: {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
    style?: any;
    variant?: string;
  } & BoxProps
): JSX.Element => {
  const { variant = 'primary', className, children, pad } = props;
  return (
    <Box
      border
      className={className}
      pad={pad || 'medium'}
      round="xsmall"
      variant={variant}
      {...props}
      // @ts-ignore
      style={variantStyles[variant]}
    >
      <HighlightStyles>{children}</HighlightStyles>
    </Box>
  );
};
