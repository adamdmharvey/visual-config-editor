import { IconProps } from '../IconProps';

const OpenIcon = (props: IconProps) => (
  <svg className={props.className} viewBox="0 0 21 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={props.color}
      d="M13.2947 5.70711C13.6852 6.09763 14.3184 6.09763 14.7089 5.70711C15.0995 5.31658 15.0995 4.68342 14.7089 4.29289L10.7089 0.292893C10.5214 0.105357 10.267 0 10.0018 0C9.73661 0 9.48226 0.105357 9.29472 0.292893L5.29472 4.29289C4.9042 4.68342 4.9042 5.31658 5.29472 5.70711C5.68525 6.09763 6.31841 6.09763 6.70894 5.70711L9.00183 3.41421L9.00183 14C9.00183 14.5523 9.44954 15 10.0018 15C10.5541 15 11.0018 14.5523 11.0018 14L11.0018 3.41421L13.2947 5.70711ZM2.03125 15C2.03125 14.4477 1.58353 14 1.03125 14C0.478965 14 0.03125 14.4477 0.03125 15V17C0.03125 18.6569 1.3744 20 3.03125 20H17.0312C18.6881 20 20.0312 18.6569 20.0312 17V15C20.0312 14.4477 19.5835 14 19.0312 14C18.479 14 18.0312 14.4477 18.0312 15V17C18.0312 17.5523 17.5835 18 17.0312 18H3.03125C2.47897 18 2.03125 17.5523 2.03125 17V15Z"
    />
  </svg>
);

export default OpenIcon;
