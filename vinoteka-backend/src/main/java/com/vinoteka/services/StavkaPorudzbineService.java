package com.vinoteka.services;

import com.vinoteka.repositories.StavkaPorudzbineRepository;
import org.springframework.stereotype.Service;

@Service
public class StavkaPorudzbineService {
    private StavkaPorudzbineRepository stavkaPorudzbineRepository;

    public StavkaPorudzbineService(StavkaPorudzbineRepository stavkaPorudzbineRepository) {
        this.stavkaPorudzbineRepository = stavkaPorudzbineRepository;
    }
}
