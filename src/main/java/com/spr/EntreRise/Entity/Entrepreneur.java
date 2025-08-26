package com.spr.EntreRise.Entity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Entrepreneur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String industry;
    private String imageUrl;
    
    @Column(length = 1000)
    private String story;

    private String videoUrl;
}
