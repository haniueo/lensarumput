import Link from "next/link";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import * as Images from "@/components/Images";

import { Seaweed1, Seaweed2 } from "@/components/illustrations/Seaweed";
import { HalfTree1, HalfTree2 } from "@/components/illustrations/HalfTree";
import AboutMeIllustration from "@/components/illustrations/AboutMe";

const Projects = () => {
    const ProjectList = [
        {
            href: "https://drive.google.com/drive/folders/14jVTlKzD23zys2ax7z-izZifIG2tVfvC?usp=sharing",
            type: "👩🏻‍🎓 Pendidikan",
            image: "/images/projects/TK.jpeg",
            title: "Pendampingan Pembelajaran",
            description: "Objek: TK, TPQ, MI",
        },
        {
            href: "https://drive.google.com/drive/folders/14jVTlKzD23zys2ax7z-izZifIG2tVfvC?usp=sharing",
            type: "🏥 Kesehatan",
            image: "/images/projects/PHBS.png",
            title: "Pemeriksaan Kesehatan, Sosialisasi PHBS & DBD, BIAN",
            description: "Objek: Lansia",
        },
        {
            href: "https://drive.google.com/drive/folders/14jVTlKzD23zys2ax7z-izZifIG2tVfvC?usp=sharing",
            type: "💻 Sistem Informasi",
            image: "/images/projects/SI2.png",
            title: "Linktree, Website",
            description: "Objek: Desa Sumput",
        },
        {
            href: "https://drive.google.com/drive/folders/14jVTlKzD23zys2ax7z-izZifIG2tVfvC?usp=sharing",
            type: "💰 Ekonomi",
            image: "/images/projects/phbs2.jpg",
            title: "Ekonomi Kreatif, Sertifikasi Halal",
            description: "Objek: Warga Desa, UMKM",
        },
        {
            href: "https://drive.google.com/drive/folders/14jVTlKzD23zys2ax7z-izZifIG2tVfvC?usp=sharing",
            type: "🏕 Lingkungan",
            image: "/images/projects/taman.JPG",
            title: "Taman Lansia, Taman Toga",
            description: "Objek: Halaman Balai Desa Sumput",
        },
        // {
        //     href: "https://www.behance.net/gallery/127174313/Project-Foxxy-E-Commerce",
        //     type: "Fullstack Development",
        //     image: "/images/projects/FoxxyECommerce.webp",
        //     title: "Foxxy E-Commerce",
        //     description: "A marketplace for every digital items",
        // },
        // {
        //     href: "https://www.behance.net/gallery/127128767/Project-Foxxy-Game-Hosting",
        //     type: "UI/UX",
        //     image: "/images/projects/FoxxyGameHosting.webp",
        //     title: "Foxxy Game Hosting",
        //     description: "A hosting service, dedicated to games",
        // },
        // {
        //     href: "https://drive.google.com/drive/folders/1UDQa3XFEwL2TBOplVRnT67uG8UpIENHV?usp=sharing",
        //     type: "Fullstack Development",
        //     image: "/images/projects/YKBJABAR.webp",
        //     title: "Yayasan Kemala Bhayangkari Jawa Barat",
        //     description: "Yayasan Kemala Bhayangkari Polda Jabar",
        // },
    ];

    return (
        <section className="relative w-full mt-8 rounded-3.5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 z-50 gap-8">
            {ProjectList.map((data, index) => (
                <a
                    className="relative scroll-snap-none w-full h-124 bg-cover rounded-3.5 flex-shrink-0 cursor-pointer hover:opacity-70 duration-200"
                    style={{ backgroundImage: `url(${data.image})`, animationDelay: `10s` }}
                    key={index}
                    href={data.href}
                    target="_blank"
                    rel="noreferrer">
                    <section className="w-full h-full bg-black opacity-50 absolute left-0 top-0 rounded-3.5 z-10" />

                    <section className="w-full h-full relative z-20 p-7 flex flex-col justify-between">
                        <div className="flex flex-row justify-between items-center">
                            <p className="rounded-3.5 text-lg font-somatic px-5 py-2 bg-black bg-opacity-50 text-white tracking-widest">{data.type}</p>

                            <div className="rounded-3.5 text-lg font-somatic p-2 bg-black bg-opacity-50 text-white tracking-wider">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.586 12.793L7 14.207L13.707 7.49997L7 0.792969L5.586 2.20697L9.879 6.49997H0.292999V8.49997H9.879L5.586 12.793Z" fill="white" />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-1 text-white">
                            <h1 className="font-baloo text-4xl">{data.title}</h1>
                            <p className="font-comforta text-sm tracking-wider">{data.description}</p>
                        </div>
                    </section>
                </a>
            ))}
        </section>
    );
};

