package com.npci.walletservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class WalletService {
	@Autowired
	private RestTemplate rest;
	
	@Autowired
	private Client accountClient;
	
	@CircuitBreaker(name="getAccount", fallbackMethod="getAccountDetails2")
	public Wallet getAccountDetails(long accountNumber) {
		
		System.out.println("_______Making Remote call_________");
		String URL = "http://ACCOUNT-SERVICE/account/" + accountNumber;
//		Account account = rest.getForObject(URL, Account.class);  // from restTemplt
		
		Account account = accountClient.getAccount(accountNumber);
		
		
		
		Wallet wallet = new Wallet("MyPay", 500, (500+account.getBalance()), account);
		
		return wallet;
	}
	
	public Wallet getAccountDetails2(long accountNumber, Throwable t) {
		System.out.println("___________FallBack Method_________");
		Wallet wallet = new Wallet("My pay", 500, 0 , null);
		return wallet;
	}
}
