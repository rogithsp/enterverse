package com.spr.EntreRise.Service;

import com.spr.EntreRise.Dto.BookDTO;
import com.spr.EntreRise.Entity.Book;
import com.spr.EntreRise.Repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ModelMapper modelMapper;

    public BookDTO addBook(Book book) {
        Book saved = bookRepository.save(book);
        return modelMapper.map(saved, BookDTO.class);
    }

    public List<BookDTO> getAllBooks() {
        return bookRepository.findAll().stream()
            .map(book -> modelMapper.map(book, BookDTO.class))
            .collect(Collectors.toList());
    }
}