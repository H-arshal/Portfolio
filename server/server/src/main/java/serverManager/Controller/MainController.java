package serverManager.Controller;

import serverManager.model.Contact;
import serverManager.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://harshal-portfolio-5mbz.onrender.com")
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contact")
public class MainController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/sendEmails")
    public String sendEmails(@RequestBody Contact contacts) {
        contactService.sendMail(contacts);
        return "Mail Send!!!";
    }
}
