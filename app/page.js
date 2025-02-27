import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Image src="/sylonbags.png" alt="Sylon Bags" width={200} height={200} />
      <h1 className="text-4xl font-bold text-center">Sylon Bags</h1>
      <p className="text-center">Stylish and durable bags for everyday use</p>
    </div>
  );
}
