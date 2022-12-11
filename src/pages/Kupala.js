import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';

import writersBackground from '../accerts/bg.jpg';
import writerImg from '../accerts/KupalaMain.jpg'
import gallery1 from '../accerts/kupalaGallery/1.jpg'
import gallery2 from '../accerts/kupalaGallery/2.jpg'
import gallery3 from '../accerts/kupalaGallery/3.jpg'
import gallery4 from '../accerts/kupalaGallery/4.jpg'
import gallery5 from '../accerts/kupalaGallery/5.jpg'

import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css'
import {useTranslation} from "react-i18next";

const writerYTLink = 'https://www.youtube.com/embed/9FZehV2qJTk';
const writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94163.82319491048!2d27.523329171972176!3d53.8847207981807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1669968064361!5m2!1sru!2sby';

export default function Kupala(){

    const {t} = useTranslation();
        var mainImgWidth, mainImgHeight, componentsWidth, componentsHeight, itemHeight, itemWidth;
    const kupalaName = (t('kupalaName'));
    const kupalaLife = '07.07.1882 - 28.06.1942';
    const kupalaChildhood = (t('kupalaChildhood'));
    const kupalaPublications = (t('kupalaPublications'));
    const kupalaEducation = (t('kupalaEducation'));
    const kupalaMobilization = (t('kupalaMobilization'));
    const kupalaAfterWar = (t('kupalaAfterWar'));
    const kupalaDeath = (t('kupalaDeath'));

    if(window.innerWidth >= 1000){
            mainImgWidth = 40;
            componentsWidth = 80;
            itemHeight = 700;
            itemWidth = '';
        }
        else{
            mainImgWidth = 75;
            componentsWidth = 100;
            itemHeight = window.innerWidth * 1.4;
            itemWidth = 90;
        }
        mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;
        if(window.innerWidth < 1645 && window.innerWidth > 1000)
            componentsHeight = 0.25 * mainImgHeight;
        else if(window.innerWidth >= 1645)
            componentsHeight = 0.35 * mainImgHeight;
        else
            componentsHeight = 0.85 * mainImgHeight;
        return (
                <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
                    <div className = 'writerMainInfoBlock'>
                        <img src = {writerImg} style = {{width: mainImgWidth + '%', height: mainImgHeight + 'px'}}/>
                        <div className = 'writerMainInfo' style={{width: mainImgWidth + '%'}}>
                            <h2>{kupalaName}</h2>
                            <p>{kupalaLife}</p>
                            <div className='googleContainer'>
                                <h3>{t('VKU')}</h3>
                                <iframe
                                    allowFullScreen = {true}
                                    allow = 'accelerator' 
                                    loading = 'lazy'
                                    className='ytEmbed' 
                                    style={{width: componentsWidth + '%',height: componentsHeight + 'px'}}
                                    src = {'' + writerYTLink}/>
                                <h3>{t('PKU')}</h3>
                                <div className='mapContainer' style={{width: componentsWidth + '%',height: componentsHeight + 'px'}}>
                                    <iframe src = {writerPlaceLink} frameborder="0" style={{border: 0, borderRadius:'5px', width:'100%', height:'100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='carouselTitle'>{t('LKU')}</h2>
                    <Carousel>
                        {addCarouselImg(gallery1, itemHeight, itemWidth)}
                        {addCarouselImg(gallery2, itemHeight, itemWidth)}
                        {addCarouselImg(gallery3, itemHeight, itemWidth)}
                        {addCarouselImg(gallery4, itemHeight, itemWidth)}
                        {addCarouselImg(gallery5, itemHeight, itemWidth)}
                    </Carousel>
                    <VerticalTimeline lineColor='#fff'>
                        {addMainVerticalElement('07.07.1882', (t('birthday')), '', kupalaChildhood)}
                        {addVerticalElement('1903 - 1904', (t('fbK')), '', kupalaPublications)}
                        {addVerticalElement('1909 - 1915', (t('stK')), '', kupalaEducation)}
                        {addVerticalElement('1916', (t('mobK')), '', kupalaMobilization)}
                        {addVerticalElement('1922 - 1940', (t('awK')), '', kupalaAfterWar)}
                        {addMainVerticalElement('28.06.1942', (t('dK')), '', kupalaDeath)}
                    </VerticalTimeline>
                </section>
        )
    }


