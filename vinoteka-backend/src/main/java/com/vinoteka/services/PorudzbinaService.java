package com.vinoteka.services;

import com.vinoteka.DTO.PorudzbinaDTO;
import com.vinoteka.DTO.StavkaPorudzbineDTO;
import com.vinoteka.entities.Porudzbina;
import com.vinoteka.entities.StavkaPorudzbine;
import com.vinoteka.entities.Vino;
import com.vinoteka.repositories.PorudzbinaRepository;
import com.vinoteka.repositories.StavkaPorudzbineRepository;
import com.vinoteka.repositories.VinoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PorudzbinaService {
    private PorudzbinaRepository porudzbinaRepo;
    private final StavkaPorudzbineRepository stavkaRepo;
    private final VinoRepository vinoRepo;

    public PorudzbinaService(PorudzbinaRepository porudzbinaRepo, StavkaPorudzbineRepository stavkaRepo, VinoRepository vinoRepo) {
        this.porudzbinaRepo = porudzbinaRepo;
        this.stavkaRepo = stavkaRepo;
        this.vinoRepo = vinoRepo;
    }


    public Porudzbina kreirajPorudzbinu(PorudzbinaDTO porudzbinaDTO) {
        Porudzbina porudzbina = new Porudzbina();
        porudzbina.setDatum(LocalDateTime.now()); // Automatski generiše datum
        porudzbina.setUkupnaCena(porudzbinaDTO.getUkupnaCena());

        // Čuvanje porudžbine u bazi
        porudzbina = porudzbinaRepo.save(porudzbina);

        // Kreiramo listu stavki porudžbine
        List<StavkaPorudzbine> stavke = new ArrayList<>();

        // Koristimo klasičnu for petlju umesto stream().map()
        for (StavkaPorudzbineDTO stavkaDTO : porudzbinaDTO.getStavke()) {
            Vino vino = vinoRepo.findById(stavkaDTO.getVinoId())
                    .orElseThrow(() -> new RuntimeException("Vino sa ID " + stavkaDTO.getVinoId() + " nije pronađeno"));

            StavkaPorudzbine stavka = new StavkaPorudzbine();
            stavka.setVino(vino);
            stavka.setPorudzbina(porudzbina); // Sada je porudzbina dostupna
            stavka.setKolicina(stavkaDTO.getKolicina());

            stavke.add(stavka);
        }

        // Čuvanje svih stavki porudžbine
        stavkaRepo.saveAll(stavke);

        System.out.println("Sačuvana porudžbina: " + porudzbina);
        System.out.println("Sačuvane stavke: " + stavke);

        return porudzbina;
    }
}
