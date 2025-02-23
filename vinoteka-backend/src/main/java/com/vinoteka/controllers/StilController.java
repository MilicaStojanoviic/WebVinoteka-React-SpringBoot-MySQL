package com.vinoteka.controllers;

import com.vinoteka.entities.Stil;
import com.vinoteka.services.StilService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stil")
@CrossOrigin
public class StilController {
    private StilService stilService;

    public StilController(StilService stilService) {
        this.stilService = stilService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Stil>> getAll() {
        return new ResponseEntity<>(stilService.getAllStil(), HttpStatus.OK);
    }
}
