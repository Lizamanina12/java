package by.manina.spring;

import by.manina.spring.service.TaskService;
import by.manina.spring.service.UserService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class TaskControllerTest {
    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;

    @Test
    void deleteContact() {
        Assert.assertFalse(taskService.deleteTask("liza")!=null);
    }
    @Test
    void saveContact() {
        Assert.assertFalse(taskService.saveTask("liz","kn")==null);
    }

}