package cz.upce.fe.cv02.controller;

import cz.upce.fe.cv02.service.ResourceNotFoundException;
import cz.upce.fe.cv02.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
@AllArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping("")
    public ResponseEntity<?> findAll() {
        var result = taskService.findAll();

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable final Long id) throws ResourceNotFoundException {
        var result = taskService.findById(id);

        return ResponseEntity.ok(result);
    }
}
