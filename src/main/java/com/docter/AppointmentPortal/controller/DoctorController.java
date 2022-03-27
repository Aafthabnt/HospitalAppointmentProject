package com.docter.AppointmentPortal.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.docter.AppointmentPortal.entity.Docter;
import com.docter.AppointmentPortal.entity.DocterRole;
import com.docter.AppointmentPortal.entity.Role;
import com.docter.AppointmentPortal.repository.DocterRepository;
import com.docter.AppointmentPortal.security.MySecurityConfig;
import com.docter.AppointmentPortal.services.DocterServices;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {
	
	@Autowired
	private DocterServices docterService;
	
	@Autowired
	private DocterRepository docterrepository;
	
	@Autowired
	private BCryptPasswordEncoder bcryptPasswordEncoder;
	
	
	//creating docter
	@PostMapping("/")
	public Docter createDocter(@RequestBody Docter docter) throws Exception 
	{
		//encoding bcryptpassword
		docter.setPassword(this.bcryptPasswordEncoder.encode(docter.getPassword()));
		
		Set<DocterRole> roles=new HashSet<>();
		
		Role role=new Role();
		role.setRoleid(45L);
		role.setRoleName("NORMAL");
		
		DocterRole docterRole=new DocterRole();
		docterRole.setDocter(docter);
		docterRole.setRole(role);
		
		roles.add(docterRole);
		return this.docterService.createDocter(docter, roles);
		
	}
	
	@GetMapping("/{username}")
	public Docter getDocter(@PathVariable("username") String username) {
		return this.docterService.getDocter(username);
		
		
	}
	@GetMapping("/")
	public List<Docter> getDoctername() {
		return this.docterrepository.findAll();
	}
	
	
	@DeleteMapping("/{docterId}")
	public void deleteDocter(@PathVariable("docterId") Long docterId) {
		this.docterService.deleteDocter(docterId);
	}
	
	
	
	

}
