package com.vinoteka.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="sorta")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Sorta {

    @Id
    @Column(name="sorta_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sortaId;

    @Column(name="naziv", nullable = false)
    private String naziv;
}
