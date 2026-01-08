let globalBankId=0; 
import {  BankOptions } from "@/types/Common";

export default class Bank {
  private bankId:string  
  private accounts:string[]   
  private isNegativeAlloed:boolean  
  
  constructor(bankId:string,options?:BankOptions){ 
    this.bankId=bankId
    this.isNegativeAlloed=options?.isNegativeAllowed ?? false; 
    this.accounts=[];
  }

 public  static create(options?:BankOptions){ 
    return new Bank((globalBankId++)+ "" ,options);
  } 
  public createAccount(val:number){ 
  return this;
  }  

  public getId(){
   return this.bankId;
  }
}
