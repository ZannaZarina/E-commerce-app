import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Svg() {
    const home = `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2941 25V16.5294H17.9412V25H25V13.7059H29.2353L15.1176 1L1 13.7059H5.23529V25H12.2941Z" stroke="#ABB4BD"/>
    </svg>`;

    const HomeSvg = () => <SvgXml xml={home} width={28px} height={24} />;

    return <HomeSvg />;
}
