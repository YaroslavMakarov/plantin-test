import { useMediaQuery } from 'react-responsive';

const TABLET_RESOLUTION = 768;
const MOBILE_L_RESOLUTION = 425;

export const useMedia = () => {
  const isTablet = useMediaQuery({ maxWidth: TABLET_RESOLUTION });
	const isMobileL = useMediaQuery({ maxWidth: MOBILE_L_RESOLUTION });

  return { isTablet, isMobileL };
};
