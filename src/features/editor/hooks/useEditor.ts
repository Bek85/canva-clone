import { useCallback } from 'react';

export const useEditor = () => {
  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: any;
      initialContainer: HTMLDivElement;
    }) => {
      console.log('Init editor');
    },
    []
  );

  return { init };
};
