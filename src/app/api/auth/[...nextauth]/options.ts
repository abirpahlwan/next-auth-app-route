import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string ?? "",
            clientSecret: process.env.GITHUB_SECRET as string ?? "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username"},
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials, req) {
                // Get user from database
                const user = {id: "42", username: "abir", password: "1234"};
                // Authorization logic
                if (credentials?.username === user.username && credentials?.password === user.password) {
                    return user;
                }
                return null;
            }
        })
    ],
}