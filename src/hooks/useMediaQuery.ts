import { useMediaQuery } from 'react-responsive';

const TABLET_RESOLUTION = 768;
const MOBILE_L_RESOLUTION = 425;
const SMALL_LAPTOP_RESOLUTION = 1280;

export const useMedia = () => {
  const isTablet = useMediaQuery({ maxWidth: TABLET_RESOLUTION });
	const isMobileL = useMediaQuery({ maxWidth: MOBILE_L_RESOLUTION });
	const isSmallLaptop = useMediaQuery({ maxWidth: SMALL_LAPTOP_RESOLUTION });

  return { isTablet, isMobileL, isSmallLaptop };
};
