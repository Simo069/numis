import { PrismaClient } from '@prisma/client';
import { hash } from "bcrypt";
import db from "@/lib/db";
import * as z from "zod";

const signupSchema = z.object({
    username: z.string().min(1,'Username i required ').max(100),
    email: z.string().min(1,'email i required ').email('Invalid email'),
    password: z.string().min(1,"password is required").min(8,"password must have more than character"),
});

export default async function handler(req, res) {
    console.log("test1")
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        console.log("test2")
        // const body = await req.json()
        const { email, username, password , firstname , secondname } =  req.body;
        // const { email, username, password } = signupSchema.parse(req.body) ;
        // const email= req.body.email
        // const username= req.body.username
        // const password= req.body.password
        console.log("email", email)
        console.log("username", username)
        console.log("password", password)
        console.log("firstname", firstname)
        console.log("secondname", secondname)
        // Check if email already exists
        const existingUserByEmail = await db.User.findUnique({
            where: { email : email }
        });

        if (existingUserByEmail) {
            return res.status(409).json({ user: null, message: 'User with email already exists' });
        }

        // Check if username already exists
        const existingUserByUsername = await db.User.findUnique({
            where: { username : username }
        });

        if (existingUserByUsername) {
            return res.status(409).json({ user: null, message: 'User with username already exists' });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.User.create({
            data: {
                username,
                email,
                password: hashedPassword,
                firstname,
                secondname
            }
        });

        const { password: _, ...userWithoutPassword } = newUser;

        return res.status(201).json({ user: userWithoutPassword, message: 'User created successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
}