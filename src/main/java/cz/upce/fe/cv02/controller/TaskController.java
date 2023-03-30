package cz.upce.fe.cv02.controller;

import cz.upce.fe.cv02.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
