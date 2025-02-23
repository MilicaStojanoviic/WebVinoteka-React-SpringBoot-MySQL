package com.vinoteka.controllers;

import com.vinoteka.entities.Vino;
import com.vinoteka.services.VinoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/vino")
@CrossOrigin
public class VinoController {
    private VinoService vinoService;

    public VinoController(VinoService vinoService) {
        this.vinoService = vinoService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Vino>> getAll() {

        return new ResponseEntity<>(vinoService.getAllVina(), HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Vino>> filterVina(
            @RequestParam(required = false) List<Long> stilIds,
            @RequestParam(required = false) List<Long> sortaIds) {
        return new ResponseEntity<>(vinoService.filterVina(stilIds, sortaIds), HttpStatus.OK);
    }

    @GetMapping("/available-options")
    public ResponseEntity<Map<String, List<Long>>> getAvailableOptions(
            @RequestParam(required = false) List<Long> stilIds,
            @RequestParam(required = false) List<Long> sortaIds) {
        return ResponseEntity.ok(vinoService.getAvailableOptions(stilIds, sortaIds));
    }

}
