import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function HomeActive() {
    const homAe = `<svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2941 24V15.5294H16.9412V24H24V12.7059H28.2353L14.1176 0L0 12.7059H4.23529V24H11.2941Z" fill="#EF3651"/>
    </svg>`;

    const HomeActiveSvg = () => <SvgXml xml={home} width="28" height="24" />;

    return <HomeActiveSvg />;
}

