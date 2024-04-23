package com.npci.walletservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("http://ACCOUNT-SERVICE")
public interface Client {
	
	@GetMapping(path="account/{acc}")
	public Account getAccount(@PathVariable("acc") long acc);

}
