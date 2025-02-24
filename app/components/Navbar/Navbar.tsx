"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";
import WhatsApp from "./whatsapp";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "من نحن", href: "/about", current: false },
  { name: "خدماتنا", href: "/services", current: false },
  { name: "الأسئلة الشائعة", href: "/faq", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-20 top-0 left-0 transition-colors duration-300 
            ${isSticky
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
        }`}
    >
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="block">

                  <Image
                    src={isSticky ? '/images/logo_dark.png' : "/images/logo.png"}
                    alt="ديم السحاب"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>

              {/* LINKS */}
              <div className="hidden lg:flex items-center">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : `hover:text-gray-700 transition-colors duration-300 ${isSticky ? "text-black" : "text-white"
                          }`,
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:hidden sm:flex sm:justify-center sm:items-center" style={{ width: '63%' }}>
                  <div className="flex justify-end space-x-4">
                  {navigation.filter((_, index) => index === 0 || index === navigation.length - 1).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : `hover:text-gray-700 transition-colors duration-300 ${isSticky ? "text-black" : "text-white"
                          }`,
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
              </div>

              <Contactusform />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className={`block h-6 w-6 cursor-pointer transition-colors duration-300 
                                ${isSticky ? "text-black" : "text-white"}`}
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
