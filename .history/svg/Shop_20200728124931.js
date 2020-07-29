import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Shop() {
    const home = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3.4H0.5V3.9H1V3.4ZM3.4 3.4L3.85176 3.18573L3.71624 2.9H3.4V3.4ZM7.72 12.508L8.15792 12.7493L8.28148 12.5251L8.17176 12.2937L7.72 12.508ZM6.1 15.448L6.53417 15.6961L6.53792 15.6893L6.1 15.448ZM22.6 19V19.5H23.1V19H22.6ZM22.6 16.6H23.1V16.1H22.6V16.6ZM8.404 16.3L7.91893 16.1787L7.904 16.2384V16.3H8.404ZM8.44 16.156L8.00229 15.9143L7.97075 15.9714L7.95493 16.0347L8.44 16.156ZM9.52 14.2V13.7H9.22492L9.08229 13.9583L9.52 14.2ZM20.56 12.964L20.1222 12.7225L20.1216 12.7236L20.56 12.964ZM24.856 5.176L25.2938 5.41751L25.2958 5.41379L24.856 5.176ZM23.8 3.4L23.8012 2.9H23.8V3.4ZM6.052 3.4L5.59949 3.61268L5.73453 3.9H6.052V3.4ZM4.924 1L5.37651 0.787319L5.24147 0.5H4.924V1ZM8.20001 19.7C6.60061 19.7 5.31201 21.0071 5.31201 22.6H6.31201C6.31201 21.5529 7.15941 20.7 8.20001 20.7V19.7ZM5.31201 22.6C5.31201 24.1929 6.60061 25.5 8.20001 25.5V24.5C7.15941 24.5 6.31201 23.6471 6.31201 22.6H5.31201ZM8.20001 25.5C9.79615 25.5 11.1 24.1961 11.1 22.6H10.1C10.1 23.6439 9.24387 24.5 8.20001 24.5V25.5ZM11.1 22.6C11.1 21.0039 9.79615 19.7 8.20001 19.7V20.7C9.24387 20.7 10.1 21.5561 10.1 22.6H11.1ZM0.5 1V3.4H1.5V1H0.5ZM1 3.9H3.4V2.9H1V3.9ZM2.94824 3.61427L7.26824 12.7223L8.17176 12.2937L3.85176 3.18573L2.94824 3.61427ZM7.28208 12.2667L5.66208 15.2067L6.53792 15.6893L8.15792 12.7493L7.28208 12.2667ZM5.66588 15.1999C5.43007 15.6126 5.3 16.0943 5.3 16.6H6.3C6.3 16.2657 6.38593 15.9554 6.53412 15.6961L5.66588 15.1999ZM5.3 16.6C5.3 18.1961 6.60386 19.5 8.2 19.5V18.5C7.15614 18.5 6.3 17.6439 6.3 16.6H5.3ZM8.2 19.5H22.6V18.5H8.2V19.5ZM23.1 19V16.6H22.1V19H23.1ZM22.6 16.1H8.704V17.1H22.6V16.1ZM8.704 16.1C8.81214 16.1 8.904 16.1919 8.904 16.3H7.904C7.904 16.7441 8.25986 17.1 8.704 17.1V16.1ZM8.88907 16.4213L8.92507 16.2773L7.95493 16.0347L7.91893 16.1787L8.88907 16.4213ZM8.87771 16.3977L9.95771 14.4417L9.08229 13.9583L8.00229 15.9143L8.87771 16.3977ZM9.52 14.7H18.46V13.7H9.52V14.7ZM18.46 14.7C19.5457 14.7 20.5041 14.1058 20.9984 13.2044L20.1216 12.7236C19.7999 13.3102 19.1744 13.7 18.46 13.7V14.7ZM20.9978 13.2055L25.2938 5.4175L24.4182 4.9345L20.1222 12.7225L20.9978 13.2055ZM25.2958 5.41379C25.5809 4.88649 25.5679 4.24816 25.2615 3.73293L24.402 4.244C24.5285 4.4568 24.5339 4.72043 24.4162 4.93821L25.2958 5.41379ZM25.2615 3.73293C24.9552 3.2177 24.4006 2.90138 23.8012 2.9L23.7988 3.9C24.0464 3.90057 24.2755 4.03121 24.402 4.244L25.2615 3.73293ZM23.8 2.9H6.052V3.9H23.8V2.9ZM6.50451 3.18732L5.37651 0.787319L4.47149 1.21268L5.59949 3.61268L6.50451 3.18732ZM4.924 0.5H1V1.5H4.924V0.5ZM20.2 19.7C18.6006 19.7 17.312 21.0071 17.312 22.6H18.312C18.312 21.5529 19.1594 20.7 20.2 20.7V19.7ZM17.312 22.6C17.312 24.1929 18.6006 25.5 20.2 25.5V24.5C19.1594 24.5 18.312 23.6471 18.312 22.6H17.312ZM20.2 25.5C21.7962 25.5 23.1 24.1961 23.1 22.6H22.1C22.1 23.6439 21.2439 24.5 20.2 24.5V25.5ZM23.1 22.6C23.1 21.0039 21.7962 19.7 20.2 19.7V20.7C21.2439 20.7 22.1 21.5561 22.1 22.6H23.1Z" fill="#ABB4BD"/>
    </svg>`;

    const HomeSvg = () => <SvgXml xml={home} width="28" height="24" />;

    return <HomeSvg />;
}
