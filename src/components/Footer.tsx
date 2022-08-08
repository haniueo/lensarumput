import Link from "next/link";

import * as Images from "@/components/Images";

const SocialLink = ({ children, ...props }: any) => {
    return (
        <Link href={props.href || "#0"}>
            <a
                id={props.id || ""}
                aria-label={props.id}
                className={`h-16 w-auto rounded-full bg-white mix-blend-hard-light p-4 transform hover:scale-110 cursor-pointer duration-200 flex items-center justify-center ${props.className}`}>
                {children}
            </a>
        </Link>
    );
};

export default function Footer() {
    return (
        <footer id="footer" className="relative pt-40 md:pt-56 overflow-hidden">
            {/* Content */}
            <section id="content" className=" w-full z-50">
                <div className="relative container w-full h-full flex flex-col justify-end items-center z-50 mx-auto space-y-8 py-10">
                    {/* Work Inquiry */}
                    <article
                        className="w-full max-w-6xl flex flex-col lg:flex-row justify-center items-center px-10 py-9 mx-auto text-white rounded-3.5 space-y-10 lg:space-y-0 lg:space-x-14 "
                        style={{ background: "linear-gradient(91.13deg, #57A773 0%, #157145 100%)" }}
                        data-aos="flipInX">
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className="font-baloo text-4xl">Lensa Rumput - KKN Kelompok 4 UNUSA</h1>
                            <p className="font-comfortaa text-sm leading-6">📍 Perumahan Sumput Asri - Kec. Driyorejo Kab. Gresik</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <p className="font-somatic text-lg text-center tracking-wider">Cek Lokasi Desa ⬇️</p>

                            <Link href="https://goo.gl/maps/3vHswpq4UY3vTXBY6" passHref={true}>
                                <button className="btn bg-theme-green-dark text-white mt-4">
                                    <span className="bg-theme-green-light !text-xs sm:!text-lg">📍 Desa Sumput</span>
                                </button>
                            </Link>
                        </div>
                    </article>

                    {/* Social Links */}
                    <article className="relative flex flex-row flex-wrap justify-center items-center space-x-4" data-aos="tada">
                        <SocialLink id="instagram" href="https://www.instagram.com/lensa.rumput">
                            <svg className="mix-blend-hard-light text-black fill-current opacity-75" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.41591 0.59C11.0155 0.516364 11.5255 0.5 15.6 0.5C19.6745 0.5 20.1845 0.517727 21.7827 0.59C23.3809 0.662273 24.4718 0.917273 25.4264 1.28682C26.4259 1.66455 27.3327 2.255 28.0827 3.01864C28.8464 3.76727 29.4355 4.67273 29.8118 5.67364C30.1827 6.62818 30.4364 7.71909 30.51 9.31455C30.5836 10.9168 30.6 11.4268 30.6 15.5C30.6 19.5745 30.5823 20.0845 30.51 21.6841C30.4377 23.2795 30.1827 24.3705 29.8118 25.325C29.4354 26.326 28.8454 27.233 28.0827 27.9827C27.3327 28.7464 26.4259 29.3355 25.4264 29.7118C24.4718 30.0827 23.3809 30.3364 21.7855 30.41C20.1845 30.4836 19.6745 30.5 15.6 30.5C11.5255 30.5 11.0155 30.4823 9.41591 30.41C7.82045 30.3377 6.72954 30.0827 5.775 29.7118C4.77398 29.3354 3.86703 28.7453 3.11727 27.9827C2.35415 27.2336 1.76361 26.3271 1.38682 25.3264C1.01727 24.3718 0.763635 23.2809 0.689998 21.6855C0.616362 20.0832 0.599998 19.5732 0.599998 15.5C0.599998 11.4255 0.617726 10.9155 0.689998 9.31727C0.762271 7.71909 1.01727 6.62818 1.38682 5.67364C1.76417 4.67284 2.35516 3.76634 3.11863 3.01727C3.86733 2.25432 4.77337 1.66379 5.77363 1.28682C6.72818 0.917273 7.81909 0.663636 9.41454 0.59H9.41591ZM21.6614 3.29C20.0795 3.21773 19.605 3.20273 15.6 3.20273C11.595 3.20273 11.1205 3.21773 9.53863 3.29C8.07545 3.35682 7.28182 3.60091 6.75273 3.80682C6.05318 4.07955 5.55273 4.40273 5.02773 4.92773C4.53006 5.41189 4.14706 6.00129 3.90682 6.65273C3.70091 7.18182 3.45682 7.97545 3.39 9.43864C3.31773 11.0205 3.30273 11.495 3.30273 15.5C3.30273 19.505 3.31773 19.9795 3.39 21.5614C3.45682 23.0245 3.70091 23.8182 3.90682 24.3473C4.14682 24.9977 4.53 25.5882 5.02773 26.0723C5.51182 26.57 6.10227 26.9532 6.75273 27.1932C7.28182 27.3991 8.07545 27.6432 9.53863 27.71C11.1205 27.7823 11.5936 27.7973 15.6 27.7973C19.6064 27.7973 20.0795 27.7823 21.6614 27.71C23.1245 27.6432 23.9182 27.3991 24.4473 27.1932C25.1468 26.9205 25.6473 26.5973 26.1723 26.0723C26.67 25.5882 27.0532 24.9977 27.2932 24.3473C27.4991 23.8182 27.7432 23.0245 27.81 21.5614C27.8823 19.9795 27.8973 19.505 27.8973 15.5C27.8973 11.495 27.8823 11.0205 27.81 9.43864C27.7432 7.97545 27.4991 7.18182 27.2932 6.65273C27.0205 5.95318 26.6973 5.45273 26.1723 4.92773C25.6881 4.4301 25.0987 4.04711 24.4473 3.80682C23.9182 3.60091 23.1245 3.35682 21.6614 3.29ZM13.6841 20.1241C14.7541 20.5695 15.9455 20.6296 17.0549 20.2942C18.1643 19.9587 19.1228 19.2485 19.7667 18.2849C20.4107 17.3212 20.7001 16.1639 20.5855 15.0106C20.471 13.8573 19.9596 12.7795 19.1386 11.9614C18.6153 11.4384 17.9826 11.0379 17.2859 10.7888C16.5893 10.5397 15.846 10.4482 15.1098 10.5208C14.3735 10.5935 13.6625 10.8284 13.0279 11.2088C12.3933 11.5892 11.851 12.1056 11.44 12.7207C11.0289 13.3359 10.7593 14.0345 10.6507 14.7663C10.5421 15.4981 10.597 16.2449 10.8116 16.953C11.0263 17.661 11.3952 18.3127 11.8919 18.861C12.3886 19.4093 13.0007 19.8407 13.6841 20.1241ZM10.1482 10.0482C10.8641 9.33224 11.7141 8.76432 12.6495 8.37686C13.5849 7.98939 14.5875 7.78996 15.6 7.78996C16.6125 7.78996 17.6151 7.98939 18.5505 8.37686C19.4859 8.76432 20.3359 9.33224 21.0518 10.0482C21.7678 10.7641 22.3357 11.6141 22.7231 12.5495C23.1106 13.4849 23.31 14.4875 23.31 15.5C23.31 16.5125 23.1106 17.5151 22.7231 18.4505C22.3357 19.3859 21.7678 20.2359 21.0518 20.9518C19.6059 22.3977 17.6448 23.21 15.6 23.21C13.5552 23.21 11.5941 22.3977 10.1482 20.9518C8.70227 19.5059 7.88996 17.5448 7.88996 15.5C7.88996 13.4552 8.70227 11.4941 10.1482 10.0482ZM25.02 8.93818C25.1974 8.77082 25.3394 8.56956 25.4377 8.34633C25.5359 8.12309 25.5884 7.88241 25.5919 7.63854C25.5955 7.39467 25.5501 7.15257 25.4584 6.92656C25.3667 6.70055 25.2306 6.49524 25.0581 6.32278C24.8857 6.15032 24.6804 6.01421 24.4543 5.92252C24.2283 5.83083 23.9862 5.78542 23.7424 5.78898C23.4985 5.79253 23.2578 5.84498 23.0346 5.94322C22.8113 6.04146 22.6101 6.18349 22.4427 6.36091C22.1172 6.70595 21.939 7.16426 21.946 7.63854C21.9529 8.11283 22.1444 8.56574 22.4798 8.90115C22.8152 9.23656 23.2681 9.42804 23.7424 9.43495C24.2167 9.44187 24.675 9.26367 25.02 8.93818Z"
                                />
                            </svg>
                        </SocialLink>

                        <SocialLink id="youtube" href="https://www.youtube.com/channel/UCrubai37XwDoIbSRApH_2Qw">
                            <svg className="mix-blend-hard-light text-black fill-current opacity-75" width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                />
                            </svg>
                        </SocialLink>
                    </article>

                    <div className="font-comfortaa text-sm leading-6 text-center max-w-md space-y-4 text-black">
                        <p className="font-bold">
                            Copyright © 2021 - {new Date().getFullYear()}{" "}
                            
                        </p>
                        <p>Website Licensed Under GNU GPLv3. Modification is possible while copyright and license notices must be preserved.</p>
                    </div>

                    
                </div>
            </section>

            {/* Illustrations */}
            <section id="illustration">
                <div className="absolute bottom-96 lg:bottom-64 left-0 w-full h-full z-10" data-aos="fadeInUp">
                    <div className="relative container w-full h-full flex items-center z-10">
                        <svg className="absolute bottom-72 md:bottom-0 left-0 h-72 md:h-128" viewBox="0 0 517 517" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 258.5C0 401.266 115.734 517 258.498 517C401.263 517 516.997 401.266 516.997 258.5C516.997 115.734 401.263 0 258.498 0C115.734 0 0 115.734 0 258.5Z"
                                fill="#D1FAFF"
                            />
                            <path d="M223.683 188.388C256.566 199.939 282.69 198.424 302.054 183.843" stroke="#2C302E" strokeWidth="2.22222" strokeLinecap="round" />
                            <path
                                d="M189.531 135.14C189.217 128.16 184.601 122.181 179.22 121.786C173.839 121.39 169.731 126.727 170.044 133.707C170.358 140.687 174.974 146.666 180.355 147.061C185.736 147.457 189.844 142.12 189.531 135.14Z"
                                fill="#2C302E"
                            />
                            <path
                                d="M343.729 127.057C343.416 120.078 338.8 114.099 333.419 113.703C328.037 113.308 323.929 118.645 324.243 125.625C324.556 132.604 329.172 138.583 334.553 138.979C339.934 139.374 344.042 134.037 343.729 127.057Z"
                                fill="#2C302E"
                            />
                        </svg>
                    </div>
                </div>

                <img src={Images.SeaFloor} className="absolute bottom-0 left-0 object-cover h-full min-w-full object-left z-20" alt="" />
            </section>
        </footer>
    );
}