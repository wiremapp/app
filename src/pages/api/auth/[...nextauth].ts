import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import EmailProvider from "next-auth/providers/email";

import NextAuth, { NextAuthOptions } from "next-auth";
import clientPromise from "@/utils/db";
import jwt from "jsonwebtoken";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || "",
        port: process.env.EMAIL_SERVER_PORT || "",
        auth: {
          user: process.env.EMAIL_SERVER_USER || "",
          pass: process.env.EMAIL_SERVER_PASSWORD || "",
        },
      },
      from: process.env.EMAIL_FROM || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        isNewUser: token.isNewUser,
        token: signToken({ token }),
      };
    },
    async jwt({ token, user, account, isNewUser }) {
      if (account && user) {
        token.access_token = account.access_token;
        if (isNewUser) token.isNewUser = isNewUser;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt" as const,
  },
};

const signToken = ({ token }) => {
  return jwt.sign(token, process.env.NEXTAUTH_SECRET);
};

export default NextAuth(authOptions);

