import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            {/* Hero sekcija */}
            <header className="text-center position-relative" style={{ backgroundImage: "url('/slike/slika1.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "550px" }}>
                <div className="d-flex align-items-center h-100 text-white" >
                    <div className="p-5 m-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", backdropFilter: "blur(15px)", borderRadius: "20px", overflow: "hidden" }}>
                        <h1 className="fw-bold" style={{ fontSize: 32 }}>Mi oživljavamo vino. <br /> Spremni ste da se uvetite?</h1>
                        <button className="btn mt-3 w-50 fw-bold"
                            style={{ backgroundColor: "#831B00", color: "white", fontSize: 16 }}
                            onClick={() => navigate("/sop")}
                        >Pređite na kupovinu</button>
                    </div>
                </div>
            </header>

            {/* O nama */}
            <section className="container my-5 " style={{ maxWidth: "80%" }}>
                <div className="row align-items-center bg-white shadow-lg rounded p-4 overflow-hidden" style={{ borderRadius: "20px" }}>
                    <div className="col-md-7">
                        <img src="/slike/slika3.jpg" alt="home2" className="img-fluid" style={{ width: "100%", height: "450px", objectFit: "cover", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} />
                    </div>
                    <div className="col-md-5">
                        <h2 className="fw-bold mb-3" style={{ color: "#424242", fontSize: 32 }}>O nama</h2>
                        <p style={{ color: "#757575", fontSize: 18, fontFamily: "Montserrat" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam justo quis dictum lacinia.
                            Integer iaculis sem non nisl ultricies pellentesque. Vestibulum vehicula augue at bibendum tincidunt.
                            Praesent ac est pellentesque, semper felis vitae, scelerisque diam. Vestibulum quis lacus consequat, tristique
                            ligula sed, pretium nisl.
                        </p>
                        <button className="btn mt-3 w-50 fw-bold"
                            style={{ backgroundColor: "#831B00", color: "white", fontSize: 16 }}
                        >Vidite recenzije</button>
                    </div>
                </div>
            </section>

            {/* Sekcija 'Šta nudimo?' */}
            <section className="container text-center my-5 " style={{ maxWidth: "80%" }}>
                <h2 className="fw-bold" style={{ color: "#831B00", fontSize: 32 }}>Šta nudimo?</h2>
                <div className="row mt-4 mb-5 ">
                    {[
                        { src: "/slike/slika2.jpeg", title: "Kvalitetna vina", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { src: "/slike/slika4.jpg", title: "Brzu isporuku", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { src: "/slike/slika6.jpg", title: "Pouzdano plaćanje", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " }
                    ].map((item, index) => (
                        <div key={index} className="col-md-4 position-relative">
                            <img src={item.src} className="img-fluid " alt={item.title} style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "20px" }} />
                            <div className="position-absolute bottom-0 p-3 d-flex flex-column align-items-center justify-content-center"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", backdropFilter: "blur(15px)", height: "32%", width: "94.3%", overflow: "hidden", borderRadius: "0 0 20px 20px" }}>
                                <h4 className="text-white fw-bold mt-3" style={{ fontSize: 23}}>{item.title}</h4>
                                <p className="text-white" style={{ fontSize: 16}}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

}

export default HomePage;