import React from "react";

const VinoKartica = ({ vino, dodajUKorpu }) => {
    return (
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg" style={{ borderRadius: "20px" }}>
            <img
              src={`http://localhost:8080${vino.slika}`} 
              className="card-img-top"
              alt={vino.naziv}
              style={{ height: "250px", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold">{vino.naziv}</h5>
              <p className="mb-1">{vino.stil.naziv} - {vino.sorta.naziv}</p>
              <p className="fw-bold">{vino.cena} din</p>
              <button
                className="btn w-100 fw-bold"
                style={{ backgroundColor: "#831B00", color: "white", fontSize: 16 }}
                onClick={() => dodajUKorpu(vino)}
              >
                Dodaj u korpu
              </button>
            </div>
          </div>
        </div>
      );

}

export default VinoKartica;