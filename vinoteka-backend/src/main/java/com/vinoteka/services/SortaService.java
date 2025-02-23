package com.vinoteka.services;

import com.vinoteka.entities.Sorta;
import com.vinoteka.repositories.SortaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SortaService {
    private SortaRepository sortaRepository;

    public SortaService(SortaRepository sortaRepository) {
        this.sortaRepository = sortaRepository;
    }

    public List<Sorta> getAllSorta() {
        return sortaRepository.findAll();
    }
}
