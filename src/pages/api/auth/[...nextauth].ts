import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email";

import NextAuth, { NextAuthOptions } from "next-auth";
import dbConnect from "@/utils/db";
import jwt from "jsonwebtoken";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
  
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
  adapter: MongoDBAdapter(dbConnect().then(mon => mon.connection.getClient())),
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