const Content = ({ ...props }: any) => {
    const Body = () => (
        <div className="px-10 lg:p-0 relative" data-aos="pulse">
            <div className="w-full h-full max-w-md py-7 px-10 rounded-3.5 flex items-start md:items-center justify-between flex-col-reverse md:flex-row text-theme-green-light gap-2 transform hover:scale-105 cursor-pointer duration-200 ease-in bg-gradient-to-b from-white to-theme-blue-light box-border">
                {/* {!props.href && (
                    <div className="w-full h-full max-w-md py-7 px-10 rounded-3.5 flex justify-center items-center absolute left-0 top-0 bg-black bg-opacity-50">
                        <h1 className="font-baloo text-4xl pb-1 text-white">COMING SOON</h1>
                    </div>
                )} */}
                {/* <div className="pt-4 md:pt-0">
                    <h1 className="font-baloo text-4xl pb-1">{props.title}</h1>
                    <p className="font-comfortaa text-sm leading-6">{props.description}</p>
                </div> */}
                <div className="pt-4 md:pt-0">
                    <img src={props.image} width="1500" height="50" />
                    <h1 className="font-baloo text-4xl">{props.title}</h1>
                <h1 className="font-comforta text-SM">{props.description}</h1>
                </div>
                
                {/* <props.icon /> */}
            </div>
        </div>
    );

    if (props.href && (props.href.indexOf("://") > 0 || props.href.indexOf("//") === 0)) {
        return (
            <a href={props.href} target="_blank" rel="noreferrer">
                <Body />
            </a>
        );
    }

    return (
        <Link href={props.href || "#0"} passHref={true}>
            <Body />
        </Link>
    );
};

const Contents = () => {
    const contents = [
        {
            title: "DPL",
            description: "Nur Masruroh, S.ST., M.Keb",
            image: "/images/projects/bururoh.jpg",
        },
        {
            title: "Anggota KKN",
            description: "Kelompok 04",
            image: "/images/projects/anggota1.jpg",
        },
        {
            title: "DPL",
            description: "Heni Agustina, S.E., M.Ak",
            image: "/images/projects/buheni.png",
        }
    ];

    return (
        <>
            {contents.map((content, index) => (
                <Content key={index} {...content} />
            ))}
        </>
    );
};

