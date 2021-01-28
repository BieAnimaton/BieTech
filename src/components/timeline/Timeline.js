import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="container tml">
                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i class="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i class="icon fas fa-home"></i>
                            <div className="details">
                                <span className="title">Title of Section 1</span>
                                <span>1st Jan 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
                            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur </p>
                            <div className="bottom">
                                <Link to="#">Read more</Link>
                                <i>- Someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="row row-2">
                        <section>
                            <i class="icon fas fa-star"></i>
                            <div className="details">
                                <span className="title">Title of Section 2</span>
                                <span>2nd Jan 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
                            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur </p>
                            <div className="bottom">
                                <Link to="#">Read more</Link>
                                <i>- Someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i class="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i class="icon fas fa-rocket"></i>
                            <div className="details">
                                <span className="title">Title of Section 3</span>
                                <span>3rd Jan 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
                            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur </p>
                            <div className="bottom">
                                <Link to="#">Read more</Link>
                                <i>- Someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="row row-2">
                        <section>
                            <i class="icon fas fa-globe"></i>
                            <div className="details">
                                <span className="title">Title of Section 4</span>
                                <span>4fh Jan 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
                            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur </p>
                            <div className="bottom">
                                <Link to="#">Read more</Link>
                                <i>- Someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i class="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i class="icon fas fa-paper-plane"></i>
                            <div className="details">
                                <span className="title">Title of Section 5</span>
                                <span>5th Jan 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
                            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur </p>
                            <div className="bottom">
                                <Link to="#">Read more</Link>
                                <i>- Someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="row row-2">
                        <section>
                            <i class="icon fas fa-map-marker-alt"></i>
                            <div className="details">
                                <span className="title">Title of Section 6</span>
                                <span>6th Jan 2021</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
                            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur </p>
                            <div className="bottom">
                                <Link to="#">Read more</Link>
                                <i>- Someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;