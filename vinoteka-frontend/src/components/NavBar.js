import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow" style={{ backgroundColor: "#831B00" }}>
            <div className="container-fluid d-flex align-items-center ">
                {/* Logo */}
                <div className="d-flex align-items-center" style={{ flex: "1" }}>
                    <img src="/slike/logo.png" alt="Logo" style={{ height: "80px", marginLeft: "80px" }} />
                </div>


                {/* Dugmad menija */}
                <div className="d-flex align-items-center flex-wrap" style={{ flex: "2", justifyContent: "flex-end", gap: "40px", marginRight: "100px"  }}>

                    <button className="btn text-white fw-bold" style={{  fontSize: 19 }}
                        onClick={() => navigate("/")}>Početna</button>
                    <button className="btn text-white fw-bold" style={{  fontSize: 19 }}
                        onClick={() => navigate("/sop")}>Veb šop</button>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;