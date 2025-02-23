package com.vinoteka.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="stil")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Stil {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="stil_id")
    private Long stilId;

    @Column(name="naziv" , nullable = false)
    private String naziv;




}