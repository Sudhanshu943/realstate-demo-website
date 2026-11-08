import type { Metadata } from "next";
import { DesignMenu } from "@/components/designs/DesignMenu";

export const metadata: Metadata = {
  title: "Real-estate Design Lab — 10 Concepts | AGS",
  description: "Explore ten distinct real-estate interface and brand directions.",
};

export default function HomePage() {
  return <DesignMenu />;
}
