package com.vinoteka.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "stavka_porudzbine")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
public class StavkaPorudzbine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stavka_id")
    private Long stavkaId;

    @Column(name = "kolicina", nullable = false)
    private int kolicina;

    @ManyToOne
    @JoinColumn(name = "porudzbina_id", nullable = false)
    private Porudzbina porudzbina;

    @ManyToOne
    @JoinColumn(name = "vino_id", nullable = false)
    private Vino vino;
}
