import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Le Viet Khanh's Portfolio - Game Developer & AI Enthusiast
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I’m Le Viet Khanh, a Unity Developer with 3 years of experience
          specializing in casual and hyper-casual games. I've contributed to
          projects with over 50 million downloads and worked on both mobile and
          web game development. I'm also passionate about artificial
          intelligence and immersive experiences. You can learn more about my
          work on my portfolio or reach out to me via{" "}
          <a href={`mailto:${socialLinks.email}`} target="_blank">
            email
          </a>.
        </p>
        <p>
          I have experience in C#, Python, Unity, AI, VR, and more. I'm always
          eager to collaborate and push the boundaries of what’s possible in
          gaming and AI.
        </p>
        <p>
          You can also find my work on{" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>{" "}
          and follow my updates on{" "}
          <a href={socialLinks.twitter} target="_blank">
            Twitter
          </a>.
        </p>
        <p>
          Built with{" "}
          <a href="https://vercel.com" target="_blank">
            Vercel
          </a> and{" "}
          <a href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </a>.
        </p>
      </div>
    </section>
  );
}
