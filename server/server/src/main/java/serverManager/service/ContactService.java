package serverManager.service;

import org.springframework.mail.MailException;
import serverManager.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    @Autowired
    private JavaMailSender jms;
    public void sendMail(Contact cont){
        try {
        SimpleMailMessage smm = new SimpleMailMessage();
        smm.setFrom("jokerneon0810@outlook.com");
        smm.setTo("jokerneon0810@outlook.com");
        smm.setSubject("I want to make connection!!!");
        smm.setText("Name: " + cont.getName() + "\nEmail: " + cont.getEmail() + "\nMessage: " + cont.getMessage());
        jms.send(smm);
            System.out.println("Email sent successfully.");
        } catch (MailException e) {
            System.err.println("Error sending email: " + e.getMessage());
            e.printStackTrace();
        }
    }
}