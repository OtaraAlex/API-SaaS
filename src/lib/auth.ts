import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export async function mustBeLoggedIn(){
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin")
    }
}