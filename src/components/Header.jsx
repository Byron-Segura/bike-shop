export function Header() {
  return (
    <header className='min-w-full sticky top-0 bg-slate-500'>
      <div className='flex flex-col align-middle sm:flex-row sm:justify-between h-20'>
        <h2 className="text-4xl w-fit m-auto sm:m-0">Bike40</h2>
        <nav className="bg-slate-400 align-middle">
          <ul className="flex flex-row gap-16 justify-center p-6 md:gap-32">
            <li>How to chose a Bike</li>
            <li>Bikes</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
      </header>
  )
}