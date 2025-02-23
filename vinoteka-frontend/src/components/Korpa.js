import React from "react";
import { FaTimes } from "react-icons/fa";

const Korpa = ({ korpa, ukloniIzKorpe, ukupnaCena, isprazniKorpu }) => {
  return (
    <div className="col-md-3 ">
      <h4 className="text-center fw-bold mb-4">Korpa</h4>
      <div className="p-3 border shadow-lg" style={{ borderRadius: "20px", backgroundColor: "#f8f9fa" }}>
        {korpa.length === 0 ? (
          <p className="text-center text-muted">Korpa je prazna</p>
        ) : (
          <ul className="list-group">
            {korpa.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold">{item.naziv}</span> <br />
                  <small>Količina: {item.kolicina} - {item.cena * item.kolicina} din</small>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => ukloniIzKorpe(item.vinoId)}>
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        )}

        <h5 className="fw-bold mt-3">Ukupno: {ukupnaCena} din</h5>
        <button className="btn w-100 fw-bold mt-2"
          style={{ backgroundColor: "#831B00", color: "white", fontSize: 16 }}
          disabled={korpa.length === 0}
          onClick={isprazniKorpu}>
          Kupi
        </button>
      </div>
    </div>
  );
};

export default Korpa;
