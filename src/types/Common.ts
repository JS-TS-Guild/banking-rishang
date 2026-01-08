import Bank from "@/models/bank";
import BankAccount from "@/models/bank-account";
import User from "@/models/user";

export type BankOptions = {
  isNegativeAllowed?: boolean;
};  
export type BankAccountId = string;
export type UserId = string;
export type BankId = string;
export type UserAccountsDeatails = Record<string, string[]>;
export type UserDeatails = Record<string, User>;
export type BanksDeatails = Record<string, Bank>;
export type BankAccountsDeatails = Record<string, BankAccount>;
