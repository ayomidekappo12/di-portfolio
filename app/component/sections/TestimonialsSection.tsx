export default function TestimonialsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#003B36] px-5 py-2 text-sm font-medium text-[#E4FFF2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.3327 7.99984C14.3327 11.4976 11.4971 14.3332 7.99935 14.3332C6.91395 14.3332 5.89228 14.0601 4.99935 13.579C3.75386 12.9078 2.91576 13.5318 2.17663 13.6437C2.06451 13.6607 1.95284 13.62 1.87266 13.5398C1.75096 13.4181 1.72779 13.2299 1.79502 13.0714C2.08512 12.3877 2.35148 11.092 1.98829 9.99984C1.77922 9.37117 1.66602 8.6987 1.66602 7.99984C1.66602 4.50203 4.50154 1.6665 7.99935 1.6665C11.4971 1.6665 14.3327 4.50203 14.3327 7.99984Z"
                stroke="#E4FFF2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.66602 8.6651C5.66602 8.6651 6.33268 8.6651 6.99935 9.77623C6.99935 9.77623 8.45035 6.99843 10.3327 6.44287"
                stroke="#E4FFF2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Testimonials
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2">
          {[
            {
              name: "Anita Lever",
              role: "Upwork Freelancer",
              text: `I worked with Divinefortune on a client's AI-powered beauty web app project, and the experience was very smooth. She was reliable, communicative, and paid close attention to detail throughout the project.

The platform involved beauty analysis, personalised makeup recommendations, and user-focused web app flows, and Divinefortune handled her responsibilities with professionalism and creativity.

She was proactive with feedback, easy to collaborate with, and always willing to improve the final outcome. I'd definitely recommend her to anyone looking for someone dedicated and pleasant to work with.`,
              img: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778834377/ZdLOHm3kpYVlnZbcig7rVvts.jpg_npnmk4.svg",
            },
            {
              name: "Patricia Adonduwa",
              role: "Digital Marketer Niche CX",
              text: `I worked with Divinefortune on several projects, including an AI-powered dental web application that detects dental issues and recommends available dentists, and she consistently proved to be an exceptional team member.

She was highly proactive, brought innovative ideas to the table, and played a key role in keeping the team motivated and on track to meet deadlines ahead of schedule. Divinefortune took ownership of her responsibilities, maintained high standards, and wasn't afraid to hold the team accountable when needed to ensure we delivered our best work.

She's reliable, collaborative, and genuinely committed to achieving great results, and I'd confidently recommend her to any team or organization.`,
              img: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778834376/ZdLOHm3kpYVlnZbcig7rVvts.jpg_1_wgtmfx.svg",
            },
          ].map((t, index) => (
            <div
              key={t.name}
              className={`flex flex-col justify-between px-4 md:px-10 ${
                index === 0
                  ? "md:border-r md:border-[#D9D9D9]"
                  : "md:pl-12 mt-16 md:mt-0"
              }`}
            >
              {/* Text */}
              <div>
                <p className="whitespace-pre-line text-[15px] leading-[1.9] text-[#7A7A7A]">
                  {t.text}
                </p>
              </div>

              {/* User */}
              <div className="mt-12 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  width={52}
                  height={52}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-[#1E1E1E]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#9B9B9B]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
