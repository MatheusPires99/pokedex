export default {
  colors: {
    black: '#272727',
    white: '#FFFFFF',
    grey: '#919191',
    lightGrey: '#E7E7E8',
    semiGrey: '#F4F5F4',
    red: '#FA6555',
    green: '#41D168',
    blue: '#0055D4',
    lilac: '#6C79DB',
  },
  fontFamily: {
    regular: 'Inter_400Regular',
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
    input: {
      fontSize: '14px',
      fontFamily: 'Inter_400Regular',
      lineHeight: '18px',
    },
    caption: {
      fontSize: '12px',
      fontFamily: 'Inter_500Medium',
      lineHeight: '18px',
    },
  },
} as const;
