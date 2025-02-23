package com.vinoteka.controllers;


import com.vinoteka.entities.Sorta;
import com.vinoteka.services.SortaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sorta")
@CrossOrigin
public class SortaController {
    private SortaService sortaService;

    public SortaController(SortaService sortaService) {
        this.sortaService = sortaService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Sorta>> getAll() {
        return new ResponseEntity<>(sortaService.getAllSorta(), HttpStatus.OK);
    }
}
