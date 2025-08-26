package com.spr.EntreRise.Entity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class LiveSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String hostName;
    private String description;
    private LocalDateTime sessionDate;
    private double price;
    private String meetingUrl;

}
