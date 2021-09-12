import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const tailwind = resolveConfig(tailwindConfig);

const useBreakPoint = (breakpoint) => {
  return useMediaQuery({
    query: `(max-width: ${tailwind.theme.screens[breakpoint]})`,
  });
};

export default useBreakPoint;
