package com.spr.EntreRise.Repository;

import com.spr.EntreRise.Entity.Entrepreneur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntrepreneurRepository extends JpaRepository<Entrepreneur, Long> {
}