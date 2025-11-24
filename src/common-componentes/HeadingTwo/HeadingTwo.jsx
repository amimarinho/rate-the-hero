import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from '../../shared/DesignTokens';

export function HeadingTwo({ color = Colors.NEUTRAL_BLACK, children, ...props }) {
  return (
    <h2
      {...props}
      style={{
        fontFamily: FontFamilies.PRIMARY,
        fontWeight: FontWeights.BOLD,
        lineHeight: FontLineHeights.MEDIUM,
        fontSize: FontSizes.THREE,
        color: color,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </h2>
  );
}
