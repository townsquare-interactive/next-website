import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import List from '../components/List'
import Header from '../components/Header'
import Images from '../components/Images'
import Label from '../components/Label'
import Card from '../components/Card'
import Text from '../components/Text'
import { ImagesProps, ListProps, HomeProps, ModuleData, TextProps, HeaderProps, SliderProps, FooterProps, PagesProps, VideoProps } from '../components/types'
import { GetStaticProps } from 'next'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import data from '../components/moduleData'
import Burger from '../components/Burger'
import Video from '../components/Video'

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { moduleData: data },
        //props: { data },
    }
}

const Home = ({ moduleData }: HomeProps) => {
    console.log(moduleData.navData)

    const imageData1: ImagesProps = {
        gap: true,
        modLayout: '2-2/3',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                linkText: 'Menu',
                linkUrl: '/menu',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                linkText: 'Images',
                linkUrl: '/images',
            },
        ],
    }
    const imageData2: ImagesProps = {
        modLayout: '1-hero',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                //linkText: 'Menu',
                linkUrl: '/menu',
                headline: 'Now Hero',
            },
        ],
    }

    return (
        <div className={styles.root}>
            <Head>
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className={styles.wrapper}>
                <Header {...(moduleData.headerData as HeaderProps)} />

                <Header {...(moduleData.headerData as HeaderProps)} reverse={true} modLayout="alt-layout" />

                <Label {...moduleData.labelData} text="List Modules: Article Layout" />

                <List {...moduleData.listData} />

                <List {...moduleData.listData} reverse={true} border={false} />

                <Label {...moduleData.labelData} text="List Modules: Card layout" align="center" gap={true} />

                <List {...moduleData.listData} modLayout="card" border={false} />

                <List {...moduleData.listData} modLayout="card" border={false} />

                <List {...moduleData.listData} modLayout="card" border={false} />

                <Label {...moduleData.labelData} border={false} />

                {/*
                    layout options:
                    3-1/3 : Three images, each one 1/3 in size
                    3-2/3: Three images, Main image takes up 2/3
                    2-2/3: Two images, main image takes up 2/3
                    2-1/2: Two images, each image takes up 1/2
                    1-full: One image that takes up full width
                    1-hero: One image, less height


                    */}

                <Images {...(moduleData.imagesData as ImagesProps)} />

                <Images {...(moduleData.imagesData as ImagesProps)} modLayout="3-1/3" />

                <Images {...imageData1} gap={false} />

                <Images {...imageData1} modLayout="2-1/2" />

                <Images {...imageData2} />

                <Label {...moduleData.labelData} text="Text Module" />

                <Text {...(moduleData.textData as TextProps)} />

                <Text {...(moduleData.textData as TextProps)} align="center" textSize="lg" />

                <Text {...(moduleData.textData as TextProps)} align="right" border={true} />

                <Label {...moduleData.labelData} text="Slider Module" />

                <Carousel {...(moduleData.sliderData as SliderProps)} slideCount={1} />

                <Carousel {...(moduleData.sliderData as SliderProps)} modLayout="images" />

                <Video {...(moduleData.videoData as VideoProps)} />
            </div>
            <Footer {...(moduleData.footerData as FooterProps)} navData={moduleData.navData} />
        </div>
    )
}

export default Home
