package com.vinoteka.repositories;

import com.vinoteka.entities.StavkaPorudzbine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StavkaPorudzbineRepository extends JpaRepository<StavkaPorudzbine, Long> {
}
