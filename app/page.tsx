import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Coming Soon"
          width={300}
          height={300}
          priority
          className="mx-auto max-w-full h-auto"
        />
      </div>
    </div>
  )
}
