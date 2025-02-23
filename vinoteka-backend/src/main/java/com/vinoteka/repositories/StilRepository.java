package com.vinoteka.repositories;

import com.vinoteka.entities.Stil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StilRepository extends JpaRepository<Stil, Long> {
}
