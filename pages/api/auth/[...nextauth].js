// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

// import db from "@/lib/db"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import bcrypt from "bcrypt"
// import CredentialsProvider from "next-auth/providers/credentials";



// export  const authOptions = {
//   // Configure one or more authentication providers
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {},
//             async authorize(credentials) {
//                 const { email, password } = credentials;
//                 console.log(email)
//                 console.log(password)
                
//                 try {
                    
//                     const user = await db.user.findUnique({
                        
//                         where: {
//                             email: email,
//                         },
//                     });  
                    
//                     // If user doesn't exist, return null
//                     if (!user || user.length === 0) {
//                         return null;
//                     }
//                     console.log("user:::",user.password) 
//                     // Compare passwords
//                     const passwordsMatch = await bcrypt.compare(password, user.password);
//                     console.log("passwordsMatch",passwordsMatch)   
//                     // If passwords don't match, return null
//                     if (!passwordsMatch) {
//                         return null;
//                     }
//                     console.log(user);
//                     // If everything is okay, return the user object
//                     return user;
//                 } catch (error) {
//                     console.log("Error: ", error);
//                 }
//             },
//         }),
//     ],
//     session: {
//         strategy: "jwt",
        
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//     signIn: "/",
//     },
// }
// export default NextAuth(authOptions)


import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcrypt from "bcrypt"
import db from "@/lib/db"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;
                console.log(email)
                console.log(password)
                
                try {
                    const user = await db.user.findUnique({
                        where: { email: email },
                    });  
                    
                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (!passwordsMatch) {
                        return null;
                    }

                    return { id: user.id, email: user.email, username: user.username, role: user.role , firstname: user.firstname , secondname: user.secondname , profile: user.profile, };
                } catch (error) {
                    console.log("Error: ", error);
                    return null;
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
        signOut:"/",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.username = user.username;
                token.firstname = user.firstname;
                token.secondname = user.secondname;
                token.role = user.role;
                token.profile = user.profile;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.username = token.username;
            session.user.firstname = token.firstname;
            session.user.secondname = token.secondname;
            session.user.role = token.role;
            session.user.profile = token.profile;
            return session;
        },
    },
};

export default NextAuth(authOptions);
