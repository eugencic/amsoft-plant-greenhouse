package com.example.plantgreenhouse.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {
    @GetMapping("/")
    public String showContext() {
        return "home";
    }
}
