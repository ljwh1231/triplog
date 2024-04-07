const PRIMARY_FONT_REGULAR = 'PretendardStd-Regular';
const PRIMARY_FONT_SEMI = 'PretendardStd-Semi';
const PRIMARY_FONT_BOLD = 'PretendardStd-Bold';
const PRIMARY_FONT_MEDIUM = 'PretendardStd-Medium';

export const FONTS = {
  regular_10: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_11: {
    fontSize: 11,
    lineHeight: 19,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_12: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_13: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_14: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_16: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_18: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  regular_24: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '400',
    fontFamily: PRIMARY_FONT_REGULAR,
  },
  medium_12: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
  medium_14: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
  medium_16: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
  medium_18: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
    fontFamily: PRIMARY_FONT_MEDIUM,
  },
  semibold_10: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_11: {
    fontSize: 11,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_12: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_13: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_14: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_16: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_18: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_20: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_22: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_24: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_26: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_28: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_32: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  semibold_40: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '600',
    fontFamily: PRIMARY_FONT_SEMI,
  },
  bold_20: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: PRIMARY_FONT_BOLD,
  },
  bold_22: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    fontFamily: PRIMARY_FONT_BOLD,
  },
  bold_24: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    fontFamily: PRIMARY_FONT_BOLD,
  },
  bold_28: {
    fontSize: 28,
    lineHeight: 39,
    fontWeight: '700',
    fontFamily: PRIMARY_FONT_BOLD,
  },
  bold_32: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '700',
    fontFamily: PRIMARY_FONT_BOLD,
  },
  extrabold_10: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '900',
    fontFamily: PRIMARY_FONT_BOLD,
  },
  extrabold_18: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '900',
    fontFamily: PRIMARY_FONT_BOLD,
  },
} as const;

export type FontType = keyof typeof FONTS;

export default FONTS;
