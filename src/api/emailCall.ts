import type { EmailEntity } from "@/Entities/EmailEntity";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const backendPort = import.meta.env.VITE_BACKEND_PORT;
const backendEmailRoute = import.meta.env.VITE_EMAIL_ROUTE;


export const emailCall = async (email: EmailEntity): Promise<void> => {
    const response = await fetch(`${backendUrl}:${backendPort}${backendEmailRoute}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
    });
    if (!response.ok) {
        throw new Error("Error sending email");
    }
}