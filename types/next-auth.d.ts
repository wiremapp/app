import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    token: string;
    user: { userId: string | null } & DefaultSession["user"];
  }
}
export { NextAuthOptions };

