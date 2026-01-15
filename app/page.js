import { ModeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/10 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                HealthCare Made Simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
                Connect with Doctors <br />
                <span className="gradient-title">anythime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book Appointment, consult via video, and manage your healtcare
                journey all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-700/30 text-white hover:bg-muted/80"
                >
                  <Link href="/doctor">Find Doctors</Link>
                </Button>
              </div>
            </div>{" "}
            <div className="relative h-100 lg:h-125 rounded-xl overflow-hidden">
              <Image
                src="/banner2.png"
                alt="Doctor Consultation"
                fill
                priority
                className="object-cover  rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
