var mysql = require('mysql');
const {PrismaClient} = require('@prisma/client');
const { getAllFromDb, getFromDbById, getByEmailAndPasswordFromDb, saveUser, deleteFromDbByEmail, update } = require('../dbFiles/userDb');
import UserAccount from '../entity/user'

const prisma = new PrismaClient();

const {getFromDbByEmail} = require("../dbFiles/userDb.ts")
const userDb = require("../dbFiles/userDb.ts")

exports.getAllUsers = async (): Promise<UserAccount[]> => {
    const users: UserAccount[] = getAllFromDb()
    return users;
}

exports.findUserById = async (id: String): Promise<UserAccount> => {
    const user: UserAccount = getFromDbById(id)
    return user
}

exports.findUserByEmail = async (email: String): Promise<UserAccount> => {
    const user: UserAccount = userDb.getFromDbByEmail(email)
    return user
}

exports.findUserByEmailAndPassword = async (email: String, password: String): Promise<UserAccount> => {
    return await getByEmailAndPasswordFromDb(email, password);
}

exports.createUser = async (user: String): Promise<UserAccount> => {
    
    return saveUser(user)

}

exports.deleteUserByEmail = async (email: String) => {
    // const user: UserAccount = getFromDbById(id)
    // return user
    deleteFromDbByEmail(email);
}

exports.updateUser = async (user: String): Promise<UserAccount> => {
    
    return update(user);

}