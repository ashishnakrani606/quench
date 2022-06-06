import React from 'react'
import Link from "next/link";
import Image from "next/image";
import subscribeletter from "../../asset/img/subscribe-letter.png";

const  Subscribe = () => {
    return (
        <section className="subscribe-our-sec">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-12-mobile is-6-tablet">
                        <div className="inner-subscribe">
                            <Image src={subscribeletter} alt="" />
                            <div className="subscribe-details">
                                <h2>Subscribe Our News Letter :</h2>
                                <h5>Sign up for all the news about our latest arrivals ang get an exclusive early</h5>
                            </div>
                        </div>
                    </div>
                    <div className="column is-12-mobile is-6-tablet">
                    <form id="subscribe-form" method="post">
                       <input name="email" id = "email" type="email" placeholder="Enter email Address"/>
                        <input type="submit" name="submit" class="submit" value="Subscribe!" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;
