"use client";

import React from "react";
import { logOut } from "@/actions/actions";

export function LogOutButton() {
  async function handleLogOut() {
    await logOut();
  }

  return (
    <button
      className="text-base transition duration-300 border border-green-950 bg-orange-500  rounded-2xl p-2 shadow hover:shadow-2xl hover:bg-orange-600/90 hover:border-2"
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
}
