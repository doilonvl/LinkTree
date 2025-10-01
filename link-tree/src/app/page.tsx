import HomePage from "@/modules/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkTree Doilonvl web",
  description: "LinkTree Website",
  openGraph: {
    title: "LinkTree Doilonvl web",
    description: "LinkTree Website",
    images: "/opengraph-image",
  },
};
export default function Page() {
  return (
    <>
      <HomePage />
    </>
  );
}
