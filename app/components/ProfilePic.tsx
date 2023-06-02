import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/profile-photo.jpg"
        alt="Justin Clark"
        width={200}
        height={200}
        priority
      />
    </section>
  );
}
