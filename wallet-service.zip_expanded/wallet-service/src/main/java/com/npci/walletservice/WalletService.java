package com.npci.walletservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WalletService {
	@Autowired
	private RestTemplate rest;
	
	@Autowired
	private Client accountClient;
	
	public Wallet getAccountDetails(long accountNumber) {
		String URL = "http://ACCOUNT-SERVICE/account/" + accountNumber;
//		Account account = rest.getForObject(URL, Account.class);  // from restTemplt
		
		Account account = accountClient.getAccount(accountNumber);
		
		
		
		Wallet wallet = new Wallet("MyPay", 500, (500+account.getBalance()), account);
		
		return wallet;
	}
}
