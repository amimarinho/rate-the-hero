import React from 'react';

import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from '../../shared/DesignTokens';

export function Description({ color = Colors.NEUTRAL_BLACK, children, ...props }) {
  const styledChildren = React.Children.map(children, child => {
    if (typeof child === 'string') return child;
    if (child?.type === 'strong') {
      return React.cloneElement(child, {
        style: { fontWeight: FontWeights.BOLD },
      });
    }
    return child;
  });

  return (
    <span
      {...props}
      style={{
        fontFamily: FontFamilies.PRIMARY,
        fontWeight: FontWeights.REGULAR,
        lineHeight: FontLineHeights.SMALL,
        fontSize: FontSizes.ONE_QUARTER,
        color: color,
        margin: 0,
        padding: 0,
      }}
    >
      {styledChildren}
    </span>
  );
}
