import { IconProps } from '../IconProps';

const ExpandIcon = (props: IconProps & { expanded: boolean }) => (
  <svg viewBox="0 0 14 14" className={props.className}>
    <path
      d={
        props.expanded
          ? 'M4.20710678,6 L11.7928932,6 C12.0690356,6 12.2928932,6.22385763 12.2928932,6.5 C12.2928932,6.63260824 12.2402148,6.7597852 12.1464466,6.85355339 L8.35355339,10.6464466 C8.15829124,10.8417088 7.84170876,10.8417088 7.64644661,10.6464466 L3.85355339,6.85355339 C3.65829124,6.65829124 3.65829124,6.34170876 3.85355339,6.14644661 C3.94732158,6.05267842 4.07449854,6 4.20710678,6 Z'
          : 'M6,11.7928932 L6,4.20710678 C6,3.93096441 6.22385763,3.70710678 6.5,3.70710678 C6.63260824,3.70710678 6.7597852,3.7597852 6.85355339,3.85355339 L10.6464466,7.64644661 C10.8417088,7.84170876 10.8417088,8.15829124 10.6464466,8.35355339 L6.85355339,12.1464466 C6.65829124,12.3417088 6.34170876,12.3417088 6.14644661,12.1464466 C6.05267842,12.0526784 6,11.9255015 6,11.7928932 Z'
      }
    ></path>
  </svg>
);

export default ExpandIcon;
