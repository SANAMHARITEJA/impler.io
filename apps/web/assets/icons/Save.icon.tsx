import { IconType } from '@types';
import { IconSizes } from 'config';

export const SaveIcon = ({ size = 'sm', color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={IconSizes[size]}
      height={IconSizes[size]}
      color={color}
    >
      <path
        d="M18 19H19V6.82843L17.1716 5H16V9H7V5H5V19H6V12H18V19ZM4 3H18L20.7071 5.70711C20.8946 5.89464 21 6.149 21 6.41421V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM8 14V19H16V14H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
