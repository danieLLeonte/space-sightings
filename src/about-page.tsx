export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-2 gap-y-4">
      <h2 className="text-3xl font-bold text-center">About</h2>
      <p className="max-w-prose">
        "Space Sightings" is a web application that integrates NASA's Astronomy
        Picture of the Day (APOD) API, to provide users with a daily dose of
        space wonders.
      </p>
      <span className="max-w-prose">
        "Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer." -{" "}
        <a
          href="https://apod.nasa.gov/apod/astropix.html"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primaryBlue"
        >
          APOD
        </a>
      </span>
      <div className="flex flex-col items-center justify-center gap-2">
        <p>This application was built using React, TypeScript, Tailwind CSS.</p>
        <span>
          The source code is available on{" "}
          <a
            href="https://github.com/danieLLeonte/space-sightings"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primaryBlue"
          >
            GitHub
          </a>
          .
        </span>
      </div>
    </main>
  );
}
