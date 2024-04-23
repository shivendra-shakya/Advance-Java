package com.npci.asyncdemo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping(path="/synch" , produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getUser(){
		return service.getUsersSynch();
		}
	
	@GetMapping(path="/asynch" , produces=MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<User> getUser2(){
		return service.getUserAsynch();
	}
}
