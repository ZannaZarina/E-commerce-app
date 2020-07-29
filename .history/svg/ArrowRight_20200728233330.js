import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function ArrowRight() {
    const arrowRight = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#ABB4BD"/>
    </svg>`;

    const BagSvg = () => <SvgXml xml={ArrowRight} width="28" height="24" />;

    return <BagSvg />;
}


