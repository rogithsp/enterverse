package com.spr.EntreRise.Controller;

import com.spr.EntreRise.Dto.EntrepreneurDTO;
import com.spr.EntreRise.Entity.Entrepreneur;
import com.spr.EntreRise.Service.EntrepreneurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entrepreneurs")
@CrossOrigin(origins = "*")
public class EntrepreneurController {

    @Autowired
    private EntrepreneurService entrepreneurService;

    @PostMapping
    public EntrepreneurDTO addEntrepreneur(@RequestBody Entrepreneur entrepreneur) {
        return entrepreneurService.addEntrepreneur(entrepreneur);
    }

    @GetMapping
    public List<EntrepreneurDTO> getAll() {
        return entrepreneurService.getAllEntrepreneurs();
    }
}