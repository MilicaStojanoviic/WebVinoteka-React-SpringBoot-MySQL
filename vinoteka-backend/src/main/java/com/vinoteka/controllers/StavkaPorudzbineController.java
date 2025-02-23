package com.vinoteka.controllers;

import com.vinoteka.services.StavkaPorudzbineService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stavkapor")
public class StavkaPorudzbineController {
    private StavkaPorudzbineService stavkaPorudzbineService;

    public StavkaPorudzbineController(StavkaPorudzbineService stavkaPorudzbineService) {
        this.stavkaPorudzbineService = stavkaPorudzbineService;
    }
}
