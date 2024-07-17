
import { useRouter } from "next/router";
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Home() {

    const [user, setUser] = useState([]);
    const router = useRouter();
    const id = 140;
    const { data: session } = useSession();
    if (session) {
        router.push('/')
    }

    useEffect(() => {
        if (session) {
            const fetchUser = async () => {
                const email = session?.user?.email;
                if (email) {
                    try {
                        const resUserExists = await fetch(
                            `${process.env.NEXT_PUBLIC_URL}/api/userExist`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email: email }),
                            }
                        );
                        const responseUserExists = await resUserExists.json();
                        setUser(responseUserExists.user);
                    } catch (error) {
                        console.log("Error during registration: ", error);
                    }
                }
            };
            fetchUser();
        }
    }, [session]);
    useEffect(() => {
        if (user.role === "client") {
            router.push("/dashbord");
        } else if (user.role === "admin") {
            router.push("/admin");
        }
    }, [user.role, router]);
    return (
        <>
            <main>
                <LoginForm />
            </main>
        </>
    );
}
