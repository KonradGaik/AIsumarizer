import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between item-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumarize-logo" className='w-28 object-contain' />
            <button type="button" onClick={() => {window.open('http://github.com')}} className='black_btn'>Github</button>
        </nav>
        <h1 className='head_text max-md:hidden'> Summarize Article with <span className='orange_gradient'>GTP-4</span></h1>
        <h2 className='desc'>Simplify your reading with Summize articles</h2>
    </header>
  )
}

export default Hero