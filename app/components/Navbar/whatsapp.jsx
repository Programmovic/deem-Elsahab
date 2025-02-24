"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WhatsApp = ({ text }) => {
  const openWhatsApp = () => {
    window.open("https://wa.me/966554222594", "_blank");
  };

  return (
    <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
      <div className="w-full">
        <button
          type="button"
          className="w-full flex items-center gap-9 text-xl font-semibold border-2 border-[green] text-[white] py-4 px-6 lg:px-12 rounded-lg bg-[green] hover:bg-[transparent] transition-colors duration-300 hover:shadow-xl"
          onClick={openWhatsApp}
        >
          <MessageCircle className="w-6 h-6" />
          {text}
        </button>
      </div>
    </div>
  );
};

export default WhatsApp;
