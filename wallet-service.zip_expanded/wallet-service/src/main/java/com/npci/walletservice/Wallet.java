package com.npci.walletservice;

public class Wallet {
	
	private String name;
	private double walletBalance;
	private double totalAmountToSpend;
	private Account account;
	
	
	public Wallet(String name, double walletBalance, double totalAmountToSpend, Account account) {
		super();
		this.name = name;
		this.walletBalance = walletBalance;
		this.totalAmountToSpend = totalAmountToSpend;
		this.account = account;
	}


	public Wallet() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public double getWalletBalance() {
		return walletBalance;
	}


	public void setWalletBalance(double walletBalance) {
		this.walletBalance = walletBalance;
	}


	public double getTotalAmountToSpend() {
		return totalAmountToSpend;
	}


	public void setTotalAmountToSpend(double totalAmountToSpend) {
		this.totalAmountToSpend = totalAmountToSpend;
	}


	public Account getAccount() {
		return account;
	}


	public void setAccount(Account account) {
		this.account = account;
	}
	
	
	
}
