"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  AtSign,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
  Send
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactReasons, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a subject."),
  reason: z.string().optional(),
  message: z.string().min(20, "Please share a little more detail.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

function FloatingField({
  id,
  label,
  error,
  children,
  icon
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/36">
          {icon}
        </span>
        {children}
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-11 top-2 z-10 text-[11px] font-medium uppercase text-cyan-100/80 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:text-white/42 peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:text-cyan-100/80"
        >
          {label}
        </label>
      </div>
      {error ? (
        <p className="mt-2 text-sm text-rose-200" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      reason: "AI product build"
    }
  });

  const selectedReason = watch("reason");

  const onSubmit = async (values: ContactFormValues) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();

const templateId =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();

const publicKey =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

console.log("Service ID:", serviceId);
console.log("Template ID:", templateId);
console.log("Public Key:", publicKey);

  try {
    if (!serviceId) {
  throw new Error(
    "NEXT_PUBLIC_EMAILJS_SERVICE_ID is missing"
  );
}

if (!templateId) {
  throw new Error(
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID is missing"
  );
}

if (!publicKey) {
  throw new Error(
    "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is missing"
  );
}

setPreviewMode(false);

    await emailjs.send(
      serviceId!,
      templateId!,
      {
        from_name: values.name,
        from_email: values.email,
        reply_to: values.email,
        subject: values.subject,
        reason: values.reason || "General Inquiry",
        message: values.message,
        to_email: profile.email,
      },
      {
        publicKey: publicKey!,
      }
    );

    toast.success("Message sent successfully!");

    setSent(true);

    reset({
      reason: "AI product build",
    });

    setTimeout(() => {
      setSent(false);
    }, 3200);
  } } catch (error: unknown) {
  console.error("EmailJS Error:", error);

  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "text" in error
  ) {
    const emailError = error as {
      status: number;
      text: string;
      message?: string;
    };

    console.error("Status:", emailError.status);
    console.error("Text:", emailError.text);

    toast.error(
      emailError.text || emailError.message || "Failed to send email."
    );
  } else {
    toast.error("Failed to send email.");
  }
}
};

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Bring an AI system challenge. Leave with a clear path forward."
          description="Use the form for hiring, collaboration, AI product builds, backend systems or applied GenAI work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-panel backdrop-blur-2xl">
              <Badge variant="cyan">Available for AI engineering work</Badge>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Let us talk about reliable AI.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Nishant is focused on LLM applications, RAG workflows, Python backend
                systems and cloud-ready AI product architecture.
              </p>

              <div className="mt-8 grid gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/74 transition hover:border-white/20 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-cyan-100" />
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/74 transition hover:border-white/20 hover:text-white"
                >
                  <Github className="h-4 w-4 text-violet-100" />
                  github.com/nishantverma0
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/74 transition hover:border-white/20 hover:text-white"
                >
                  <Linkedin className="h-4 w-4 text-blue-100" />
                  linkedin.com/in/nishantv003
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070912]/82 p-5 shadow-panel backdrop-blur-2xl md:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
              <input type="hidden" {...register("reason")} />

              <div className="mb-6 flex flex-wrap gap-2">
                {contactReasons.map((reason) => {
                  const Icon = reason.icon;
                  const selected = selectedReason === reason.label;

                  return (
                    <button
                      key={reason.label}
                      type="button"
                      onClick={() => setValue("reason", reason.label, { shouldDirty: true })}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition",
                        selected
                          ? "border-cyan-200/40 bg-cyan-300/12 text-cyan-50"
                          : "border-white/10 bg-white/[0.045] text-white/56 hover:text-white"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {reason.label}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FloatingField
                  id="name"
                  label="Name"
                  error={errors.name?.message}
                  icon={<AtSign className="h-4 w-4" />}
                >
                  <Input
                    id="name"
                    placeholder=" "
                    className="peer pl-11 pt-6"
                    autoComplete="name"
                    {...register("name")}
                  />
                </FloatingField>
                <FloatingField
                  id="email"
                  label="Email"
                  error={errors.email?.message}
                  icon={<Mail className="h-4 w-4" />}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder=" "
                    className="peer pl-11 pt-6"
                    autoComplete="email"
                    {...register("email")}
                  />
                </FloatingField>
              </div>

              <div className="mt-5">
                <FloatingField
                  id="subject"
                  label="Subject"
                  error={errors.subject?.message}
                  icon={<MessageSquare className="h-4 w-4" />}
                >
                  <Input
                    id="subject"
                    placeholder=" "
                    className="peer pl-11 pt-6"
                    {...register("subject")}
                  />
                </FloatingField>
              </div>

              <div className="mt-5">
                <FloatingField
                  id="message"
                  label="Message"
                  error={errors.message?.message}
                  icon={<MessageSquare className="h-4 w-4" />}
                >
                  <Textarea
                    id="message"
                    placeholder=" "
                    className="peer pl-11 pt-7"
                    {...register("message")}
                  />
                </FloatingField>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-md text-xs leading-5 text-white/42">
                  Typical response window: within one business day.
                </p>
                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : sent ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending" : sent ? "Sent" : "Send Message"}
                </Button>
              </div>

              <AnimatePresence>
                {sent ? (
                  <motion.div
                    className="absolute inset-0 grid place-items-center bg-[#070912]/86 backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="grid place-items-center text-center"
                      initial={{ scale: 0.86, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.95, y: -8 }}
                    >
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-300/14 text-emerald-100">
                        <CheckCircle2 className="h-8 w-8" />
                      </span>
                      <p className="mt-4 font-semibold text-white">
                        {previewMode ? "Message ready" : "Message sent"}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {previewMode
                          ? "Use the email link for direct delivery."
                          : "Thanks for reaching out."}
                      </p>
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
