import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  fullHeight?: boolean;
};

const Loader: React.VFC<Props> = ({ fullHeight }) => {
  const node = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (process.browser && fullHeight && node.current != null) {
      setHeight(
        window.innerHeight -
          (document.querySelector('header')?.offsetHeight ?? 0) -
          (document.querySelector('footer')?.offsetHeight ?? 0),
      );
    }
  }, [fullHeight]);

  return (
    <Box
      ref={node}
      alignItems="center"
      display="flex"
      height={fullHeight ? height : 'auto'}
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
