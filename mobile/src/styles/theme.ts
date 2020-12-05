export default {
  colors: {
    black: '#272727',
    grey: '#919191',
    lightGrey: '#E7E7E8',
    white: '#FFFFFF',
    red: '#E40000',
    green: '#41D168',
    blue: '#0055D4',
  },
  fontFamily: {
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
  },
  textVariantes: {
    title: {
      fontSize: '32px',
      fontFamily: 'Inter_700Bold',
      lineHeight: '44px',
    },
    body1: {
      fontSize: '18px',
      fontFamily: 'Inter_500Medium',
      lineHeight: '22px',
    },
    body2: {
      fontSize: '16px',
      fontFamily: 'Inter_500Medium',
      lineHeight: '22px',
    },
    body3: {
      fontSize: '14px',
      fontFamily: 'Inter_500Medium',
      lineHeight: '18px',
    },
    caption: {
      fontSize: '12px',
      fontFamily: 'Inter_500Medium',
      lineHeight: '18px',
    },
  },
} as const;
