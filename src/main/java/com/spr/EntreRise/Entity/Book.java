package com.spr.EntreRise.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private double price;
    private String imageUrl;

    @Column(length = 1000)
    private String description;

    private double commissionPercent;
}
