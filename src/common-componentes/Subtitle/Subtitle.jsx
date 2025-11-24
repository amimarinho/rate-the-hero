import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from '../../shared/DesignTokens';

export function Subtitle({ color = Colors.GRAY_700, children, ...props }) {
  return (
    <span
      {...props}
      style={{
        fontFamily: FontFamilies.PRIMARY,
        fontWeight: FontWeights.REGULAR,
        lineHeight: FontLineHeights.MEDIUM,
        fontSize: FontSizes.TWO,
        color: color,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </span>
  );
}
