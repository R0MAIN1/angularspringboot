package romain.gk.AngularSpring.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import romain.gk.AngularSpring.models.User;
import romain.gk.AngularSpring.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")  // Permettre les appels depuis Angular
@RequiredArgsConstructor
public class UserController {
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
