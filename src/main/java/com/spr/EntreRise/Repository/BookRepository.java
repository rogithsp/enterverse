package com.spr.EntreRise.Repository;

import com.spr.EntreRise.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
