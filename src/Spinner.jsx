// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0def);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
`;

const Spinner = () => (
  <Image alt="loading indicator" src="/public/img/loading.png" />
);

export default Spinner;
