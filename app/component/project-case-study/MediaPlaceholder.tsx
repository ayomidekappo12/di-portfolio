import Image from "next/image";

export function MediaPlaceholder() {
  return (
    <section className="overflow-hidden rounded-[28px] bg-[#FFF] p-3 shadow-[2px_2px_0px_0px_rgba(13,13,13,0.10)] md:p-6">
      <div className="flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1779026218/Frame_2147229349_cvolfd.svg"
          alt="profile"
          width={1300}
          height={700}
          className="w-full rounded-lg object-cover"
        />
      </div>
    </section>
  );
}