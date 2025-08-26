package com.spr.EntreRise.Controller;

import com.spr.EntreRise.Dto.BookDTO;
import com.spr.EntreRise.Entity.Book;
import com.spr.EntreRise.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public BookDTO addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @GetMapping
    public List<BookDTO> getAllBooks() {
        return bookService.getAllBooks();
    }
}