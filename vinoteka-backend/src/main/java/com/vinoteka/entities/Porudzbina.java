package com.vinoteka.entities;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "porudzbina")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Porudzbina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "porudzbina_id")
    private Long porudzbinaId;

    @Column(name = "datum")
    private LocalDateTime datum;

    @Column(name = "ukupnaCena")
    private Double ukupnaCena;

    @OneToMany(mappedBy = "porudzbina", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StavkaPorudzbine> stavke;
}