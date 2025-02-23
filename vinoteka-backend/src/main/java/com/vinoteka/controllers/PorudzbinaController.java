package com.vinoteka.controllers;

import com.vinoteka.DTO.PorudzbinaDTO;
import com.vinoteka.entities.Porudzbina;
import com.vinoteka.services.PorudzbinaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/porudzbina")
@CrossOrigin
public class PorudzbinaController {
    private PorudzbinaService porudzbinaService;

    public PorudzbinaController(PorudzbinaService porudzbinaService) {
        this.porudzbinaService = porudzbinaService;
    }

    @PostMapping("/create")
    public ResponseEntity<Porudzbina> sacuvajPorudzbinu(@RequestBody PorudzbinaDTO porudzbinaDTO) {
        Porudzbina porudzbina = porudzbinaService.kreirajPorudzbinu(porudzbinaDTO);
        return ResponseEntity.ok(porudzbina);
    }
}
