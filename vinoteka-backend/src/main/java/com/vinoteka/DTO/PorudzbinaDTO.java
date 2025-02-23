package com.vinoteka.DTO;

import lombok.Data;
import java.util.List;

@Data
public class PorudzbinaDTO {
    private List<StavkaPorudzbineDTO> stavke;
    private Double ukupnaCena;
}
