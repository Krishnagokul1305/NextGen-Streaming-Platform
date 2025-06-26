import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Dummy user (replace with DB later)
const dummyUser = {
  id: "1",
  username: "testuser",
  email: "test@example.com",
  password: "1234",
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (typeof email !== "string" || typeof password !== "string") {
          throw new Error("Invalid credentials format");
        }

        // Check against dummy user
        if (email === dummyUser.email && password === dummyUser.password) {
          return {
            id: dummyUser.id,
            username: dummyUser.username,
            email: dummyUser.email,
          };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id);
        session.user.email = String(token.email);
      }
      return session;
    },
  },
});
