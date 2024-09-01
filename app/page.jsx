"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  // Navigate to Login Page
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, [router]);
  return;
};

export default Page;
