import React, {Component} from 'react';

import writersBackground from '../accerts/bg.jpg';
import kupalaImg from '../accerts/KupalaMain.jpg';
import kolasImg from '../accerts/KolasMain.jpg';
import korotkevichImg from '../accerts/KorotkevichMain.jpg';
import tankImg from '../accerts/TankMain.jpg';
import bagdanovichImg from '../accerts/BagdanovichMain.jpg';
import melezImg from '../accerts/MelezMain.jpg'

import { useTranslation } from "react-i18next";

import './css/writersStyles.css'

function writerBlock(name, lifetime, image, link){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    var blockWidth;
    window.innerWidth >= 1000 ? blockWidth = 27 : blockWidth = 75; 
    var imgHeight = window.innerWidth * blockWidth / 100 * 350 / 412;
    console.log(imgHeight);
    return (<div
        className = 'writerBlock'
        style = {{
            width: blockWidth + '%', 
        }}
        >
            <div
                className = 'mainImage'
                style={{
                    backgroundImage: 'url(' + image + ')',
                    height: imgHeight + 'px'
                }}>
            </div>
            <h2>{name}</h2>
            <p>{lifetime}</p>
            <a href = {link}>{t('Learn')}</a>
        </div>);
}

// class Writers extends Component {
//     render() {
//         return (
//             <>
//                 <section style = {{
//                     backgroundImage: 'url(' + writersBackground + ')',
//                 }}>
//                     <h1>Писатели</h1>
//                     <div className = 'writersContainer'>
//                         {writerBlock('Янка Купала', '(1882 - 1942)', kupalaImg, 'Kupala')}
//                         {writerBlock(t('kolas'), '(1882 - 1956)', kolasImg, 'Kolas')}
//                         {writerBlock('Максим Танк', '(1912 - 1995)', tankImg, 'Tank')}
//                         {writerBlock('Владимир Короткевич', '(1930 - 1984)', korotkevichImg, 'Korotkevich')}
//                         {writerBlock('Максим Богданович', '(1891 - 1917)', bagdanovichImg, 'Bagdanovich')}
//                         {writerBlock('Иван Мележ', '(1921 - 1976)', melezImg, 'Melez')}
//                     </div>
//                 </section>
//             </>
//         );
//     }
// }

export default function Writers(){
    const {t} = useTranslation();
    return (
        <>
            <section style = {{
                backgroundImage: 'url(' + writersBackground + ')',
            }}>
                <h1>{t('Writers')}</h1>
                <div className = 'writersContainer'>
                    {writerBlock(t('kupala'), '(1882 - 1942)', kupalaImg, 'Kupala')}
                    {writerBlock(t('kolas'), '(1882 - 1956)', kolasImg, 'Kolas')}
                    {writerBlock(t('tank'), '(1912 - 1995)', tankImg, 'Tank')}
                    {writerBlock(t('korotkevich'), '(1930 - 1984)', korotkevichImg, 'Korotkevich')}
                    {writerBlock(t('bogdanovich'), '(1891 - 1917)', bagdanovichImg, 'Bagdanovich')}
                    {writerBlock(t('melezh'), '(1921 - 1976)', melezImg, 'Melez')}
                </div>
            </section>
        </>
    );
}