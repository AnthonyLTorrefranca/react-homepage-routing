const HEROSEC = '/src/assets/hero.jpg'

export default function Home() {
  return (
    <>
      <img src={HEROSEC} alt="Hero section" className="w-screen"></img>
      <h1>Home</h1>
      <p>Welcome to our clothing store!</p>
      <p>Choose products below.</p>
    </>
  );
}
