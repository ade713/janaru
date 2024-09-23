import React from "react";
import { checkAuth } from "@/lib/server-utils";

export default async function UsernameDisplay() {
  const session = await checkAuth();

  return <p>{session.user.name}</p>;
}
