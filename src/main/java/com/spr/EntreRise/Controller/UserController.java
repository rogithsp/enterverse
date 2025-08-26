package com.spr.EntreRise.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spr.EntreRise.Dto.UserDTO;
import com.spr.EntreRise.Entity.User;
import com.spr.EntreRise.Service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public UserDTO register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @GetMapping("/by-email")
    public UserDTO getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }
}