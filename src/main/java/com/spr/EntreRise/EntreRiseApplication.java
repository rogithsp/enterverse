package com.spr.EntreRise;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class EntreRiseApplication {
@Bean
public ModelMapper modelMapper()
{
	return new ModelMapper();
}
	public static void main(String[] args) {
		SpringApplication.run(EntreRiseApplication.class, args);
		System.out.println(new BCryptPasswordEncoder().encode("12345"));

	}

}
