import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Banner from "../../asset/img/hero.png";
import Bulb from "../../asset/img/bulb.svg";
import Heart from "../../asset/img/Heart.svg";

const HeroBanner = () => {
    return (
        <section className="herobanner" >
            <div className="bulb-img">
                <Image src={Bulb} alt="" />
            </div>
            <div className="heart-img">
                <Image src={Heart} alt="" />
            </div>
            <div className="container" >
                <div class="columns is-multiline">
                    <div class="column is-flex is-align-self-center is-6-desktop is-12-tablet banner-text">
                        <div className="banner-content ">
                            <h2>Directly increase clean water access for humans around the world.</h2>
                            <div className="quench-input is-flex is-align-iteam-center" >
                                <input type="text" placeholder="Enter a Input"/>
                                <button className="btn-quench">Quench Poverty</button>
                            </div>
                            <p className="hero-text" >You're sending 1000L of water with this donation</p>
                        </div>
                    </div>
                    <div class="column is-6-desktop is-12-tablet banner-img">
                        <div className="hero-img">
                            <Image src={Banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;
