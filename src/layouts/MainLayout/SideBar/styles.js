import { styled } from '@mui/material/styles';

export const sideBarButton = (active) => ({
  backgroundColor: active && 'rgba(255,255,255, 0.08)',
  borderRadius: 1,
  color: active ? 'secondary.main' : 'neutral.300',
  fontWeight: active && 'fontWeightBold',
  fontSize: 15,
  justifyContent: 'flex-start',
  px: 3,
  py: 1,
  textAlign: 'left',
  textTransform: 'none',
  width: '100%',
  '& .MuiButton-startIcon': {
    color: active ? 'secondary.main' : 'neutral.400',
  },
  '&:hover': {
    backgroundColor: 'rgba(255,255,255, 0.08)',
  },
});

export const SideBarTitleExpand = styled('span')({
  marginRight: 'auto',
});
