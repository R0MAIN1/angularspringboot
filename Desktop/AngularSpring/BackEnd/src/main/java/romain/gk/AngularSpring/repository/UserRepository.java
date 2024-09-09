package romain.gk.AngularSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import romain.gk.AngularSpring.models.User;

public interface UserRepository extends JpaRepository<User, Long>{}


