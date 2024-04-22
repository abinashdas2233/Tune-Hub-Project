package com.example.tunehub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.tunehub.entities.user;
import com.example.tunehub.repositry.userrepository;

@Service
public class userserviceimplementation implements userservice {
    @Autowired
    userrepository urepo;

    @Override
    public String adduser(user u) {
        // TODO Auto-generated method stub

        urepo.save(u);
        return "user created";
    }

    @Override
    public boolean emailexist(String email) {
        // TODO Auto-generated method stub
        if (urepo.findByEmail(email) == null) {
            return false;
        } else {
            return true;
        }

    }

    @Override
    public boolean validateuser(String email, String password) {
        // TODO Auto-generated method stub
        user u = urepo.findByEmail(email);
        String pw = u.getPassword();
        System.out.println("my password---"+pw);
        if (pw.equals(password)) {
            return true;
        } else {

            return false;
        }
    }

    @Override
    public String getRole(String email) {
        // TODO Auto-generated method stub
        user u = urepo.findByEmail(email);
        String role = u.getRole();
        return role;
    }

    @Override
    public user getuser(String email) {
        // TODO Auto-generated method 
        
        

        return urepo.findByEmail(email);
    }

    @Override
    public void updateuser(user u) {
        // TODO Auto-generated method stub
        urepo.save(u);
        
    }

    @Override
    public List<user> sendusers() {
        // TODO Auto-generated method stub
       
        return  urepo.findAll();
    }
    

}
