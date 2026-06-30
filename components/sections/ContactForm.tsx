"use client";

import { useState } from "react";

import { contactEmail } from "@/lib/constants";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "Influencer Campaigns",
  budget: "Under INR 5L",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${formState.name || "Avoryn website"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        `Company: ${formState.company}`,
        `Service: ${formState.service}`,
        `Budget: ${formState.budget}`,
        "",
        "Project details:",
        formState.message,
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-borderSubtle bg-panel p-6 shadow-panel md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-3 block text-[12px] uppercase tracking-[0.18em] text-textSecondary">
            Name
          </span>
          <input
            required
            type="text"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field-shell"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-3 block text-[12px] uppercase tracking-[0.18em] text-textSecondary">
            Email
          </span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="field-shell"
            placeholder="you@company.com"
          />
        </label>

        <label className="block">
          <span className="mb-3 block text-[12px] uppercase tracking-[0.18em] text-textSecondary">
            Company
          </span>
          <input
            type="text"
            value={formState.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="field-shell"
            placeholder="Brand or company"
          />
        </label>

        <label className="block">
          <span className="mb-3 block text-[12px] uppercase tracking-[0.18em] text-textSecondary">
            Service
          </span>
          <select
            value={formState.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="field-shell"
          >
            <option>Influencer Campaigns</option>
            <option>Brand Partnerships</option>
            <option>UGC &amp; Reels</option>
            <option>Content Strategy</option>
            <option>Social Media Growth</option>
            <option>Campaign Strategy</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-3 block text-[12px] uppercase tracking-[0.18em] text-textSecondary">
          Budget
        </span>
        <select
          value={formState.budget}
          onChange={(event) => updateField("budget", event.target.value)}
          className="field-shell"
        >
          <option>Under INR 5L</option>
          <option>INR 5L - 15L</option>
          <option>INR 15L - 30L</option>
          <option>INR 30L+</option>
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-3 block text-[12px] uppercase tracking-[0.18em] text-textSecondary">
          Tell us about the project
        </span>
        <textarea
          required
          rows={7}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="field-shell resize-none"
          placeholder="What are you building, changing, or launching?"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-7 text-textSecondary">
          This form opens your email client with the project brief prefilled.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full border border-accent bg-accent px-8 py-4 font-display text-base text-black transition duration-300 hover:scale-[1.03] hover:border-accentMuted hover:bg-accentMuted hover:shadow-accent"
        >
          Start a Project
        </button>
      </div>
    </form>
  );
}
