package com.vinoteka.repositories;

import com.vinoteka.entities.Sorta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SortaRepository extends JpaRepository<Sorta, Long> {
}
