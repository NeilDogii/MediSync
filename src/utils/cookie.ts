"use server";
import { cookies } from 'next/headers';

export async function setCookie(name: string, value: string, options?: {
    maxAge?: number;
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
}) {
    const cookieStore = await cookies();
    cookieStore.set(name, value, options);
}

export async function getCookie(name: string): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value || undefined;
}

export async function deleteCookie(name: string) {
    const cookieStore = await cookies();
    cookieStore.delete(name);
}