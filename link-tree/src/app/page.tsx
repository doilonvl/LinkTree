"use client";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
const links = [
  {
    title: "GitHub",
    href: "https://github.com/doilonvl",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/vu.nghuyenhuy.1",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/v%C5%A9-nguy%E1%BB%85n-huy-047670280/",
  },
  {
    title: "Email",
    href: "mailto:cafeomcua2@gmail.com",
  },
];
export default function Home() {
  const curHref = typeof window !== "undefined" ? window.location.href : "";

  const [modal, setModal] = useState({
    open: false,
    link: {
      title: "",
      url: "",
    },
  });
  return (
    <main
      className={
        "py-8 px-4 min-h-screen bg-gradient-to-b from-stone-300 to-stone-50 via-purple-100"
      }
    >
      <div className={"max-w-2xl mx-auto my-8 relative"}>
        <div className={"absolute left-full bottom-full"}>
          <Button
            variant={"secondary"}
            size={"icon"}
            className={"rounded-full"}
            onClick={() =>
              setModal({
                open: true,
                link: {
                  url: curHref,
                  title: "Link của tôi",
                },
              })
            }
          >
            <DotsHorizontalIcon />
          </Button>
        </div>
        <Avatar className={"h-24 w-24 mx-auto"}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <section className={"text-center mt-5"}>
          <h1 className={"text-xl font-semibold mb-1"}>Doilonvl</h1>
          <p className={""}>I&apos;m a professional web developer</p>
        </section>

        <section className={"flex flex-col gap-4 mt-8 w-full mx-auto"}>
          {links.map((link, index) => (
            <Fragment key={index}>
              <div
                className={
                  "group rounded-full overflow-hidden shadow-md hover:shadow-lg relative "
                }
              >
                <a
                  className={
                    "py-5 px-12 text-center bg-white text-neutral-950 block"
                  }
                  href={link.href}
                  target={"_blank"}
                >
                  <span className="leading-snug">{link.title}</span>
                </a>
                <div
                  className={
                    "flex lg:hidden group-hover:flex z-10 absolute right-0 top-0 h-full aspect-square items-center justify-center"
                  }
                >
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className={"rounded-full"}
                  >
                    <DotsHorizontalIcon />
                  </Button>
                </div>
              </div>
            </Fragment>
          ))}
        </section>
      </div>
      <Dialog
        open={modal.open}
        onOpenChange={(open: boolean) => setModal({ ...modal, open })}
      >
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className={"sm:max-w-sm md:max-w-lg md:rounded-2xl"}>
          <DialogHeader>
            <DialogTitle className={"text-center text-base"}>
              Chia sẻ link
            </DialogTitle>
          </DialogHeader>
          <div>
            <a
              href={modal.link.url}
              target={"_blank"}
              className={
                "flex flex-col gap-1 items-center py-6 px-5 w-full sm:max-w-80 mx-auto bg-stone-100 rounded-3xl"
              }
            >
              <h3 className={"text xl font-bould leading-snug"}>
                {modal.link.title}
              </h3>
              <p
                className={
                  "text-[13px] text-center whitespace-nowrap w-36 overflow-hidden text-ellipsis"
                }
              >
                {modal.link.url}
              </p>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
