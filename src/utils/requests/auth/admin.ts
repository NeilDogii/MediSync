"use server";

import { API } from "@/constants/environment/variables";

export async function adminLogin({ username, password }: { username: string; password: string }) {
    if(!username || username.trim() === "" || !password || password.trim() === "") {
        return { success: false, message: "Username and password are required." };
    }

    const response = await fetch(`${API}/auth/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message || "Login failed." };
    }

    const data = await response.json();
    return { success: true, token: data.token };
}