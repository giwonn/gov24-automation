import { Input } from '@headlessui/react'
import ThemeButton from '@/components/theme-button'

const LoginPage = () => (
  <>
    <ThemeButton />
    <SignForm />
  </>
)

export default LoginPage

const SignForm = () => (
  <div className="flex flex-cols-2 gap-3 flex-wrap-reverse">
    <div className="grid grid-rows-2 gap-4">
      <SignInInput title="ID" />
      <SignInInput title="PW" type="password" />
    </div>
    <SignInButton />
  </div>
)

const SignInInput = ({ type, title }: { type?: string; title: string }) => (
  <div className="grid grid-rows-2">
    <div>{title}</div>
    <Input
      className="
      bg-transparent border-2
      border-b-neutral-700 dark:border-b-neutral-50
      border-t-transparent dark:border-t-transparent
      border-l-transparent dark:border-l-transparent
      border-r-transparent dark:border-r-transparent
      focus:outline-none"
      type={type ?? 'text'}
    />
  </div>
)

const SignInButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
)