export default function Home() {
    return (
        <>
            <section id="intro" className="relative w-full bg-cover bg-center h-[800px] lg:h-[750px] bg-theme-blue-medium " style={{ backgroundImage: `url(${Images.MountainLandscape})` }}>
                <Navigation />

                <div className="relative container w-full h-auto flex items-center z-[999] pt-14">
                    <div className="max-w-sm text-black space-y-6">
                        <h3 className="font-somatic text-lg md:text-2xl">
                            <span className="animate-wave inline-block transform origin-bottom-right">👋</span> Hi! Welcome!!
                        </h3>
                        <h1 className="font-baloo text-4xl md:text-6xl" data-aos="bounce">
                            KKN UNUSA
                        </h1>
                        <h1 className="font-baloo text-2xl md:text-4xl" data-aos="bounce">
                            Kelompok 04
                        </h1>
                        <p className="font-comfortaa text-lg" data-aos="fadeIn">
                            📍 <b>Perumahan Sumput Asri</b> <p>Kec. Driyorejo, Kab. Gresik</p>
                        </p>
                        <Link href="#about" passHref={true}>
                            <button className="btn bg-theme-green-dark text-white mt-8" data-aos="fadeIn">
                                <span className="bg-theme-green-light">Yukk simak</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute left-0 w-full bottom-14 xl:bottom-28">
                    <div className="relative xl:container w-full h-full flex items-center">
                        <img src={Images.Logo} alt="Logo" className="absolute w-60 md:w-80 lg:w-96 h-auto right-0 z-3" />
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="bird-container animate-duration-[15s] animate-delay-[0s]">
                        <div className="bird animate-duration-[1s] animate-delay-[-0.5s]" />
                    </div>

                    <div className="bird-container animate-duration-[16s] animate-delay-[1s]">
                        <div className="bird animate-duration-[0.9s] animate-delay-[-0.75s]" />
                    </div>

                    <div className="bird-container animate-duration-[14.6s] animate-delay-[9.5s]">
                        <div className="bird animate-duration-[1.25s] animate-delay-[-0.25s]" />
                    </div>

                    <div className="bird-container animate-duration-[16s] animate-delay-[10.25s]">
                        <div className="bird animate-duration-[1.1s] animate-delay-[-0.5s]" />
                    </div>
                </div>
            </section>

            <section id="about" className="relative w-full py-32">
                <div className="relative container w-full h-full flex flex-col xl:flex-row items-start xl:items-center space-y-10 xl:space-y-0 xl:space-x-10 justify-center z-50">
                    <div className="text-black text-center space-y-8 max-w-lg 2xl:max-w-md rounded-3.5 p-0 md:p-8 2xl:p-0 relative">
                        <h1 className="font-baloo text-6xl" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            🏡 Desa Sumput
                        </h1>
                        <p className="font-comfortaa text-base font-regular leading-7" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            Desa Sumput ini termasuk didalam kecamatan Driyorejo. Kecamatan Driyorejo adalah kecamatan yang merupakan bagaian dari kabupaten Gresik yang terletak pada ujung sebelah
                            selatan. Kecamatan Driyorejo ini merupakan perbatasan antara Surabaya dan Sidoarjo. Dari kecamatan Driyorejo ke arah timur akan ada jalan ke Surabaya, sedangkan untuk ke
                            daerah Sidoarjo cukup ke arah selatan. Kabupaten Sidoarjo dan kabupaten Gresik hanya di pisahkan dengan sungai Brantas.
                            {/* <br />
                            <br />
                            But one thing I always stick with everything is, <b>I always do every works as my passion</b>, and that's what makes me happy also giving myself a chance to deliver best
                            works that i can do. */}
                        </p>
                        <a href="https://sidesa.gresikkab.go.id/desa-sumput/" target={"_blank"} rel="noreferrer" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            <button className="btn bg-theme-green-dark text-white mt-4" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                                <span className="bg-theme-green-light">Tentang Desa Sumput</span>
                            </button>
                        </a>
                    </div>
                </div>

                <HalfTree1 />
                <HalfTree2 />
            </section>

            <section id="content" className="relative w-full flex justify-center items-center bg-gradient-to-b from-theme-green-light to-theme-green-dark overflow-hidden">
                <div className="absolute -top-1 left-0 w-full">
                    <svg className="w-full h-full" height="54" viewBox="0 0 1919 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M809.171 3.98534C1148.63 11.1645 1277.19 3.98534 1920 54V0H1849.59H1497.55H1075.1H652.651H228L809.171 3.98534Z" fill="white" />
                    </svg>
                </div>

                <div className="mx-auto pt-16 pb-40 z-50">
                    <h1 className="font-baloo text-white text-6xl text-center pb-12" data-aos="bounceInDown">
                        Tentang Kita
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 box-border" data-aos="zoom-in">
                        <Contents />
                    </div>
                </div>

                <Seaweed1 />
                <Seaweed2 />

                <div className="absolute -bottom-2 left-0 w-full">
                    <svg className="w-full h-full" height="105" viewBox="0 0 1919 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 7.71711L160 5.01481C320 2.31251 640 -3.0921 960 2.31251C1280 7.71711 1600 23.9309 1760 32.0378L1920 40.1447V105H1760C1600 105 1280 105 960 105C640 105 320 105 160 105H0V7.71711Z"
                            fill="#D1FAFF"
                        />
                    </svg>
                </div>
            </section>

            <section id="proker" className="relative w-full bg-gradient-to-b from-theme-blue-light to-theme-blue-medium py-10">
                <div className="relative container w-full h-full">
                    <section className="flex flex-row justify-between items-end">
                        <div className="text-theme-blue-dark max-w-sm">
                            <h1 className="font-baloo text-7xl" data-aos="zoom-in">
                                Program Kerja
                            </h1>
                            <h3 className="font-somatic text-2xl leading-8 pt-2" data-aos="zoom-in" data-aos-delay="200">
                                Program Kerja 5 Bidang
                            </h3>

                            {/* <a href="https://www.behance.net/raflymln" target={"_blank"} rel={"noreferrer"}>
                                <button className="btn bg-theme-blue-very-dark text-white mt-8" data-aos="zoom-in" data-aos-delay="400">
                                    <span className="bg-theme-blue-dark">Interesting, I Want to See More!</span>
                                </button>
                            </a> */}
                        </div>
                    </section>

                    <section className="relative z-50">
                        <Projects />
                    </section>
                </div>

                <div className="absolute left-0 -bottom-1">
                    <svg className="w-full h-full" height="404" viewBox="0 0 1919 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#aaavvv)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 212.416L80.0417 219.913C160.083 228.243 320.167 244.069 480.25 219.913C640.334 195.757 800.417 132.451 960.5 155.774C1119.58 179.931 1279.67 292.382 1439.75 284.052C1599.83 275.722 1759.92 148.278 1839.96 84.1388L1920 20V404H1839.96C1759.92 404 1599.83 404 1439.75 404C1279.67 404 1119.58 404 960.5 404C800.417 404 640.334 404 480.25 404C320.167 404 160.083 404 80.0417 404H0V212.416Z"
                                fill="url(#linear1234)"
                            />
                        </g>
                        <defs>
                            <filter id="aaavvv" x="0" y="0" width="1920" height="404" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-20" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.819608 0 0 0 0 0.898039 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                            <linearGradient id="linear1234" x1="960" y1="-503.939" x2="960" y2="404" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9BD1E5" stopOpacity="0" />
                                <stop offset="1" stopColor="#9BD1E5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>

            <section id="test" className="relative w-full bg-gradient-to-b from-theme-blue-medium to-theme-blue-dark">
                <Footer />
            </section>
        </>
    );
}
