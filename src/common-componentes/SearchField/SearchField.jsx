import {
  BorderRadiuses,
  Colors,
  FontFamilies,
  FontLetterSpacings,
  FontSizes,
  Spaces,
} from '../../shared/DesignTokens';
import searchIcon from '../../assets/icons/search.svg';

export function SearchField(props) {
  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '16px 1fr',
        gap: Spaces.TWO,
        padding: `${Spaces.NONE} ${Spaces.TWO}`,
        backgroundColor: Colors.GRAY_200,
        borderRadius: BorderRadiuses.ONE,
        height: '40px',
      }}
    >
      <img
        src={searchIcon}
        alt="search"
        style={{
          width: '16px',
          height: '16px',
        }}
      />

      <input
        {...props}
        type="text"
        style={{
          fontSize: FontSizes.TWO,
          fontFamily: FontFamilies.PRIMARY,
          border: 'none',
          outline: 'none',
          padding: Spaces.ONE,
          color: Colors.GRAY_600,
          background: 'none',
          letterSpacing: FontLetterSpacings.MEDIUM,
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
}
