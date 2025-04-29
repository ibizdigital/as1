import localFont from 'next/font/local';

// Define local font for Saans
const saansRegular = localFont({
  src: '../images_assets/font/SaansRegular.woff',
  display: 'swap',
  variable: '--font-sans',
  weight: '400',
});

const saansBold = localFont({
  src: '../images_assets/font/SaansBold.woff',
  display: 'swap',
  variable: '--font-sans-bold',
  weight: '700',
});

export const fonts = { 
  sans: saansRegular,
  sansBold: saansBold
};