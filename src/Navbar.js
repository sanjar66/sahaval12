import React from "react";
import rasm from './images.jpeg';

const Navbar = () => {
    return (
        <>
            <nav>
                <a href="#" className="navbar-brand">
                    <div className="box"></div>
                </a>

                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a href="#">Product</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <div className="btn-area">
                    <button type="button" className="btn">Donload Now</button>
                </div>
            </nav>


            <h2 className="h1">Fast and powerful, Just like your name</h2>
            <h4 className="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            <h1 className="h3">Nulla commodo aliqua aliqua up</h1>
            <h5 className="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</h5>
            <h5 className="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</h5>
            <h5 className="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</h5>
            <h5 className="h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</h5>

            <img className="img1" src={rasm} />

            <h2 className="h8">Nulle up ea</h2>
            <h5 className="h9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita</h5>
            <h3 className="h10">Graphic Design   UX design    Prototyping    Webflow</h3>
            <h3 className="h11">Branding   Coding   Back-End</h3>
            <h2 className="h12">Where teams design together</h2>
            <h5 className="h13">Lorem quis sunt magna dolor consectetur aliqua office laboru mreprehenderit</h5>
            {/* <div className="box2"> */}
            <img className="img2" src={rasm} />
            <img className="img3" src={rasm} />
            <img className="img4" src={rasm} />
            <h1 className="h14">Nulla commodo aliqua aliqua ut</h1>
            <h5 className="h15">Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.</h5>
            <h5 className="h16">Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.</h5>
            <h4 className="h17">Ralph Richards UX Designer</h4>
            <h4 className="h18">Angel Wilson UX Designer</h4>






            <p className="h99">.</p>

        </>
    )

}

export default Navbar