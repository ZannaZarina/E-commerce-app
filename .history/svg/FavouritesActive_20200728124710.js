import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function FavouriteActive() {
    const home = `<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.079 24L11.1826 22.2736C4.44687 16.1657 0 12.1373 0 7.19346C0 3.16512 3.16512 0 7.19346 0C9.46921 0 11.6534 1.0594 13.079 2.73351C14.5046 1.0594 16.6888 0 18.9646 0C22.9929 0 26.158 3.16512 26.158 7.19346C26.158 12.1373 21.7112 16.1657 14.9755 22.2866L13.079 24Z" fill="#EF3651"/>
    </svg>`;

    const HomeSvg = () => <SvgXml xml={home} width="28" height="24" />;

    return <HomeSvg />;
}
