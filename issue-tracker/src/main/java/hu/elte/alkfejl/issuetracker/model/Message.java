/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.issuetracker.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.sql.Timestamp;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 *
 * @author kkereszti
 */
@Entity 
@Table(name = "MESSAGES")
@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@EqualsAndHashCode(callSuper = true)
public class Message extends BaseEntity {
    @Column(nullable = false)
    private Timestamp timestamp;

    @Column(nullable = false)
    private String message;

    @JoinColumn
    @ManyToOne(targetEntity = Issue.class)
    private Issue issue;
    
    
}
