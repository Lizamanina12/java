package by.manina.spring;

import by.manina.spring.Exception.ControllerException;
import by.manina.spring.repository.UserERepository;
import by.manina.spring.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Log4j2
public class aspect {

    @Autowired
    private UserService userService;
    @Autowired
    private UserERepository userRepository;


    @Pointcut("execution(public * by.manina.spring.service.UserService.saveUser(..))")
    public void callAtUserServiceSaveUser() {
    }

    @Pointcut("execution(public * by.manina.spring.service.UserService.findByLogin(..))")
    public void callAtUserServiceFindByLogin() {
    }

    @Before("callAtUserServiceSaveUser()")
    public void beforeCallAtUserServiceSaveUser(JoinPoint jp) throws ControllerException {


    }

    @Before("callAtUserServiceFindByLogin()")
    public void beforeCallAtUserServiceExistsUserByLogin(JoinPoint jp) throws ControllerException {

    }

    @After("callAtUserServiceFindByLogin()")
    public void callAtUserServiceFindByLogin(JoinPoint jp) {
        log.info("After callAtUserServiceFindByLogin");
    }

    @After("callAtUserServiceSaveUser()")
    public void afterCallAtUserServiceSaveUser(JoinPoint jp) {
        log.info("After callAtUserServiceSaveUser");
    }

}
