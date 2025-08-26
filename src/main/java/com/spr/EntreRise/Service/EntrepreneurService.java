package com.spr.EntreRise.Service;

import com.spr.EntreRise.Dto.EntrepreneurDTO;
import com.spr.EntreRise.Entity.Entrepreneur;
import com.spr.EntreRise.Repository.EntrepreneurRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EntrepreneurService {

    @Autowired
    private EntrepreneurRepository entrepreneurRepository;

    @Autowired
    private ModelMapper modelMapper;

    public EntrepreneurDTO addEntrepreneur(Entrepreneur entrepreneur) {
        Entrepreneur saved = entrepreneurRepository.save(entrepreneur);
        return modelMapper.map(saved, EntrepreneurDTO.class);
    }

    public List<EntrepreneurDTO> getAllEntrepreneurs() {
        return entrepreneurRepository.findAll().stream()
            .map(e -> modelMapper.map(e, EntrepreneurDTO.class))
            .collect(Collectors.toList());
    }
}