import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { CheckBox } from './components/CheckBox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Gradient } from './Gradient'
import { Logo } from './Logo'

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-row items-center justify-center text-gray-100">
      <div className='flex  flex-col items-center mr-10'>
        <Logo/>

        <Heading size="lg" className='mt-[30px]'>Ignite Lab</Heading>

        <Text size="lg" className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
      </div>

      <form  className=' z-50 flex flex-1 flex-col gap-4 items-stretch w-full max-w-[400px]  pl-10 border-l-2 border-brand-500'>
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
      <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          </Text>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? crie uma agora.</a>

          </Text>
      </footer>
      </form>

    </div>
  )
}


