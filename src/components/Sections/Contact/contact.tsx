'use client';
import React, { useRef } from 'react';
import Section from '@/components/Common/Section';
import { useUIData } from '@/hooks/useUIData';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const { navItems, constants } = useUIData()
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const currentForm = form.current;
    if (!currentForm) return;

    emailjs.sendForm("service_quien697", "template_quien697", currentForm, "z1oIewy7PtxLBDhk6")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Section id={navItems.contact.value} isPrimary={false} title={navItems.contact.title}>
      <div className="flex flex-col items-center g-y-4">
        <h3 className="text-xl text-bold mb-4 lg:text-3xl md:text-2xl">{constants.getInTouch}</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap justify-center text-white gap-4">
            <input
              name="name"
              required
              placeholder={constants.name}
              className="grow bg-neutral-800 outline-primary rounded-md px-3 py-2">
            </input>
            <input
              name="email"
              required
              placeholder={constants.email}
              className="grow bg-neutral-800 outline-primary rounded-md px-3 py-2">
            </input>
            <textarea
              name="message"
              required rows={5}
              placeholder={constants.message}
              className="w-full bg-neutral-800 outline-primary rounded-md px-3 py-2">
            </textarea>
            <button
              type="submit"
              className="bg-primary rounded-full py-3 px-7 shadow-lg hover:bg-blue-800"
            >
              {constants.sendMessage}
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}