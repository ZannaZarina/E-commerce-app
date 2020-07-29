import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Profile() {
    const home = `<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1408 25L11.1408 24.5H11.1408L11.1408 25ZM1 19.5577L0.500057 19.5502L0.497722 19.705L0.583336 19.8341L1 19.5577ZM21.2817 19.5577L21.6984 19.8341L21.784 19.705L21.7816 19.5502L21.2817 19.5577ZM11.1408 1.5C13.6703 1.5 15.7113 3.54093 15.7113 6.07042H16.7113C16.7113 2.98865 14.2226 0.5 11.1408 0.5V1.5ZM15.7113 6.07042C15.7113 8.59991 13.6703 10.6408 11.1408 10.6408V11.6408C14.2226 11.6408 16.7113 9.1522 16.7113 6.07042H15.7113ZM11.1408 10.6408C8.61134 10.6408 6.57041 8.59991 6.57041 6.07042H5.57041C5.57041 9.1522 8.05906 11.6408 11.1408 11.6408V10.6408ZM6.57041 6.07042C6.57041 3.54093 8.61134 1.5 11.1408 1.5V0.5C8.05906 0.5 5.57041 2.98865 5.57041 6.07042H6.57041ZM11.1408 24.5C7.22971 24.5 3.57865 22.5406 1.41666 19.2813L0.583336 19.8341C2.9306 23.3727 6.89454 25.5 11.1408 25.5L11.1408 24.5ZM1.49994 19.5653C1.50991 18.904 1.84489 18.2784 2.47245 17.6902C3.10211 17.1002 3.99222 16.5826 5.01476 16.1549C7.06188 15.2987 9.51897 14.8521 11.1408 14.8521V13.8521C9.38244 13.8521 6.79445 14.3266 4.6289 15.2324C3.5451 15.6857 2.53697 16.2593 1.78865 16.9606C1.0382 17.6638 0.51544 18.5297 0.500057 19.5502L1.49994 19.5653ZM11.1408 14.8521C12.7541 14.8521 15.2113 15.2986 17.2608 16.155C18.2845 16.5827 19.1762 17.1004 19.8072 17.6906C20.4362 18.2789 20.7718 18.9045 20.7817 19.5653L21.7816 19.5502C21.7662 18.5293 21.242 17.6633 20.4903 16.9603C19.7407 16.2591 18.731 15.6855 17.6463 15.2323C15.4789 14.3267 12.891 13.8521 11.1408 13.8521V14.8521ZM20.865 19.2813C18.703 22.5406 15.052 24.5 11.1408 24.5L11.1408 25.5C15.3872 25.5 19.3511 23.3727 21.6984 19.8341L20.865 19.2813Z" fill="#ABB4BD"/>
    </svg>`;

    const Profile = () => <SvgXml xml={home} width="28" height="24" />;

    return <HomeSvg />;
}
