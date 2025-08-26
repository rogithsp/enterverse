package com.spr.EntreRise.Dto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class LiveSessionDTO {
    private Long id;
    private String title;
    private String hostName;
    private String description;
    private LocalDateTime sessionDate;
    private double price;
    private String meetingUrl;
}
