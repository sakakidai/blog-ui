import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const tailwind = resolveConfig(tailwindConfig);

export function useMaxBreakPoint(breakpoint) {
  return useMediaQuery({
    query: `(max-width: ${tailwind.theme.screens[breakpoint]})`,
  });
}

export function useMinBreakPoint(breakpoint) {
  return useMediaQuery({
    query: `(min-width: ${tailwind.theme.screens[breakpoint]})`,
  });
}
