import type { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role: "U" | "A" | "SP"
        } & DefaultSession["user"]
    }

    interface User {
        id: string
        role: "U" | "A" | "SP"
        hashedPassword?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string
        role?: "U" | "A" | "SP"
    }
}
