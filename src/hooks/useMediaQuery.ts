import { useMediaQuery } from 'react-responsive';

const MOBILE_RESOLUTION = 430;

export const useMedia = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_RESOLUTION });

  return { isMobile };
};
