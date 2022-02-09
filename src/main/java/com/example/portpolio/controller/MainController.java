package com.example.portpolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("lkhintro")
    public String lkhintro (Model model)
    {
        return "lkhintro";
    }

    @GetMapping("lkhhome")
    public String lkhhome (Model model)
    {
        return "lkhhomeForm";
    }
}
