package by.manina.spring;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class ApplicationTests {

    @Test
    void contextLoads() {
    }
    @Autowired
    private MockMvc mockMvc;

    @org.junit.Test
    public void LoadUser() throws Exception {
        mockMvc.perform(post("/test")).andDo(print()).andExpect(status().is2xxSuccessful());
    }

    @org.junit.Test
    public void LoadUserEx() throws Exception {
        mockMvc.perform(post("/register")).andDo(print()).andExpect(status().is4xxClientError());
    }
}
