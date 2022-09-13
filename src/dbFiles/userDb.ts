const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
import UserAccount from '../entity/user'

exports.getAllFromDb = async (): Promise<UserAccount[]> => {
    return await prisma.user.findMany()
}

exports.getFromDbById = async (id: String): Promise<UserAccount> => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

exports.deleteFromDbByEmail = async (email: String) => {
    const deleteUser = await prisma.user.delete({
        where: {
            email: email
        }
    })

    // return await prisma.user.deleteOne({
    //     where: {
    //         id: id
    //     }
    // })
}


exports.getFromDbByEmail = async (email: String): Promise<UserAccount> => {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}

exports.getByEmailAndPasswordFromDb = async (email: String, password: String): Promise<UserAccount> => {
    return await prisma.user.findFirst({
        where: {
            email: email,
            password: password
        }
    })
}

exports.saveUser = async (user: UserAccount): Promise<UserAccount> => {
    return await prisma.user.create({
        data: {
            username: user.username,
            email: user.email,
            password: user.password,
            highscore: user.highscore
        },
    })
}

exports.update = async (user: UserAccount): Promise<UserAccount> => {
    return await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            username: user.username,
            email: user.email,
            password: user.password,
            highscore: user.highscore
        }
    })
}