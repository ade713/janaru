import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";
import { CreateEntori } from "@/components/create-entori";
import { Feed } from "@/components/feed";
import React from "react";

export default function Page() {
  return (
    <div className="grid grid-rows-[4rem_43rem_2rem] h-screen">
      <AppHeader />
      <main className="grid grid-cols-9 py-6 px-6">
        <Feed />
        <CreateEntori />
      </main>
      <AppFooter />
    </div>
  );
}

// 43 rem for max
