import { useForm, SubmitHandler } from 'react-hook-form'
import './App.css'
import { FormCard } from './interfaces'
import { useState } from 'react';

function App() {
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const {register, handleSubmit, formState: {errors}} = useForm<FormCard>()

  const submit:SubmitHandler<FormCard> = (data) => {
    setIsComplete(!isComplete)
  }

  return (
    <main className="App font-space-grotesk text-normal-size desktop:flex min-h-screen">
      <header className='bg-header-mobile desktop:bg-header-desktop desktop:w-1/3 bg-no-repeat pb-12 w-full bg-cover'>
        <div className='max-w-[375px] desktop:h-full desktop:max-w-none mx-auto relative'>
          <div className='app__backCard'>
            <img src="/images/bg-card-back.png" alt="image back card" />
          </div>
          <div className='app__frontCard'>
            <section className='card__header'>
              <img className='w-14' src="/images/card-logo.svg" alt="" />
            </section>
            <section className='card__body'>
              <h2 className='text-xl desktop:text-[24px] text-center tracking-[1.3px] font-normal'>0000 0000 0000 0000</h2>
              <div className='flex justify-between text-[11px] mt-2 desktop:mt-4'>
                <h3>JANE APPLESEED</h3>
                <h3>00/00</h3>
              </div>
            </section>
          </div>
        </div>
      </header>
      <section className='text-black text-normal-size flex justify-center desktop:flex desktop:justify-center desktop:items-center desktop:w-2/3'>
        {
          isComplete ? (
            <section className='max-w-[400px] mt-24 desktop:mt-0 text-center'>
              <div className='mx-auto max-w-max'>
                <img src="/images/icon-complete.svg" alt="" />
              </div>
              <h2 className='uppercase mt-6 mb-4 text-very-dark-violet font-bold text-2xl tracking-widest'>Thank you!</h2>
              <p className='text-gray-400 font-bold tracking-widest text-base'>We've added your card details</p>
              <button className='bg-black mt-10 text-white p-2 rounded-md w-full hover:bg-gray-700 transition duration-200' onClick={() => setIsComplete(!isComplete)}>Continue</button>
            </section>
          ) : (
            <form onSubmit={handleSubmit(submit)} className='p-6 mt-16 max-w-[375px] mx-auto'>
              <div className='app__form__div'>
                <label 
                  htmlFor="cardHolderName" 
                  className='app__label border-red-600'
                >CARDHOLDER NAME</label>
                <input 
                  id='cardHolderName' 
                  type="text" 
                  placeholder='e.g. Jane Applessed' 
                  className={`app__input ${errors.cardHolderName ? "input-error" : ""}`} 
                  {...register("cardHolderName", {required: "This field is required"})} 
                />
                <p className='mt-2 text-red-errors text-sm h-2'>{errors.cardHolderName && errors.cardHolderName.message}</p>
              </div>

              <div className='app__form__div'>
                <label 
                  htmlFor="cardNumber" 
                  className='app__label'
                >CARD NUMBER</label>
                <input 
                  id='cardNumber' 
                  type="text" 
                  placeholder='e.g. 1234 5678 9123 0000' 
                  className={`app__input ${errors.cardNumber ? "input-error" : ""}`} 
                  {...register("cardNumber", {required: "This field is required"})} 
                />
                <p 
                  className='mt-2 text-red-errors text-sm h-2'
                >{errors.cardNumber && errors.cardNumber.message}</p>
              </div>

              <div className='app__form__div flex gap-2'>

                <div className='w-[70%]'>
                  <label 
                    htmlFor="date" 
                    className='app__label'
                  >EXP. DATE (MM/YY)</label>
                  <div className='flex gap-2'>
                    <input 
                      id='date' 
                      type="text" 
                      placeholder='MM' 
                      className={`app__input ${errors.mm ? "input-error" : ""}`} 
                      {...register("mm", {required: "This field is required"})} 
                    />
                    <input 
                      type="text" 
                      placeholder='YY' 
                      className={`app__input ${errors.yy ? "input-error" : ""}`} 
                      {...register("yy", {required: "This field is required"})} 
                    />
                  </div>
                  <p 
                    className='mt-2 text-red-errors text-sm h-2'
                  >{(errors.mm || errors.yy) && (errors.mm?.message || errors.yy?.message)}</p>
                </div>

                <div className='w-[30%] relative'>
                  <label 
                    htmlFor="cvc" 
                    className='app__label'
                  >CVC</label>
                  <input 
                    id='cvc' 
                    type="text" 
                    className={`app__input ${errors.cvc ? "input-error" : ""}`} 
                    placeholder='e.g. 123' 
                    {...register("cvc", {required: "This field is required"})} 
                  />
                  <p 
                    className='mt-2 text-red-errors text-sm absolute -left-10 w-40'
                  >{errors.cvc && errors.cvc.message}</p>
                </div>

              </div>
              <button type='submit' className='bg-black text-white p-4 rounded-md w-full hover:bg-gray-700 transition duration-200'>Confirm</button>
            </form>
          )
        }
      </section>
    </main>
  )
}

const App2 = ({children}: any) => {

  console.log(children)


  return <h1 className='text-white text-2xl'>Hello world</h1>
}

export default App
