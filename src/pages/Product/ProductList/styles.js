export const editHighlightLine = (open) => ({
  position: 'relative',
  '&::after': open
    ? {
        position: 'absolute',
        content: '" "',
        top: '0px',
        left: '0px',
        backgroundColor: 'primary.main',
        width: '3px',
        height: 'calc(100% + 1px)',
      }
    : '',
});
