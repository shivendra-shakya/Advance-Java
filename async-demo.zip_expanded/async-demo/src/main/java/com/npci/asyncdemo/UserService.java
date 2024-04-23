package com.npci.asyncdemo;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;

@Service
public class UserService {
	
	public List<User> getUsersSynch(){
		List<User> users = new ArrayList<>();
		try {
			for(int i=1 ; i<=5 ; i++) {
				Thread.sleep(1000);
				users.add(new User(i, Thread.currentThread().getName()));
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return users;
	}
	
	public Flux<User> getUserAsynch(){
		return Flux.range(1, 5).delayElements(Duration.ofSeconds(1)).map(i -> new User(i, Thread.currentThread().getName()));
	}
}
