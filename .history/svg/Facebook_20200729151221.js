import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Facebook() {
    const bagActive = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 22.5C24 23.328 23.328 24 22.5 24H1.5C0.672 24 0 23.328 0 22.5V1.5C0 0.672 0.672 0 1.5 0H22.5C23.328 0 24 0.672 24 1.5V22.5Z" fill="#3B5998"/>
    <path d="M16.5 24V15H19.5L20.25 11.25H16.5V9.75C16.5 8.25 17.2515 7.5 18.75 7.5H20.25V3.75C19.5 3.75 18.57 3.75 17.25 3.75C14.4938 3.75 12.75 5.91075 12.75 9V11.25H9.75V15H12.75V24H16.5Z" fill="white"/>
    </svg>`;

    const BagActiveSvg = () => <SvgXml xml={bagActive} width="28" height="24" />;

    return <BagActiveSvg />;
}
