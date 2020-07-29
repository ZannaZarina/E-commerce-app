import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Favourites() {
    const favourites = `<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z" stroke="#ABB4BD"/>
    </svg>`;

    const FavouritesSvg = () => <SvgXml xml={favourites} width="28" height="24" />;

    return <FavouritesSvg />;
}
