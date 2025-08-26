package com.spr.EntreRise.Dto;
import lombok.Data;

@Data
public class BookDTO {
    private Long id;
    private String title;
    private String author;
    private double price;
    private String imageUrl;
    private String description;
    private double commissionPercent;
}
