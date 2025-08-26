package com.spr.EntreRise.Service;

import com.spr.EntreRise.Dto.UserDTO;
import com.spr.EntreRise.Entity.User;
import com.spr.EntreRise.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO registerUser(User user) {
        user.setId(null);
        user.setRole("STUDENT"); 
        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }

    public UserDTO getUserByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.map(user -> modelMapper.map(user, UserDTO.class)).orElse(null);
    }
}