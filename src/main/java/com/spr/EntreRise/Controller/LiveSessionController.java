package com.spr.EntreRise.Controller;

import com.spr.EntreRise.Dto.LiveSessionDTO;
import com.spr.EntreRise.Entity.LiveSession;
import com.spr.EntreRise.Service.LiveSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin(origins = "*")
public class LiveSessionController {

    @Autowired
    private LiveSessionService service;

    @PostMapping
    public LiveSessionDTO create(@RequestBody LiveSession session) {
        return service.addSession(session);
    }

    @GetMapping
    public List<LiveSessionDTO> getAll() {
        return service.getAllSessions();
    }
}
