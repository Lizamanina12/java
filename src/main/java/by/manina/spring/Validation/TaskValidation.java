package by.manina.spring.Validation;

import by.manina.spring.entity.TaskE;
import by.manina.spring.repository.TaskERepository;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
@Component
public class TaskValidation implements Validator {
        @Override
        public boolean supports(Class<?> aClass) {
            return TaskE.class.equals(aClass);
        }

        @Override
        public void validate(Object o, Errors errors) {
            TaskE taskE =(TaskE)o;
            if(taskE.getName_task().contains(" ")){
                errors.rejectValue("name","name value");
            }
        }
    }

