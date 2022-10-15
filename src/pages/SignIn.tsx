import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import LogoSvg from "../assets/react-2.svg"
import axios from 'axios';

export function SignIn() {
    const [ isUserSignedIn, setIsUserSignedIn ] = useState(false)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('/sessions',{
            email: 'diegobtistadev@gmail.com',
            password: '12345'
        })

        setIsUserSignedIn(true)
    }

    return (
      <div className="w-screen h-screen flex flex-col bg-gray-900 items-center justify-center">
        <div className="w-full flex flex-col flex-1 md:flex-row items-center justify-center text-gray-100">
          <div className='flex  flex-col items-center md:mr-10 mb-5 overflow-hidden'>
              <img src={LogoSvg} alt="" className="w-80 md:w-[400px] px-4  animate-[spin_5s_linear_infinite]" />


            <Heading size="lg" className='mt-6 md:mt-[30px]'>Ignite Lab</Heading>

            <Text size="lg" className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
          </div>

          <div className="hidden md:flex w-[2px] h-[600px] bg-brand-500 rounded"></div>

          <form onSubmit={handleSignIn}  className=' z-50 flex md:flex-1 flex-col gap-4 md:items-stretch w-full max-w-[350px] md:max-w-[400px] mx-1 md:ml-10 '>
            { isUserSignedIn && <Text>Login realizado!</Text>}

            <label htmlFor='email' className='flex flex-col gap-3'>
              <Text className='font-semibold'>Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope/>
                </TextInput.Icon>
                <TextInput.Input type="email" id="email" placeholder='Johndoe@example.com'/>
              </TextInput.Root>
            </label>
            <label htmlFor='email' className='flex flex-col gap-3'>
              <Text className='font-semibold'>Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock/>
                </TextInput.Icon>
                <TextInput.Input type="password" id="password" placeholder='********'/>
              </TextInput.Root>
            </label>

            <label htmlFor='remember' className='flex items-center gap-2'>
              <CheckBox id="remember"/>
              <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
            </label>

            <Button type="submit" className='mt-4'>
            Entrar na plataforma
            </Button>
            <footer className='flex flex-col items-center gap-2 md:gap-4 mt-3 mb-4 md:mt-8'>
                <Text asChild size='sm'>
                  <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
                </Text>
                <Text asChild size='sm'>
                  <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? crie uma agora.</a>

                </Text>
            </footer>
          </form>

        </div>
        <div className="flex  md:w-full items-center justify-center mb-3">
          <Text  className="mr-1 text-[12px] md:text-sm">
            Feito com 💜 por
          </Text>
          <Text asChild className="mr-1">
            <a href="https://github.com/Diego-Batista" className="text-gray-400  text-[12px] md:text-sm underline hover:text-gray-200">Diego batista</a>
          </Text>
          <Text className="mr-1 text-[12px] md:text-sm">
            no evento Ignite Lab
          </Text>
          <Text asChild>
            <a href="https://www.rocketseat.com.br/" className="text-gray-400 text-[12px] md:text-sm underline hover:text-gray-200 ">da Rocketseat</a>
          </Text>
        </div>
      </div>
      
    )
}