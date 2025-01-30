import type { Metadata } from "next";
import { LandingPage } from "@/app/home";

export const metadata: Metadata = {
  title: "Home | FulfillmentByX",
  description: "Unlock Seamless E-Commerce Growth Across Africa with FBX. Experience total control over your fulfillment operations with a platform that lets you oversee inventory, track storage, and fulfill orders remotely.",
};

export default function Home() {
  return (
    <LandingPage/>
  );
}
