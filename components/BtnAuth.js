import { useSession, signIn, signOut } from "next-auth/react";

export default function BtnAuth() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                Signed in as {session.user.id} <br />
                Signed in as {session.user.firstname} <br />
                Signed in as {session.user.username}
                Signed in as {session.user.role}
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}
