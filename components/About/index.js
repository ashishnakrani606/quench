import React from 'react'
import Link from "next/link";
import Image from "next/image";
import give from "../../asset/img/why_give_with_us.png";
import check from "../../asset/img/check-mark.png";
import arrow from "../../asset/img/arrow.svg";
import how from "../../asset/img/how_we_do_it.png";

const About = () => {
    return (
        <section className="about" >
            <div className="container" >
                <div className="columns is-multiline is-mobile">
                    <div className="column is-6-desktop is-12-tablet is-12-mobile pb-0 about-order-1">
                        <div  className="abuot-img">
                          <Image src={give} alt="" />
                        </div>
                    </div>
                    <div className="column pb-0 is-6-desktop is-12-tablet is-12-mobile is-align-self-center about-order-2">
                        <div className="abuot-tex">
                            <h2 className="section-title">
                                <span className="section-title__dot"></span>
                                <div className="section-title__text">Why give with us?</div>
                                <span className="section-title__line"></span>
                            </h2>
                            <div className="is-flex about-text-box mt-6" >
                                <div className="about-img-set" >
                                    <Image src={check} alt="" />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <div className="is-flex about-text-box mt-5" >
                                <div className="about-img-set" >
                                    <Image src={check} alt="" />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . </p>
                            </div>
                            <a href="" className="btn btn-secondary mt-5">View Water Requests <span className="ml-4" ><Image src={arrow} alt=""/></span></a>
                        </div>
                    </div>
                </div>
                <div className="columns is-multiline is-mobile">
                    <div className="column pb-0 is-6-desktop is-12-tablet is-12-mobile is-align-self-center">
                        <div className="abuot-tex">
                            <h2 className="section-title">
                                <span className="section-title__dot"></span>
                                <div className="section-title__text">How We Do it</div>
                                <span className="section-title__line"></span>
                            </h2>
                            <div className="is-flex about-text-box mt-6" >
                                <div className="about-img-set" >
                                    <Image src={check} alt="" />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <div className="is-flex about-text-box mt-5" >
                                <div className="about-img-set" >
                                    <Image src={check} alt="" />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . </p>
                            </div>
                            <a href="" className="btn btn-secondary mt-5">Vet Our Process <span className="ml-4" ><Image src={arrow} alt=""/></span></a>
                        </div>
                    </div>
                    <div className="column is-6-desktop is-12-tablet is-12-mobile pb-0">
                        <div  className="abuot-img">
                          <Image src={how} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
