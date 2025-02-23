package com.vinoteka.repositories;

import com.vinoteka.entities.Porudzbina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PorudzbinaRepository extends JpaRepository<Porudzbina, Long> {
}
