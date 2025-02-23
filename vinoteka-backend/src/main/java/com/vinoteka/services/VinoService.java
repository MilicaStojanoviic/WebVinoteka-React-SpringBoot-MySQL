package com.vinoteka.services;

import com.vinoteka.entities.Vino;
import com.vinoteka.repositories.VinoRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class VinoService {
    private VinoRepository vinoRepository;

    public VinoService(VinoRepository vinoRepository) {
        this.vinoRepository = vinoRepository;
    }

    public List<Vino> getAllVina() {
        return vinoRepository.findAll();
    }

    public List<Vino> filterVina(List<Long> stilIds, List<Long> sortaIds) {
        if ((stilIds == null || stilIds.isEmpty()) && (sortaIds == null || sortaIds.isEmpty())) {
            return vinoRepository.findAll();
        } else if (stilIds != null && !stilIds.isEmpty() && sortaIds != null && !sortaIds.isEmpty()) {
            return vinoRepository.findByStilStilIdInAndSortaSortaIdIn(stilIds, sortaIds);
        } else if (stilIds != null && !stilIds.isEmpty()) {
            return vinoRepository.findByStilStilIdIn(stilIds);
        } else {
            return vinoRepository.findBySortaSortaIdIn(sortaIds);
        }
    }

    public Map<String, List<Long>> getAvailableOptions(List<Long> stilIds, List<Long> sortaIds) {
        Map<String, List<Long>> availableOptions = new HashMap<>();

        if (stilIds != null && !stilIds.isEmpty()) {
            List<Long> dostupneSorte = vinoRepository.findDistinctSortaIdsByStilIds(stilIds);
            availableOptions.put("sortaIds", dostupneSorte);
        }

        if (sortaIds != null && !sortaIds.isEmpty()) {
            List<Long> dostupniStilovi = vinoRepository.findDistinctStilIdsBySortaIds(sortaIds);
            availableOptions.put("stilIds", dostupniStilovi);
        }

        return availableOptions;
    }


}
