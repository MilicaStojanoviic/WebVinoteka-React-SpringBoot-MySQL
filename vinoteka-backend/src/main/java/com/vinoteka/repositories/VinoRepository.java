package com.vinoteka.repositories;

import com.vinoteka.entities.Vino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VinoRepository extends JpaRepository<Vino, Long> {

    List<Vino> findByStilStilIdInAndSortaSortaIdIn(List<Long> stilIds, List<Long> sortaIds);

    List<Vino> findByStilStilIdIn(List<Long> stilIds);

    List<Vino> findBySortaSortaIdIn(List<Long> sortaIds);

    @Query("SELECT DISTINCT v.sorta.sortaId FROM Vino v WHERE v.stil.stilId IN :stilIds")
    List<Long> findDistinctSortaIdsByStilIds(@Param("stilIds") List<Long> stilIds);

    @Query("SELECT DISTINCT v.stil.stilId FROM Vino v WHERE v.sorta.sortaId IN :sortaIds")
    List<Long> findDistinctStilIdsBySortaIds(@Param("sortaIds") List<Long> sortaIds);

}
