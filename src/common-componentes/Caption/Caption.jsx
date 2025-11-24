import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
  FontLetterSpacings,
} from '../../shared/DesignTokens';

export function Caption({
  color = Colors.NEUTRAL_BLACK,
  children,
  ...props
}) {
  return (
    <span
      {...props}
      style={{
        fontFamily: FontFamilies.PRIMARY,
        fontWeight: FontWeights.REGULAR,
        lineHeight: FontLineHeights.SMALL,
        fontSize: FontSizes.ONE_HALF,
        color: color,
        margin: 0,
        padding: 0,
        textTransform: 'uppercase',
        letterSpacing: FontLetterSpacings.MEDIUM,
      }}
    >
      {children}
    </span>
  );
}
