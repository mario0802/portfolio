import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, MailPlus, UserPlus, XCircle } from "lucide-react"
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const inputBase =
    "w-full h-14 px-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 " +
    "border border-gray-600 focus:ring-2 " +
    "outline-none transition-all duration-300";

const textareaBase =
    "w-full min-h-[140px] px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 " +
    "border border-gray-600 focus:ring-2 " +
    "outline-none transition-all duration-300 resize-none";

const contactSchema = z.object({
    name: z
        .string()
        .min(2, "The name must be at least 2 characters long."),
    email: z
        .string()
        .email("Invalid email address"),
    message: z
        .string()
        .min(10, "The message must be at least 10 characters long"),
})

export const ContactForm = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        setSuccess(false)
        setError(false)
        const sendData = {
            "service_id": import.meta.env.VITE_EMAILJS_SERVICE_ID,
            "template_id": import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            "user_id": import.meta.env.VITE_EMAILJS_USER_ID,
            "template_params": {
                "email": data.email,
                "name": data.name,
                "message": data.message
            }
        }
        try {
            const response = await fetch(
                "https://api.emailjs.com/api/v1.0/email/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sendData),
                }
            );

            if (!response.ok) {
                throw new Error("message sent successfully");
            }
            setSuccess(true)
            reset();
        } catch (error) {
            setError(true)
            console.error("Error sending email", error);
        }
    }

    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setSuccess(false)
                setError(false)
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [success, error])
    return (
        <div className="relative w-full max-w-lg">
            {isSubmitting && (
                <div className="
                absolute inset-0 z-10
                bg-black/60 backdrop-blur-sm
                flex items-center justify-center
                rounded-2xl
                ">
                    <div className="flex flex-col items-center gap-3 text-white">
                        <span className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm">Sending message...</p>
                    </div>
                </div>
            )}
            {success && (
                <Alert className="mb-6 border-green-500/40 bg-green-500/10 text-green-300">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertTitle>Mensaje enviado</AlertTitle>
                    <AlertDescription>
                        Thank you for contacting me, I will respond soon.
                    </AlertDescription>
                </Alert>
            )}
            {error && (
                <Alert
                    variant="destructive"
                    className="mb-6"
                >
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        There was a problem sending the message. Please try again.
                    </AlertDescription>
                </Alert>
            )}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="
                w-full max-w-lg bg-gray-900/80 rounded-2xl p-8
                flex flex-col gap-6
            ">
                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <UserPlus
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                        />
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className={`${inputBase} pl-12`}
                        />
                    </div>
                    {errors.name && (
                        <span className="text-red-500 text-sm">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <MailPlus
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                        />
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email"
                            className={`${inputBase} pl-12`}
                        />
                    </div>
                    {errors.email && (
                        <span className="text-red-500 text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <textarea
                            {...register("message")}
                            rows={5}
                            placeholder="Message"
                            className={`${textareaBase}`}
                        />
                    </div>
                    {errors.message && (
                        <span className="text-red-500 text-sm">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                    bg-red-600 py-2 rounded-md text-white font-semibold
                    hover:bg-red-700 transition
                    disabled:opacity-50
                ">
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
            </form>
        </div>
    )
}
