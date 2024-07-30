import { UserButton, useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Navbar= async() => {
    const {userId}=await auth();
    const isAuth= !!userId;
    return (
        <div>
            <ul className="flex justify-between m-10 items-center">
                <div>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                </div>
                <div className="flex gap-10">
                    {!isAuth ? (
                        <>
                        <Link href="/sign-in">
                            <li>login</li>
                        </Link>
                        <Link href="/sign-up">
                        <li>signup</li>
                         </Link>
                        </>
                    ):(
                        <>
                        {" "}
                        <Link href="/profile">
                        <li>Profile</li>
                    </Link>
                        <li>
                            <UserButton afterSignOutUrl="/"/>
                        </li>
                        </>
                    )}
                </div>
            </ul>
        </div>
    );
};
export default Navbar; 