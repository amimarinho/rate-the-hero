import { Colors, BorderRadiuses } from '../../shared/DesignTokens';

export function Card({ children, ...props }) {
  return (
    <div
      {...props}
      style={{
        width: '100%',
        height: '100%',
        border: `1px solid ${Colors.GRAY_200}`,
        borderRadius: BorderRadiuses.ONE,
      }}
    >
      {children}
    </div>
  );
}
