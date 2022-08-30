import { useState } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [isDeposited, setIsDeposited] = useState<boolean>(false);
  const [isWithdrawn, setIsWithdrawn] = useState<boolean>(false);

  function toggleDarkMode(): void {
    setDarkMode(!darkMode);
  }


  const renderButton = (): JSX.Element => {
    if(isWithdrawn) {
      return (
      <div>
      <p className='transition duration-300 ease-out hover:ease-in text-3xl rounded py-2 dark:text-white mb-3'>
      Astaghfirullah!!! You haram khor you wanted to commit Riba????<br /> Your tokens have been halved now for sinning.
      </p>
      </div>
      )
    }
    else if(loading) {
      return <button className='px-4 py-2 border-2 transition duration-300 motion-safe:animate-spin ease-out text-3xl rounded hover:text-white mb-3'>
        Loading...
      </button>
    }
    else if(isApproved) {
      return <button className='px-4 py-2 border-2 transition duration-300 motion-safe:animate-bounce ease-out hover:ease-in hover:bg-gradient-to-r from-[#5463FF] to-[#89CFFD] text-3xl rounded hover:text-white mb-3'>Deposit</button>
    }
    else if(isDeposited) {
      return <button className='px-4 py-2 border-2 transition duration-300 motion-safe:animate-bounce ease-out hover:ease-in hover:bg-gradient-to-r from-[#5463FF] to-[#89CFFD] text-3xl rounded hover:text-white mb-3'>Withdraw</button>
    }
    else {
      return <button className='px-4 py-2 border-2 transition duration-300 motion-safe:animate-bounce ease-out hover:ease-in hover:bg-gradient-to-r from-[#5463FF] to-[#89CFFD] text-3xl rounded hover:text-white mb-3'>Approve</button>
    }
  }
  return (
    <main className={`${darkMode && "dark"} bg-gradient-to-r from-[#6FB2D2] to-[#D8D2CB] min-h-screen`}> 
    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    <section className='dark:bg-gradient-to-r from-[#121212] to-[#002B5B] dark:text-white min-h-screen'>
      <div className='flex justify-center'>
        <h3 className='text-2xl pt-12 inline-block border-b-4 border-[#7084a0] sm:text-4xl '>Double Your Tokens with the Vault</h3>
      </div>
      <div className='sm:flex sm:items-center sm:justify-center py-16 px-20'>
      <div className=''>
        <p className='text-2xl sm:text-3xl py-4'>You own 0/1000 Gold Tokens</p>
          {renderButton()}
      </div>
      <div className='sm:ml-28'>
      {darkMode ? <img src="https://img.icons8.com/external-flat-wichaiwi/184/000000/external-token-gamefi-flat-wichaiwi.png"/> : 
      <img src="https://img.icons8.com/external-glyph-wichaiwi/184/000000/external-token-gamefi-glyph-wichaiwi.png"/>
      }
      </div>
      </div>
    </section>
    </main>
  )
}

export default Home
