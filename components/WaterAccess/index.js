import React from 'react'
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../asset/img/blog1.png";
import blog2 from "../../asset/img/blog2.png";
import blog3 from "../../asset/img/blog3.png";
import arrow from "../../asset/img/arrow.svg";

const WaterAccess = () => {
    return (
        <section className="waterAccess" >
            <div className="container">
            <div className="is-flex mt-6 mb-3 is-align-content-center is-justify-content-center is-flex-direction-column waterAccess-title">
                <h2 className="section-title">
                    <span className="section-title__dot"></span>
                    <div className="section-title__text">Water access flyway</div>
                    <span className="section-title__line"></span>
                </h2>
                <p className="section-subtitle">Support corporations that support water equality</p>
            </div>
            <div className="water-access-container mb-5">
                <div className="columns is-multiline">
                    <div className="column is-4-desktop is-6-tablet is-12-mobile">
                        <div className="water__item p-4">
                            <div className="img-container">
                                <Image src={blog1} alt="Blog 1" />
                            </div>
                            <p className="title">Support a corporation</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <div className="item-footer">
                                <a href="" className="btn btn-outline">View More</a>
                                <a href="" className="btn btn-primary">12 Liters</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4-desktop is-6-tablet is-12-mobile">
                        <div className="water__item p-4">
                            <Image src={blog2} alt="Blog 1" />
                            <p className="title">Support a corporation</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <div className="item-footer">
                                <a href="" className="btn btn-outline">View More</a>
                                <a href="" className="btn btn-primary">12 Liters</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4-desktop is-6-tablet is-12-mobile">
                        <div className="water__item p-4">
                            <Image src={blog3} alt="Blog 1" />
                            <p className="title">Support a corporation</p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <div className="item-footer">
                                <a href="" className="btn btn-outline">View More</a>
                                <a href="" className="btn btn-primary">12 Liters</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns is-multiline">
                <div className="column is-4-desktop is-2-tablet is-12-mobile blank-set">

                </div>
                <div className="column is-4-desktop is-5-tablet is-12-mobile text-center more-Corporation">
                    <a href="" className="btn btn-secondary">Find More Corporation <span className="ml-4" ><Image src={arrow} alt=""/></span></a>
                </div>
                <div className="column is-4-desktop is-5-tablet is-12-mobile link-your-corporation- btn text-right corporation-btn">
                    <a href="" className="btn btn-primary">Link your corporation <span className="ml-4" ><Image src={arrow} alt=""/></span></a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default WaterAccess;
