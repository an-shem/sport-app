import NextAuth, { Account, Profile, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }: { token: JWT; account?: Account | null; profile?: Profile | null }) {
      if (account && profile) {
        token.googleId = profile.sub;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.googleId) {
        session.user = {
          ...session.user,
          googleId: token.googleId,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
