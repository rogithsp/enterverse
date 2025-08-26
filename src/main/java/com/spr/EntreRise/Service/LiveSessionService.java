package com.spr.EntreRise.Service;

import com.spr.EntreRise.Dto.LiveSessionDTO;
import com.spr.EntreRise.Entity.LiveSession;
import com.spr.EntreRise.Repository.LiveSessionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LiveSessionService {

    @Autowired
    private LiveSessionRepository repository;

    @Autowired
    private ModelMapper modelMapper;

    public LiveSessionDTO addSession(LiveSession session) {
        LiveSession saved = repository.save(session);
        return modelMapper.map(saved, LiveSessionDTO.class);
    }

    public List<LiveSessionDTO> getAllSessions() {
        return repository.findAll().stream()
                .map(session -> modelMapper.map(session, LiveSessionDTO.class))
                .collect(Collectors.toList());
    }
}