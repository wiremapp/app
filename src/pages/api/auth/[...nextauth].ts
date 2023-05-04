import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import DiscordProvider from "next-auth/providers/discord";
import NextAuth, { NextAuthOptions } from "next-auth";
import jwt from "jsonwebtoken";

const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
      authorization: { params: { scope: "identify guilds" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
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
