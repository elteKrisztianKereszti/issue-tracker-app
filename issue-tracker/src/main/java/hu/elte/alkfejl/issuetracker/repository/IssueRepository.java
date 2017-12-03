/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.issuetracker.repository;

import hu.elte.alkfejl.issuetracker.model.*;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author kkereszti
 */
public interface IssueRepository extends CrudRepository<Issue, Integer> {
   Iterable<Issue> findAllByUser(User user);
}
