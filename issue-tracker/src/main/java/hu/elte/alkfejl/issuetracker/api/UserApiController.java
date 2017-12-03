/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.issuetracker.api;

import hu.elte.alkfejl.issuetracker.annotation.Role;
import hu.elte.alkfejl.issuetracker.exception.UserNotValidException;
import hu.elte.alkfejl.issuetracker.model.User;
import static hu.elte.alkfejl.issuetracker.model.User.Role.*;
import hu.elte.alkfejl.issuetracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author kkereszti
 */

@RestController 
@RequestMapping("/api/user") 
public class UserApiController {
    private final UserService userService;

    @Autowired 
    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @Role({USER, ADMIN})
    @GetMapping
    public ResponseEntity<User> user() { 
        if (userService.isLoggedIn()) { 
            return ResponseEntity.ok(userService.getUser()); 
        } 
        return ResponseEntity.badRequest().build(); 
    } 
     
    @PostMapping("/login") 
    public ResponseEntity<User> login(@RequestBody User user) { 
        try { 
            return ResponseEntity.ok(userService.login(user)); 
        } 
        catch (UserNotValidException e) { 
            return ResponseEntity.badRequest().build(); 
        } 
    } 
     
    @PostMapping("/logout") 
    public ResponseEntity<User> logout(@RequestBody User user) { 
        this.userService.setUser(null);
        return ResponseEntity.ok().build(); 
    } 
    
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.register(user));
    }

}
