package by.manina.spring.controller;

public class ServResponce {
    public ServResponce(boolean status, String message, Object obj) {
        this.status = status;
        this.message = message;
        this.obj = obj;
    }

    public ServResponce() {
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getObj() {
        return obj;
    }

    public void setObj(Object obj) {
        this.obj = obj;
    }

    public boolean status;
    public String message;
    public Object obj;
}


