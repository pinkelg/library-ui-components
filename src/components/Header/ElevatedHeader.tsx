import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { Header } from './Header';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const ElevatedHeader = () => (
  <ElevationScroll>
    <Header />
  </ElevationScroll>
);

export { ElevatedHeader };
