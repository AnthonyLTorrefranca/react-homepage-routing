const HEROSEC = '/src/assets/hero.jpg'

export default function Home() {
  return (
    <div>
      <img src={HEROSEC} alt="Hero section" className="w-screen z-0"></img>
      <div className="absolute top-50 right-100">
        <p className="text-9xl">Home</p>
        <p className="text-4xl">Welcome to our clothing store!</p>
        <p className="text-2xl">Choose products below.</p>
      </div>
    </div>
  )
}