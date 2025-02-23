package com.vinoteka.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vino")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vino_id")
    private Long vinoId;

    @Column(name = "naziv", nullable = false)
    private String naziv;

    @Column(name = "cena", nullable = false)
    private Double cena;

    @Column(name = "slika")
    private String slika;

    @ManyToOne
    @JoinColumn(name = "stil_id", nullable = false)
    private Stil stil;

    @ManyToOne
    @JoinColumn(name = "sorta_id", nullable = false)
    private Sorta sorta;
}
