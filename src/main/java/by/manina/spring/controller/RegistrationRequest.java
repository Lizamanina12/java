package by.manina.spring.controller;

import javax.validation.constraints.NotEmpty;
public class RegistrationRequest {
    @NotEmpty
    private String login;
    @NotEmpty
    private String password;
    @NotEmpty
    private String email;
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
