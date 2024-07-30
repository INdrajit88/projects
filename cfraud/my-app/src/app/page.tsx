import Image from "next/image";
import { currentUser,useuser } from "@clerk/nextjs/server";

export default async function Home() {
  const user=await currentUser();
  
  return (
    <div>Homepage</div>
  )
}
