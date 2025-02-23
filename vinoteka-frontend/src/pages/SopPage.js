import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Korpa from "../components/Korpa";
import VinoKartica from "../components/VinoKartica";

const SopPage = () => {
    const [vina, setVina] = useState([]);
    const [korpa, setKorpa] = useState(() => {
        return JSON.parse(localStorage.getItem("korpa")) || []; // Učitavanje iz localStorage-a
    });
    const [stilovi, setStilovi] = useState([]);
    const [sorte, setSorte] = useState([]);
    const [selectedStilovi, setSelectedStilovi] = useState([]);
    const [selectedSorte, setSelectedSorte] = useState([]);

    // Učitavanje podataka sa backend-a
    useEffect(() => {
        fetch("http://localhost:8080/vino/get/all")
            .then(response => response.json())
            .then(data => setVina(data))
            .catch(error => console.error("Greška prilikom dohvatanja vina:", error));

        fetch("http://localhost:8080/stil/get/all")
            .then(response => response.json())
            .then(data => setStilovi(data))
            .catch(error => console.error("Greška prilikom dohvatanja stilova:", error));

        fetch("http://localhost:8080/sorta/get/all")
            .then(response => response.json())
            .then(data => setSorte(data))
            .catch(error => console.error("Greška prilikom dohvatanja sorti:", error));
    }, []);

    // Dodavanje u korpu
    const dodajUKorpu = (vino) => {
        setKorpa(prev => {
            const postojecaStavka = prev.find(item => item.vinoId === vino.vinoId);
            if (postojecaStavka) {
                return prev.map(item =>
                    item.vinoId === vino.vinoId ? { ...item, kolicina: item.kolicina + 1 } : item
                );
            }
            return [...prev, { ...vino, kolicina: 1 }];
        });
    };

    // Uklanjanje iz korpe
    const ukloniIzKorpe = (id) => {
        setKorpa(prev => prev.filter(item => item.vinoId !== id));
    };

    // Čuvanje korpe u localStorage
    useEffect(() => {
        localStorage.setItem("korpa", JSON.stringify(korpa));
    }, [korpa]);

    // Ukupna cena
    const ukupnaCena = korpa.reduce((total, item) => total + item.cena * item.kolicina, 0);

    // Funkcija za kupovinu (resetuje korpu)
    const isprazniKorpu = () => {
        if (korpa.length === 0) return; // Ako je korpa prazna, ne radi ništa

        const porudzbina = {
            stavke: korpa.map(item => ({
                vinoId: item.vinoId,
                kolicina: item.kolicina
            })),
            ukupnaCena: ukupnaCena
        };


        fetch("http://localhost:8080/porudzbina/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(porudzbina)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Došlo je do greške pri čuvanju porudžbine.");
                }
                return response.json();
            })
            .then(data => {
                setKorpa([]); // Praznimo korpu nakon uspešne kupovine
                localStorage.removeItem("korpa"); // Brišemo korpu iz localStorage-a
                alert("Uspešno ste kupili proizvode!"); // Obaveštenje korisniku
            })
            .catch(error => {
                console.error("Greška:", error);
                alert("Greška prilikom obrade kupovine.");
            });
    };

    // Dinamičko ažuriranje dostupnih filtera
    useEffect(() => {
        if (selectedStilovi.length === 0 && selectedSorte.length === 0) {
            // Ako su filteri prazni, resetujemo sorte i stilove
            fetch("http://localhost:8080/stil/get/all")
                .then(response => response.json())
                .then(data => setStilovi(data))
                .catch(error => console.error("Greška pri resetovanju stilova:", error));

            fetch("http://localhost:8080/sorta/get/all")
                .then(response => response.json())
                .then(data => setSorte(data))
                .catch(error => console.error("Greška pri resetovanju sorti:", error));

            return;
        }

        fetch(`http://localhost:8080/vino/available-options?stilIds=${selectedStilovi.join(",")}&sortaIds=${selectedSorte.join(",")}`)
            .then(response => response.json())
            .then(data => {
                setSorte(prevSorte => {
                    return data.sortaIds ? prevSorte.filter(s => data.sortaIds.includes(s.sortaId)) : prevSorte;
                });

                setStilovi(prevStilovi => {
                    return data.stilIds ? prevStilovi.filter(st => data.stilIds.includes(st.stilId)) : prevStilovi;
                });
            })
            .catch(error => console.error("Greška pri dinamičkom ažuriranju filtera:", error));
    }, [selectedStilovi, selectedSorte]);

    // Dohvatanje filtriranih vina
    useEffect(() => {
        fetch(`http://localhost:8080/vino/filter?stilIds=${selectedStilovi.join(",")}&sortaIds=${selectedSorte.join(",")}`)
            .then(response => response.json())
            .then(data => setVina(data))
            .catch(error => console.error("Greška pri dohvatanju filtriranih vina:", error));
    }, [selectedStilovi, selectedSorte]);

    // Dodavanje ili uklanjanje filtera
    const toggleFilter = (filterType, id) => {
        if (filterType === "stil") {
            setSelectedStilovi(prev => {
                const noviFilter = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];

                // Ako su svi stilovi uklonjeni, resetujemo liste sorti
                if (noviFilter.length === 0) {
                    fetch("http://localhost:8080/sorta/get/all")
                        .then(response => response.json())
                        .then(data => setSorte(data))
                        .catch(error => console.error("Greška prilikom resetovanja sorti:", error));
                }

                return noviFilter;
            });
        } else if (filterType === "sorta") {
            setSelectedSorte(prev => {
                const noviFilter = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];

                // Ako su sve sorte uklonjene, resetujemo liste stilova
                if (noviFilter.length === 0) {
                    fetch("http://localhost:8080/stil/get/all")
                        .then(response => response.json())
                        .then(data => setStilovi(data))
                        .catch(error => console.error("Greška prilikom resetovanja stilova:", error));
                }

                return noviFilter;
            });
        }
    };

    return (
        <div>
            <NavBar />
            <div className="container mt-4 ">
                <div className="row">

                    {/* Sidebar - filteri */}
                    <div className="col-md-2">
                        <h5 className="fw-bold">Stil</h5>
                        {stilovi.map((stil) => (
                            <div key={stil.stilId} className="form-check">
                                <input type="checkbox" className="form-check-input" id={`stil-${stil.stilId}`}
                                    checked={selectedStilovi.includes(stil.stilId)}
                                    onChange={() => toggleFilter("stil", stil.stilId)} />
                                <label className="form-check-label" htmlFor={`stil-${stil.stilId}`}>
                                    {stil.naziv}
                                </label>
                            </div>
                        ))}

                        <h5 className="fw-bold mt-3">Sorta</h5>
                        {sorte.map((sorta) => (
                            <div key={sorta.sortaId} className="form-check">
                                <input type="checkbox" className="form-check-input" id={`sorta-${sorta.sortaId}`}
                                    checked={selectedSorte.includes(sorta.sortaId)}
                                    onChange={() => toggleFilter("sorta", sorta.sortaId)} />
                                <label className="form-check-label" htmlFor={`sorta-${sorta.sortaId}`}>
                                    {sorta.naziv}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Kartice vina */}
                    <div className="col-md-7">
                        <h3 className="text-center fw-bold mb-4" style={{ color: "#831B00" }}>Naša ponuda</h3>
                        <div className="row">
                            {vina.map((vino) => (
                                <VinoKartica key={vino.vinoId} vino={vino} dodajUKorpu={dodajUKorpu} />
                            ))}
                        </div>
                    </div>

                    {/* Korpa */}
                    <Korpa korpa={korpa} ukloniIzKorpe={ukloniIzKorpe} ukupnaCena={ukupnaCena} isprazniKorpu={isprazniKorpu} />

                </div>
            </div>
        </div>
    );
}

export default SopPage;