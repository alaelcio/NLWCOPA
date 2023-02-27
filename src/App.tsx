import LogoImage from './assets/logo.svg';
import celularcImage from './assets/celular.png';
import avataresImage from './assets/avatares.png';
import iconImage from './assets/icon.svg';
function App() {
 
   return(

    <div className="max-w-[1124px] w-screen mx-auto  grid grid-cols-2 gap-28 items-center">


    <main>
           <img src={LogoImage} alt="nlw copa" />
  
        <h1 className="mt-13 text-white text- text-4xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre seu amigos!</h1>
  
                    <div className=' mt-10 flex items-center gap-2'>
                    <img src={avataresImage} alt="" />
              
                    <strong className="text-gray-100">
                      <span className=" text-ignite-500">+12.658</span> pessoas  já estão usando
                    </strong>
                    </div>
              <form className="mt-10 flex gap-2" >
                          <input 
                          className="flex-1 px-6 py-4 rounded bg-slate-800 border border-gray-600"
                          type="text" 
                          required placeholder=
                          'Qual  nome  seu bolão' />
        
                          <button 
                              className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
                              type='submit'>
                              criar meu bolão
                          </button>
              </form>
  
                    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                        Após  criar seu bolão, você receberá um código Único que poderá usar 
                        para convidar outras pessoas
                      
                    </p>
              
         <div className="mt-10 pt-10 border-t border-gray-600 items-center  flex justify-between text-gray-100">
  
                <div className="flex items-center gap-6">
                    <img src={iconImage} alt="" />
  
                      <div className="flex flex-col">
                        <span className=''>2.562</span>
                        <span>Bolões Criados</span>
                      </div> 
                </div>
            
                        <div className="w-px h-10 bg-gray-600"/>


                  <div className="flex items-center gap-6">
                       <img src={iconImage} alt="" />
              
                        <div className="flex flex-col">
                          <span>2.562</span>
                          <span>Palpites enviados</span>
                          </div>
                  </div>
            </div>
         
    </main>
  
     
      
    <div>
        <img src={celularcImage} alt="" />
    </div>
    </div>
    

   );
    
}

export default App
