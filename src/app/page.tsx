import Image from 'next/image'
import {getServerSession} from "next-auth";

export default async function Home() {
    const session = await getServerSession();

    return (
        <div>
            Home Page
            {session?.user?.name ? (
                <div>{session?.user?.name}</div>
            ) : (
                <div>Not logged in</div>
            )}
        </div>
    );
}
