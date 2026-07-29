package serverManager.Controller;

import serverManager.model.Contact;
import serverManager.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@CrossOrigin(origins = "${cors.allowed.origins}")

@RestController
@RequestMapping("/contact")
public class MainController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/sendEmails")
    public String sendEmails(@Valid @RequestBody Contact contacts) {
        contactService.sendMail(contacts);
        return "Mail Send!!!";
    }
}
