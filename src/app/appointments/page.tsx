"use client";

import { useState } from "react";

import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";
import PageHero from "@/src/components/ui/page-hero";

import Input from "@/src/components/ui/input";
import Textarea from "@/src/components/ui/textarea";
import Button from "@/src/components/ui/button";

import {
  appointmentSchema,
  AppointmentFormData,
} from "@/src/lib/validations/appointment";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

export default function AppointmentsPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(
      appointmentSchema
    ),
  });

  async function onSubmit(
    data: AppointmentFormData
  ) {
    try {
      setLoading(true);

      console.log(data);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success(
        "Appointment request submitted successfully."
      );

      reset();
    } catch {
      toast.error(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Navbar />

      <PageHero
        title="Book Appointment"
        subtitle="Consult our Ayurvedic specialists for personalized treatment."
      />

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="space-y-6"
            >
              <Input
                label="Full Name"
                placeholder="Enter your name"
                error={errors.name?.message}
                {...register("name")}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                error={errors.email?.message}
                {...register("email")}
              />

              <Textarea
                label="Symptoms / Message"
                rows={6}
                placeholder="Describe your symptoms"
                error={
                  errors.message?.message
                }
                {...register("message")}
              />

              <Button
                className="w-full"
              >
                {loading
                  ? "Submitting..."
                  : "Book Appointment"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}