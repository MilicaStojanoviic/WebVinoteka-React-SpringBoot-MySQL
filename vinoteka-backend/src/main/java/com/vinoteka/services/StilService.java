package com.vinoteka.services;

import com.vinoteka.entities.Stil;
import com.vinoteka.repositories.StilRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StilService {
    private StilRepository stilRepository;

    public StilService(StilRepository stilRepository) {
        this.stilRepository = stilRepository;
    }

    public List<Stil> getAllStil() {
        return stilRepository.findAll();
    }
}
