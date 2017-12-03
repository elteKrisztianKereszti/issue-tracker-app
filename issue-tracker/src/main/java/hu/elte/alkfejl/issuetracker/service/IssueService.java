/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.issuetracker.service;

import hu.elte.alkfejl.issuetracker.model.*;
import hu.elte.alkfejl.issuetracker.model.User.Role;
import hu.elte.alkfejl.issuetracker.repository.IssueRepository;
import java.sql.Timestamp; 
import java.time.LocalDateTime; 
import java.util.Collections; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service; 

/**
 *
 * @author kkereszti
 */
@Service
public class IssueService {
        @Autowired 
        private IssueRepository issueRepository; 

        public Iterable<Issue> issues() {
            return issueRepository.findAll();
        }

        public Iterable<Issue> listByRole(User user) { 
            Role role = user.getRole(); 
            if (role == Role.USER) { 
                return issueRepository.findAllByUser(user); 
            }  
            else if (role == Role.ADMIN) { 
                return issueRepository.findAll(); 
            } 
            return Collections.emptyList(); 
        } 

        public Issue create(Issue issue) { 
            issue.setStatus(Issue.Status.NEW); 
            issue.setTimestamp(Timestamp.valueOf(LocalDateTime.now())); 
            return issueRepository.save(issue); 
        } 

        public Issue update(int id, Issue issue) { 
            Issue currentIssue = issueRepository.findOne(id); 
            currentIssue.setStatus(issue.getStatus());
            return issueRepository.save(currentIssue); 
        } 


        public void delete(int id) { 
            issueRepository.delete(id); 
        } 

        public Issue read(int id) { 
            return issueRepository.findOne(id); 
        } 

        public void addMessage(int id, Message message) {
            Issue issue = issueRepository.findOne(id);
            message.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
            issue.getMessages().add(message);
            issueRepository.save(issue);
        }

}
