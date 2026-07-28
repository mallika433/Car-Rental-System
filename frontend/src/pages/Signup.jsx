import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CarButton } from '../components/CarButton.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Signup() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  })
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function validateField(name, value) {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required'
    }
    if (name === 'email') {
      if (!value) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address'
    }
    if (name === 'password') {
      if (!value) return 'Password is required'
      if (value.length < 8) return 'Password must be at least 8 characters'
    }
    return ''
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const user = await register(form)
      if (user.role === 'customer') {
        navigate('/')
      } else {
        navigate('/admin')
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Signup failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className='max-w-7xl mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold text-brand-black mb-8'>Sign Up</h2>
      <form onSubmit={handleSubmit} className='max-w-md space-y-6'>
        {error && (
          <p className='text-sm text-red-600 border border-red-300 bg-red-50 p-3 rounded'>
            {error}
          </p>
        )}

        <div>
          <label
            htmlFor='name'
            className='text-slate-900 font-medium text-[13px] inline-block mb-1'
          >
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            value={form.name}
            onChange={handleChange}
            placeholder='Grace Thapa'
            required
            className={`px-1 py-2.5 text-sm text-slate-900 bg-white w-full border-b-2 outline-none ${
              fieldErrors.name ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-blue-600'
            }`}
          />
          {fieldErrors.name && <p className='text-xs text-red-500 mt-1'>{fieldErrors.name}</p>}
        </div>

        <div>
          <label
            htmlFor='email'
            className='text-slate-900 font-medium text-[13px] inline-block mb-1'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            placeholder='grace@example.com'
            required
            className={`px-1 py-2.5 text-sm text-slate-900 bg-white w-full border-b-2 outline-none ${
              fieldErrors.email ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-blue-600'
            }`}
          />
          {fieldErrors.email && <p className='text-xs text-red-500 mt-1'>{fieldErrors.email}</p>}
        </div>

        <div>
          <label
            htmlFor='password'
            className='text-slate-900 font-medium text-[13px] inline-block mb-1'
          >
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            value={form.password}
            onChange={handleChange}
            placeholder='Enter your password'
            minLength={8}
            required
            className={`px-1 py-2.5 text-sm text-slate-900 bg-white w-full border-b-2 outline-none ${
              fieldErrors.password ? 'border-red-500 focus:border-red-600' : 'border-slate-300 focus:border-blue-600'
            }`}
          />
          {!fieldErrors.password && (
            <p className='text-xs text-brand-charcoal mt-1'>
              Minimum 8 characters
            </p>
          )}
          {fieldErrors.password && (
            <p className='text-xs text-red-500 mt-1'>{fieldErrors.password}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='role'
            className='text-slate-900 font-medium text-[13px] inline-block mb-1'
          >
            Select Role
          </label>
          <select
            id='role'
            name='role'
            value={form.role}
            onChange={handleChange}
            required
            className='px-1 py-2.5 text-sm text-slate-900 bg-white w-full border-b-2 border-slate-300 focus:border-blue-600 outline-none'
          >
            <option value='customer'>Customer (Rent cars, view own bookings)</option>
            <option value='staff'>Staff (Manage all bookings, cancel bookings)</option>
            {/* <option value='admin'>Admin (Add/remove cars, manage all bookings)</option> */}
          </select>
        </div>

        <CarButton
          data={isSubmitting ? 'Creating account...' : 'Sign Up'}
          type='submit'
        />

        <p className='text-sm text-brand-charcoal'>
          Already have an account?{' '}
          <Link to='/login' className='underline font-semibold'>
            Log in
          </Link>
        </p>
      </form>
    </main>
  )
}
