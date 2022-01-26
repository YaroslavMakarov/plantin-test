import { useMediaQuery } from 'react-responsive';

const TABLET_RESOLUTION = 768;
const MOBILE_L_RESOLUTION = 425;

export const useMedia = () => {
  const isTable = useMediaQuery({ maxWidth: TABLET_RESOLUTION });
	const isMobileL = useMediaQuery({ maxWidth: MOBILE_L_RESOLUTION });

  return { isTable, isMobileL };
};
