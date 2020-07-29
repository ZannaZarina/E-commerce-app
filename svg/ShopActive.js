import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function ShopActive() {
    const shopActive = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20001 19.2C5.88001 19.2 4.81201 20.28 4.81201 21.6C4.81201 22.92 5.88001 24 7.20001 24C8.52001 24 9.60001 22.92 9.60001 21.6C9.60001 20.28 8.52001 19.2 7.20001 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C24.0574 3.80346 24.0482 3.35248 23.8318 2.98847C23.6153 2.62445 23.2235 2.40098 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z" fill="#EF3651"/>
    </svg>`;

    const ShopActiveSvg = () => <SvgXml xml={shopActive} width="28" height="24" />;

    return <ShopActiveSvg />;
}
