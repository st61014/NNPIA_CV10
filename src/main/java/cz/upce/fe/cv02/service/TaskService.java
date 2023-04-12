package cz.upce.fe.cv02.service;

import cz.upce.fe.cv02.domain.Task;
import cz.upce.fe.cv02.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public List<Task> findAllByAuthorId(final Long authorId) {
        return taskRepository.findAllByAuthorId(authorId);
    }

    public Iterable<Task> findAll() {
        return taskRepository.findAll();
    }

    public Task findById(Long id) throws ResourceNotFoundException {
        var result = taskRepository.findById(id);

        if (result.isEmpty()) {
            throw new ResourceNotFoundException();
        }

        return result.get();
    }
}
